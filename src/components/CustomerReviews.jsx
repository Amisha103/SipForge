// src/components/CustomerReviews.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import '../CustomerReviews.css';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    review: '',
    rating: '5'
  });

  const reviewsRef = collection(db, 'customer_reviews');

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(reviewsRef, orderBy('timestamp', 'desc'));
      const data = await getDocs(q);
      setReviews(data.docs.map(doc => doc.data()));
    };

    fetchReviews();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      ...formData,
      rating: Number(formData.rating),
      timestamp: serverTimestamp()
    };

    await addDoc(reviewsRef, newReview);
    setReviews([newReview, ...reviews]);
    setFormData({ name: '', company: '', review: '', rating: '5' });
  };

  return (
    <section className="reviews-section">
      <h1 className="reviews-heading">What Our Clients Say</h1>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">“{review.review}”</p>
            <p className="review-name">— {review.name}, <span>{review.company}</span></p>
            <div className="review-stars">{'⭐️'.repeat(review.rating)}</div>
          </div>
        ))}
      </div>

      <div className="review-form-section">
        <h2>Submit Your Review</h2>
        <form onSubmit={handleSubmit} className="review-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
          <textarea
            name="review"
            placeholder="Your Review"
            value={formData.review}
            required
            onChange={handleChange}
          ></textarea>
          <select name="rating" value={formData.rating} onChange={handleChange}>
            <option value="5">⭐⭐⭐⭐⭐ (5)</option>
            <option value="4">⭐⭐⭐⭐ (4)</option>
            <option value="3">⭐⭐⭐ (3)</option>
            <option value="2">⭐⭐ (2)</option>
            <option value="1">⭐ (1)</option>
          </select>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </section>
  );
};

export default CustomerReviews;
