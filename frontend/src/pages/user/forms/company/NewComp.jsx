import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewComp.scss';
import headerImage from '../../../../assets/logo.png';
import configuredUrl from '../../../../utilities/request';
import { toast } from 'react-toastify';

const NewComp = () => {
  const [formData, setFormData] = useState({
    employerType: '',
    companyName: '',
    companyAddress: '',
    companyPAN: '',
    companyPFNumber: '',
    companyESINumber: '',
    companyPTNumber: '',
    companyLWFNo: '',
    state: '',
    location: '',
    complianceType: '',
    spocName: '',
    spocEmail: '',
    spocContact: '',
    escalationAuthorityName: '',
    escalationEmail: '',
    escalationSPOC2Name: '',
    escalationSPOC2Email: '',
    status: '',
    workorderStartDate: '',
    workorderEndDate: '',
    lastExtensionDate: '',
    tenure: '',
  });

  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    try {
      const { data } = await configuredUrl.post('/user/company', {
        ...formData,
      });
      if (data.success) {
        toast.success('form has been submitted successfully');
        setFormData({
          employerType: '',
          companyName: '',
          companyAddress: '',
          companyPAN: '',
          companyPFNumber: '',
          companyESINumber: '',
          companyPTNumber: '',
          companyLWFNo: '',
          state: '',
          location: '',
          spocName: '',
          spocEmail: '',
          spocContact: '',
          escalationAuthorityName: '',
          escalationEmail: '',
          escalationSPOC2Name: '',
          escalationSPOC2Email: '',
          status: '',
          workorderStartDate: '',
          workorderEndDate: '',
          lastExtensionDate: '',
          tenure: '',
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="main-container">
      <header className="header">
        <img src={headerImage} alt="Company Header" className="header-image" />
        <h1 className="header-title">New Company Registration</h1>
      </header>

      <nav className="navbar">
        <Link to="/user" className="back-link">
          Back to User Page
        </Link>
      </nav>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="company-form">
          <div className="form-category">
            <h3>Company Details</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="employerType">Type of Employer</label>
                <select
                  id="employerType"
                  name="employerType"
                  value={formData.employerType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Principal Employer">Principal Employer</option>
                  <option value="Contractor">Contractor</option>
                </select>
              </div>

              <div className="form-section">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label htmlFor="companyAddress">Company Address</label>
                <textarea
                  id="companyAddress"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-section">
                <label htmlFor="companyPAN">Company PAN</label>
                <input
                  type="text"
                  id="companyPAN"
                  name="companyPAN"
                  value={formData.companyPAN}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label htmlFor="companyPFNumber">Company PF Number</label>
                <input
                  type="text"
                  id="companyPFNumber"
                  name="companyPFNumber"
                  value={formData.companyPFNumber}
                  pattern="\d+"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-section">
                <label htmlFor="companyESINumber">Company ESI Number</label>
                <input
                  type="text"
                  id="companyESINumber"
                  name="companyESINumber"
                  value={formData.companyESINumber}
                  pattern="\d+"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label htmlFor="companyPTNumber">Company PT Number</label>
                <input
                  type="text"
                  id="companyPTNumber"
                  name="companyPTNumber"
                  value={formData.companyPTNumber}
                  pattern="\d+"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-section">
                <label htmlFor="companyLWFNo">Company LWF No</label>
                <input
                  type="text"
                  id="companyLWFNo"
                  name="companyLWFNo"
                  value={formData.companyLWFNo}
                  pattern="\d+"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label htmlFor="state">State</label>
                <input
                  list="states"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
                <datalist id="states">
                  {indianStates.map((state, index) => (
                    <option key={index} value={state} />
                  ))}
                </datalist>
              </div>

              <div className="form-section">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-category">
            <h3>SPOC Details</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="spocName">SPOC Name</label>
                <input
                  type="text"
                  id="spocName"
                  name="spocName"
                  value={formData.spocName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-section">
                <label htmlFor="spocEmail">SPOC Email ID</label>
                <input
                  type="email"
                  id="spocEmail"
                  name="spocEmail"
                  value={formData.spocEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label htmlFor="spocContact">SPOC Contact No.</label>
                <input
                  type="text"
                  id="spocContact"
                  name="spocContact"
                  value={formData.spocContact}
                  pattern="\d+"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-section">
                <label htmlFor="escalationAuthorityName">
                  Escalation Authority Name
                </label>
                <input
                  type="text"
                  id="escalationAuthorityName"
                  name="escalationAuthorityName"
                  value={formData.escalationAuthorityName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label htmlFor="escalationEmail">Escalation Email ID</label>
                <input
                  type="email"
                  id="escalationEmail"
                  name="escalationEmail"
                  value={formData.escalationEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-section">
                <label htmlFor="escalationSPOC2Name">
                  Escalation SPOC 2 Name
                </label>
                <input
                  type="text"
                  id="escalationSPOC2Name"
                  name="escalationSPOC2Name"
                  value={formData.escalationSPOC2Name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label htmlFor="escalationSPOC2Email">
                  Escalation SPOC 2 Email
                </label>
                <input
                  type="email"
                  id="escalationSPOC2Email"
                  name="escalationSPOC2Email"
                  value={formData.escalationSPOC2Email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-category">
            <h3>Work Order Details</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="form-section">
                <label htmlFor="workorderStartDate">Workorder Start Date</label>
                <input
                  type="text"
                  id="workorderStartDate"
                  name="workorderStartDate"
                  value={formData.workorderStartDate}
                  placeholder="DD/MM/YYYY"
                  pattern="\d{2}/\d{2}/\d{4}"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label htmlFor="workorderEndDate">Workorder End Date</label>
                <input
                  type="text"
                  id="workorderEndDate"
                  name="workorderEndDate"
                  value={formData.workorderEndDate}
                  placeholder="DD/MM/YYYY"
                  pattern="\d{2}/\d{2}/\d{4}"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-section">
                <label htmlFor="lastExtensionDate">Last Extension Date</label>
                <input
                  type="text"
                  id="lastExtensionDate"
                  name="lastExtensionDate"
                  value={formData.lastExtensionDate}
                  placeholder="DD/MM/YYYY"
                  pattern="\d{2}/\d{2}/\d{4}"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-section">
                <label htmlFor="tenure">Tenure</label>
                <input
                  type="text"
                  id="tenure"
                  name="tenure"
                  value={formData.tenure}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewComp;
