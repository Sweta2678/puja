import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/feedback')
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error('Error fetching feedback:', err));
  }, []);

  return (
    <div className="feedback-list-container">
      <h2>All Feedback</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <table className="feedback-table">
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>Email</th> */}
            <th>Rating</th>
            {/* <th>Category</th> */}
            <th>Message</th>
            {/* <th>Recommend?</th> */}
            {/* <th>Experience Date</th> */}
            {/* <th>Anonymous</th> */}
            {/* <th>Tags</th> */}
            {/* <th>Screenshot</th> */}
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((fb, index) => (
            <tr key={index}>
              <td>{fb.anonymous ? 'Anonymous' : fb.name}</td>
              {/* <td>{fb.email}</td> */}
              <td>{fb.rating}</td>
              {/* <td>{fb.category}</td> */}
              <td>{fb.message}</td>
              {/* <td>{fb.recommendation ? 'Yes' : 'No'}</td> */}
              {/* <td>{fb.dateOfExperience}</td> */}
              {/* <td>{fb.anonymous ? 'Yes' : 'No'}</td> */}
              {/* <td>{fb.tags?.join(', ')}</td> */}
              {/* <td>
                {fb.screenshot ? (
                  <a href={fb.screenshot} target="_blank" rel="noopener noreferrer">View</a>
                ) : '—'}
              </td> */}
              <td>{fb.submittedAt ? new Date(fb.submittedAt).toLocaleString() : 'N/A'}</td>
            {/* <td>{fb.createdAt}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}

export default FeedbackList;
