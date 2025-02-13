import React from 'react';
import { Link ,useLocation } from 'react-router-dom';
import blogData from './DummyData/blogs'; 

function BlogList() {

  const location = useLocation();
  const username = location.state?.username || '';


  return (
    <div>

      <section className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">All Blogs</h1>
          <p>Welcome, {username}!</p>
          <p className="lead">
            Explore a world of knowledge, creativity, and inspiration.
          </p>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row">

          {blogData.map((blog) => (
            <div className="col-md-4">
              <div className="card mb-4">
                <img src={blog.image} alt="Featured Blog" className="card-img-top" style={{ height: '220px' }}/>
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{`${blog.content.slice(0, 20)}...`}</p>
                  <Link to={`/blog/${blog.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

          ))}

        </div>
      </section>
    </div>
  );
}

export default BlogList;
