import React from 'react';

function Home() {
  return (
    <div data-testid="home-component">
      <section className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Our Blogging Platform</h1>
          <p className="lead">
            Explore a world of knowledge, creativity, and inspiration.
          </p>
          <a href="/login" className="btn btn-light btn-lg">Get Started</a>
        </div>
      </section>
    </div>
  );
}

export default Home;

