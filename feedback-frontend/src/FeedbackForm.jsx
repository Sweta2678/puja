import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: '',
    category: '',
    recommend: false,
    dateOfExperience: '',
    anonymous: false,
    tags: '',
    screenshot: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, screenshot: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    await axios.post('http://localhost:8080/api/feedback', payload, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
      rating: '',
      category: '',
      recommend: false,
      dateOfExperience: '',
      anonymous: false,
      tags: '',
      screenshot: null
    });
  };

  return (
    <div className="form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required={!formData.anonymous} />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required={!formData.anonymous} />
        <textarea name="message" placeholder="Your Feedback" value={formData.message} onChange={handleChange} required />

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= formData.rating ? 'star filled' : 'star'}
              onClick={() => setFormData({ ...formData, rating: star })}
            >
              ★
            </span>
          ))}
        </div>

        <label>
          Anonymous Feedback
          <input name="anonymous" type="checkbox" checked={formData.anonymous} onChange={handleChange} />
        </label>

        <input name="screenshot" type="file" accept="image/*" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
      {submitted && <p className="success-message">Thank you for your feedback!</p>}

      <Link to="/feedbacks" style={{ display: 'block', marginTop: '20px', textAlign: 'center' }}>
        View All Feedbacks
      </Link>
    </div>
  );
}

export default FeedbackForm;
