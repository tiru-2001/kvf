import React from 'react';
import './Notification.scss';
import { IoCloseSharp } from 'react-icons/io5';

const Notification = ({ onClose }) => {
  const forms = [
    { id: 1, name: 'Form 1', status: 'Pending' },
    { id: 2, name: 'Form 2', status: 'Approved' },
    { id: 3, name: 'Form 3', status: 'Rejected' },
  ];

  return (
    <section className="notification-container">
      <button className="close-button" onClick={onClose}>
        <IoCloseSharp />
      </button>
      <h2>Submitted Forms</h2>
      <ul className="form-list">
        {forms.map((form) => (
          <li key={form.id} className="form-item">
            <span>{form.name}</span>
            <span className={`status ${form.status.toLowerCase()}`}>
              {form.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notification;
