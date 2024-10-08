import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Compliance.scss';
import hi from '../../../assets/logo.png';

const Compliance = () => {
  const [formData, setFormData] = useState({
    companyName: 'Sample Company',
    natureOfCompany: 'Software Development',
    complianceId: 'C12345',
    actName: 'Compliance Act',
    sections: 'Section 1',
    shortDescription: 'Short description of the compliance',
    description: 'Detailed description of the compliance',
    attachment: '',
    frequency: 'Annual',
    riskType: 'High',
    complianceType: 'Establishment',
    state: 'Delhi',
    applicability: 'Yes',
    month: 'January',
    statutoryDueDate: '2024-01-15',
    actualComplianceDate: '2024-01-14',
    submissionDate: '2024-01-10',
    performerName: 'John Doe',
    performerEmail: 'johndoe@example.com',
    performerRemarks: 'All good',
    reviewerName: 'Jane Smith',
    reviewerEmail: 'janesmith@example.com',
    reviewerRemarks: 'Reviewed and approved',
    functionHeadName: 'Sarah Connor',
    functionHeadEmail: 'sarahconnor@example.com',
    status: 'Complied',
    comment: '' // Add this line
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleApprove = () => {
    console.log('Approved:', formData);
    alert('Form approved successfully!');
  };

  const handleReject = () => {
    console.log('Rejected:', formData);
    alert('Form rejected.');
  };

  return (
    <div className="main-container">
      <div className="header">
        <img className="header-image" src={hi} alt="Header" />
        <h1 className="header-title">Compliance Form</h1>
      </div>
      <nav className="navbar">
        <Link to="/userdash" className="back-link">Back to User Page</Link>
      </nav>
      <div className="form-container">
        <form id="complianceForm" className="company-form">
          {/* Company Details */}
          <div className="form-category">
            <h3>Company Details</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="companyName">Company Name:</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-section">
                <label htmlFor="natureOfCompany">Nature of Company:</label>
                <input
                  type="text"
                  id="natureOfCompany"
                  name="natureOfCompany"
                  value={formData.natureOfCompany}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Compliance Details</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="complianceId">Compliance ID:</label>
                <input
                  type="text"
                  id="complianceId"
                  name="complianceId"
                  value={formData.complianceId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-section">
                <label htmlFor="actName">Act Name:</label>
                <input
                  type="text"
                  id="actName"
                  name="actName"
                  value={formData.actName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="sections">Sections:</label>
                <input
                  type="text"
                  id="sections"
                  name="sections"
                  value={formData.sections}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor="shortDescription">Short Description:</label>
                <input
                  type="text"
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor="attachment">Attachment:</label>
                <input
                  type="file"
                  id="attachment"
                  name="attachment"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Compliance Frequency</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="frequency">Frequency:</label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleInputChange}
                >
                  <option value="Annual">Annual</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              <div className="form-section">
                <label htmlFor="riskType">Risk Type:</label>
                <select
                  id="riskType"
                  name="riskType"
                  value={formData.riskType}
                  onChange={handleInputChange}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="complianceType">Compliance Type:</label>
                <select
                  id="complianceType"
                  name="complianceType"
                  value={formData.complianceType}
                  onChange={handleInputChange}
                >
                  <option value="Establishment">Establishment</option>
                  <option value="Operational">Operational</option>
                </select>
              </div>
              <div className="form-section">
                <label htmlFor="state">State:</label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Additional Information</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="applicability">Applicability:</label>
                <input
                  type="text"
                  id="applicability"
                  name="applicability"
                  value={formData.applicability}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor="month">Month:</label>
                <input
                  type="text"
                  id="month"
                  name="month"
                  value={formData.month}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Status</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="status">Compliance Status:</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="Complied">Complied</option>
                  <option value="Not Complied">Not Complied</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Comment</h3>
            <div className="form-row">
              <div className="form-section">
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Add your comments here..."
                />
              </div>
            </div>
          </div>
          <div className="form-category">
            <div className="form-row">
              <div className="form-section">
                <button
                  type="button"
                  className="submit-btn approve-btn"
                  onClick={handleApprove}
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="submit-btn reject-btn"
                  onClick={handleReject}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Compliance;
