import React, { useState } from 'react';
import './BecomeGuideForm.css'
import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import { useAuthenticator } from '@aws-amplify/ui-react';
//import { getCurrentUser } from 'aws-amplify/auth';

function BecomeGuideForm() {
    //TODO: get current username
    const [formData, setFormData] = useState({
      username:'',
      name: '',
      gender: '',
      email:'',
      phone:'',
      language: '',
      attractions: '',
      expertise: '',
      photoUrl:'',
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle form submission here
        console.log(formData);
    };

//TODO: fix file upload, try adding identitypool
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
    const result = await uploadData({
        key: file.name,
        data: file
       }).result;
      console.log('Succeeded: ', result);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
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
            <label htmlFor="email" className="form-label">Email:</label>
            <input
                type="text"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-input"
              value={formData.phone}
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
                    <div>
                        <input type="file" onChange={handleFileChange} />
                        <button onClick={handleUpload}>Upload</button>
                    </div>
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    );
  };

export default BecomeGuideForm;
