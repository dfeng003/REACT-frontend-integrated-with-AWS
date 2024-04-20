import React, { useState } from 'react';
import './PostBlogForm.css'
import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {URL} from "./App";


function PostBlogForm({ username }) {

    const [formData, setFormData] = useState({
      username: username,
      title: '',
      content:'',
      photoUrl:'',
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
      const updatedFormData = {
                          ...formData,
                          photoUrl: `https://sgguide.s3.amazonaws.com/public/${file.name}`
                        };
        const response = await fetch(`${URL}/api/blogs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
      } catch (error) {
        console.error('Error publishing blog:', error);
      }
    };

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
        <h2 className="form-title">Write your Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Title:</label>
            <input
              type="text"
              name="title"
              className="form-input"
              value={formData.title}
              onChange={handleChange}
              required
              />
          </div>
          <div className="form-group">
              <label  className="form-label">Content:</label>
              <textarea
                name="content"
                className="form-input"
                value={formData.content}
                onChange={handleChange}
                required
              />
            </div>
          <div>
            <label className="form-label">Blog Cover:</label>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload</button>
          </div>
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    );
  };

export default PostBlogForm;
