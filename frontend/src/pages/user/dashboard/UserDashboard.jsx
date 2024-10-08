import React, { useState } from 'react';
import logo1 from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import EditProfile from '../../../components/user/editprofile/EditProfile';
import Notification from '../../../components/user/notification/Notification';
import './UserDashboard.scss';
import {
  FaChevronUp,
  FaChevronDown,
  FaCog,
  FaBell,
  FaUser,
} from 'react-icons/fa';

const User = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
  });

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeProfilePopup = () => {
    setShowProfilePopup(false);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userProfile');
    navigate('/login-user');
  };

  const handleEditProfileClick = () => {
    setShowEditProfile(true);
  };

  const handleCloseEditProfile = () => {
    setShowEditProfile(false);
  };

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <>
      <section className="user-container">
        <section className="user-left">
          <ul className="menu-container">
            <li>
              <section
                className="menu-item"
                onClick={() => setShowProfilePopup(!showProfilePopup)}
              >
                <section className="menu-title">
                  <FaUser />
                  Profile
                </section>
              </section>
              {showProfilePopup && (
                <section
                  className={`profile-dropdown ${
                    showProfilePopup ? 'active' : ''
                  }`}
                >
                  <section className="profile-dropdown-content">
                    <p>
                      <strong>Name:</strong> {profile.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {profile.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {profile.phone}
                    </p>
                    <button
                      onClick={closeProfilePopup}
                      className="close-button"
                    >
                      Close
                    </button>
                  </section>
                </section>
              )}
            </li>
            <li>
              <section className="menu-item" onClick={() => toggleMenu('form')}>
                <section className="menu-title">
                  <span>Form</span>
                </section>
                {openMenu === 'form' ? <FaChevronUp /> : <FaChevronDown />}
              </section>
              {openMenu === 'form' && (
                <ul className="submenu">
                  <li
                    className="submenu-item"
                    onClick={() => navigate('/user-compliance')}
                  >
                    Compliance
                  </li>
                  <li
                    className="submenu-item"
                    onClick={() => navigate('/user-company')}
                  >
                    New Company Register
                  </li>
                </ul>
              )}
            </li>
            <li>
              <section
                className="menu-item"
                onClick={() => toggleMenu('notifications')}
              >
                <section className="menu-title">
                  <FaBell />
                  <span>Notifications</span>
                </section>
                {openMenu === 'notifications' ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </section>
              {openMenu === 'notifications' && (
                <ul className="submenu">
                  <li
                    className="submenu-item"
                    onClick={handleNotificationClick}
                  >
                    You have 3 new notifications
                  </li>
                </ul>
              )}
            </li>
            <li>
              <section
                className="menu-item"
                onClick={() => toggleMenu('settings')}
              >
                <section className="menu-title">
                  <FaCog />
                  <span>Settings</span>
                </section>
                {openMenu === 'settings' ? <FaChevronUp /> : <FaChevronDown />}
              </section>
              {openMenu === 'settings' && (
                <ul className="submenu">
                  <li className="submenu-item" onClick={handleEditProfileClick}>
                    Edit Profile
                  </li>
                  <li className="submenu-item" onClick={logout}>
                    Logout
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </section>
        <section className="user-right">
          {showEditProfile ? (
            <EditProfile
              profileData={profile}
              handleProfileUpdate={handleProfileUpdate}
              onClose={handleCloseEditProfile}
            />
          ) : showNotification ? (
            <Notification onClose={() => setShowNotification(false)} />
          ) : (
            <>
              <h1>Welcome, {profile.name}!</h1>
              <img src={logo1} alt="Logo" />
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default User;
