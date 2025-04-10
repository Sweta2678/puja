import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FeedbackForm from './FeedbackForm'; 
import FeedbackList from './FeedbackList';
import AboutUs from './AboutUs';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/feedbacks" element={<FeedbackList />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}


// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     rating: '',
//     category: '',
//     recommend: false,
//     dateOfExperience: '',
//     anonymous: false,
//     tags: '',
//     screenshot: null
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     if (type === 'checkbox') {
//       setFormData({ ...formData, [name]: checked });
//     } else if (type === 'file') {
//       setFormData({ ...formData, screenshot: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       payload.append(key, value);
//     });

//     await axios.post('http://localhost:8080/api/feedback', payload, {
//       headers: { 'Content-Type': 'multipart/form-data' }
//     });

//     setSubmitted(true);
//     setFormData({
//       name: '',
//       email: '',
//       message: '',
//       rating: '',
//       // category: '',
//       // recommend: false,
//       // dateOfExperience: '',
//       anonymous: false,
//       tags: '',
//       screenshot: null
//     });
//   };

//   return (
//     <div className="form-container">
//       <h2>Enhanced Feedback Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required={!formData.anonymous} />
//         <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required={!formData.anonymous} />
//         <textarea name="message" placeholder="Your Feedback" value={formData.message} onChange={handleChange} required />

//         <div className="star-rating">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <span
//               key={star}
//               className={star <= formData.rating ? 'star filled' : 'star'}
//               onClick={() => setFormData({ ...formData, rating: star })}
//             >
//               ★
//             </span>
//           ))}
//         </div>
//         {/* <select name="category" value={formData.category} onChange={handleChange}>
//           <option value="">Select Category</option>
//           <option value="UI">UI</option>
//           <option value="Performance">Performance</option>
//           <option value="Bug">Bug</option>
//           <option value="Feature">Feature Request</option>
//         </select> */}

//         {/* <label>
//           Recommend us?
//           <input name="recommend" type="checkbox" checked={formData.recommend} onChange={handleChange} />
//         </label> */}

//         <label>
//           Anonymous Feedback
//           <input name="anonymous" type="checkbox" checked={formData.anonymous} onChange={handleChange} />
//         </label>

//         {/* <input name="dateOfExperience" type="date" value={formData.dateOfExperience} onChange={handleChange} /> */}

//         {/* <input name="tags" type="text" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} /> */}

//         <input name="screenshot" type="file" accept="image/*" onChange={handleChange} />

//         <button type="submit">Submit</button>
//       </form>
//       {submitted && <p className="success-message">Thank you for your feedback!</p>}

//       <Link to="/feedbacks" style={{ display: 'block', marginTop: '20px', textAlign: 'center' }}>
//         View All Feedbacks
//       </Link>
//     </div>
//   );
// }
// function App() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:8080/api/feedback', { name, message });
//     setSubmitted(true);
//     setName('');
//     setMessage('');
//   };

//   return (
//     <div className="container">
//       <h2>Feedback Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Your Feedback"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {submitted && <p>Thank you for your feedback!</p>}
//       <Link to="/feedbacks" style={{ display: 'block', marginTop: '20px', textAlign: 'center' }}>
//       View All Feedbacks
//     </Link>
//     </div>


//   );
// }

export default App;
