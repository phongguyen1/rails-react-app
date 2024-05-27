import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../../context/UserContext";

function PostForm({ post, headerText, onSubmit, buttonText }) {
    const { user } = useContext(MyContext);
    const [formData, setFormData] = useState(
        post || {
            title: "",
            body: "",
            image: "",
            user_id: user.id,
        }
    );

    return (
        <div>
            <h2 className="text-center">{headerText}</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(formData);
                }}
            >
                <div className="mb-3">
                    <label className="form-label" htmlFor="title">
                        Title:
                    </label>
                    <input
                        className="form-control"
                        id="title"
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                title: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        Image:
                    </label>
                    <input
                        className="form-control"
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                image: e.target.files[0],
                            });
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">
                        Body:
                    </label>
                    <textarea
                        className="form-control"
                        id="body"
                        value={formData.body}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                body: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <button type="submit">{buttonText}</button>
                </div>
            </form>
        </div>
    );
}

PostForm.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }),
    headerText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
};

PostForm.defaultProps = {
    post: null,
};

export default PostForm;
