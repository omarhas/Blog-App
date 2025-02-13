import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from './DummyData/blogs'; // Import your blog data from the JSON file

function BlogDetail() {
  const { id } = useParams(); // Get the id parameter from the URL
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      // Add the comment to the comments array (you can send this data to a server as well)
      setComments([...comments, comment]);
      // Clear the comment input
      setComment('');
    }
  };

  useEffect(() => {
    // Find the specific blog post data based on the id
    const foundBlog = blogData.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    } else {
      console.error('Blog not found');
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="about-section bg-primary" style={{ maxHeight: '150px' }}>
        <h2 className="h1-responsive font-weight-bold text-center my-4">{blog.title}</h2>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body" id="blog-details">
                <h5 className="card-title text-center font-weight-bold">{blog.title}</h5>
                <div className="text-center">
                  <img src={blog.image} alt="Blog" className="img-fluid" />
                </div>
                <p className="card-text">{blog.content}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add a Comment</h5>
                <form onSubmit={handleSubmitComment}>
                  <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                      className="form-control"
                      id="comment"
                      rows="3"
                      value={comment}
                      onChange={handleCommentChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div id="comments-container" className="col-md-8 mt-4">
            <h5 className="text-center">Comments</h5>
            {comments.length === 0 ? (
              <p>No comments yet.</p>
            ) : (
              <ul className="list-group">
                {comments.map((comment, index) => (
                  <div className="card" style={{ marginBottom: '10px' }}>
                    <div className="card-body" id="blog-details" style={{ maxHeight: '40px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                      {comment}
                    </div>
                  </div>


                ))}
              </ul>
            )}
          </div>

        </div>
      </div></div>
  );
}

export default BlogDetail;


