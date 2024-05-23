import { Route, Routes } from "react-router-dom";

import PostsList from "../features/posts/PostsList";
import PostDetails from "../features/posts/PostDetails";
import NewPostForm from "../features/posts/NewPostForm";
import PostEditForm from "../features/posts/PostEditForm";
import Signup from "../features/users/Signup";
import Login from "../features/users/Login";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/" element={<PostsList />} />
            <Route path="posts/:id" element={<PostDetails />} />
            <Route path="posts/:id/edit" element={<PostEditForm />} />
            <Route path="/new" element={<NewPostForm />} />
        </Routes>
    );
}

export default AppRoutes;
