import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ image, name, description }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
    </div>
  );
};

export default ProfileCard;