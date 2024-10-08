import React, { useState, useEffect } from 'react';
import './EditProfile.scss';

const EditProfile = ({ profileData, handleProfileUpdate, onClose }) => {
  const [profile, setProfile] = useState(profileData);

  useEffect(() => {
    setProfile(profileData);
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileUpdate(profile);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="edit-profile-form">
      <section>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </section>
      <section>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </section>
      <section>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Enter your phone"
        />
      </section>
      <button type="submit" className="submit-btn">
        Update Profile
      </button>
      <button type="button" onClick={onClose} className="cancel-btn">
        Cancel
      </button>
    </form>
  );
};

export default EditProfile;
