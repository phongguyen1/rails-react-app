// API_URL comes from the .env.development file
import { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { deletePost } from "../../services/postService";

import SearchBar from "./SearchBar";
import usePostsData from "../../hooks/usePostsData";
import useURLSearchParam from "../../hooks/useURLSearchParam";

import Pagination from "./Pagination";
import { MyContext } from "../../context/UserContext";
import "../../assets/stylesheets/posts.css";

function PostsList() {
    const { user } = useContext(MyContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useURLSearchParam("search");

    const [searchParams, setSearchParams] = useSearchParams();

    const initialPageFromURL = Number(searchParams.get("page") || "1");
    const [currentPage, setCurrentPage] = useState(initialPageFromURL);
    const [deletedID, setDeletedID] = useState(null);

    const { posts, totalPosts, loading, error, perPage } = usePostsData(debouncedSearchTerm, currentPage, deletedID);

    useEffect(() => {
        const initialSearchTerm = searchParams.get("search") || "";
        setSearchTerm(initialSearchTerm);

        const pageFromURL = searchParams.get("page") || "1";
        setCurrentPage(Number(pageFromURL));
    }, [searchParams]);

    const deletePostHandler = async (id) => {
        try {
            await deletePost(id);
            setDeletedID(id);
        } catch (e) {
            console.error("Failed to delete the post: ", e);
        }
    };

    const handleImmediateSearchChange = (searchValue) => {
        setSearchTerm(searchValue);
    };

    const handleDebouncedSearchChange = (searchValue) => {
        setDebouncedSearchTerm(searchValue);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);

        // Update the URL to include the page number
        setSearchParams({ search: debouncedSearchTerm, page: page });
    };

    return (
        <div>
            <h1 className="text-center mb-3">Posts List</h1>
            <div className="d-flex flex-column">
                <SearchBar
                    value={searchTerm}
                    onSearchChange={handleDebouncedSearchChange}
                    onImmediateChange={handleImmediateSearchChange}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPosts={totalPosts}
                    postsPerPage={perPage}
                    onPageChange={handlePageChange}
                />
            </div>

            {loading && <p>Loading...</p>}
            {error && <p>Error loading posts.</p>}

            <div className="text-center">
                <div className="row align-self-stretch">
                    {posts.map((post) => (
                        <div key={post.id} className="col-3">
                            <div className="card post-card">
                                {
                                    <div
                                        className="post-card__image"
                                        style={{ backgroundImage: `url(${post.image_url})` }}
                                    ></div>
                                }
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                </div>
                                <div className="card-body">
                                    <Link className="card-link" to={`/posts/${post.id}`}>
                                        Detail
                                    </Link>
                                    {user?.id === post.user_id && (
                                        <>
                                            <Link className="card-link" to={`/posts/${post.id}/edit`}>
                                                Edit
                                            </Link>
                                            <Link
                                                className="card-link"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    deletePostHandler(post.id);
                                                }}
                                            >
                                                Delete
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostsList;
