import React, { useState } from 'react';
import './BecomeGuideForm.css'

function BecomeGuideForm() {
  const [formData, setFormData] = useState({
      name: '',
      gender: '',
      language: '',
      attractions: '',
      expertise: ''
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log(formData);
    };

    return (
      <div className="form-container">
        <h2 className="form-title">Enter your information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select
              id="gender"
              name="gender"
              className="form-input"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="language" className="form-label">Language:</label>
            <input
              type="text"
              id="language"
              name="language"
              className="form-input"
              value={formData.language}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="attractions" className="form-label">Attractions:</label>
            <textarea
              id="attractions"
              name="attractions"
              className="form-input"
              value={formData.attractions}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expertise" className="form-label">Expertise:</label>
            <textarea
              id="expertise"
              name="expertise"
              className="form-input"
              value={formData.expertise}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    );
  };

export default BecomeGuideForm;
