'use client'
import React, { useState } from 'react';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setMessage('Your subscription request has been sent. Thank you!');
      setEmail('');
    }, 2000); // Simulate a delay for the submission
  };

  return (
    <section id="hero" className="hero section dark-background">
      <img
        src="/assets/img/hero-bg.jpg"
        alt=""
      
      />
      
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 >
              Welcome to Our Website
            </h2>
            <p  data-aos-delay="200">
              We are team of talented designers making websites with Bootstrap
            </p>
          </div>

          <div className="col-lg-5"  >
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="sign-up-form">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="submit"
                  value="Subscribe"
                />
              </div>
              {loading && <div className="loading">Loading</div>}
              {message && <div className={message === 'Your subscription request has been sent. Thank you!' ? 'sent-message' : 'error-message'}>{message}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
