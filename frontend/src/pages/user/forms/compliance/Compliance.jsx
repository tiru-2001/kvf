import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Compliance.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import hi from '../../../../assets/logo.png';
import configuredUrl from '../../../../utilities/request';

const Compliance = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: '',
    companyName: '',
    natureOfCompany: '',
    complianceId: '',
    actName: '',
    sections: '',
    shortDescription: '',
    description: '',
    frequency: 'Annual',
    riskType: 'High',
    complianceType: 'Establishment',
    state: '',
    applicability: 'Yes',
    month: 'January',
    statutoryDueDate: '',
    actualComplianceDate: '',
    submissionDate: '',
    performerName: '',
    performerEmail: '',
    performerRemarks: '',
    reviewerName: '',
    reviewerEmail: '',
    reviewerRemarks: '',
    functionHeadName: '',
    functionHeadEmail: '',
    status: 'Complied',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == 'image') {
      if (e.target.files.length !== 0) {
        let imgsrc = URL.createObjectURL(e.target.files[0]);
        console.log(imgsrc);
        setFormData({
          ...formData,
          [name]: e.target.files[0],
        });
      }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await configuredUrl.post('/user/compliance', {
        ...formData,
      });
      if (data.success) {
        toast.success('form has bee submited successfully');
        setFormData({
          companyName: '',
          natureOfCompany: '',
          complianceId: '',
          actName: '',
          sections: '',
          shortDescription: '',
          description: '',

          frequency: 'Annual',
          riskType: 'High',
          complianceType: 'Establishment',
          state: '',
          applicability: 'Yes',
          month: 'January',
          statutoryDueDate: '',
          actualComplianceDate: '',
          submissionDate: '',
          performerName: '',
          performerEmail: '',
          performerRemarks: '',
          reviewerName: '',
          reviewerEmail: '',
          reviewerRemarks: '',
          functionHeadName: '',
          functionHeadEmail: '',
          status: 'Complied',
        });
      } else {
        toast.warn(
          'The company is not regsitered so you cannot submit the compliance form'
        );
      }
    } catch (e) {
      toast.error(e.response.data.message);
      console.log(e.response.data.message);
    }
  };

  return (
    <div className="main-container">
      <div className="header">
        <img className="header-image" src={hi} alt="Header" />
        <h1 className="header-title">Compliance Form</h1>
      </div>
      <nav className="navbar">
        <Link to="/userdash" className="back-link">
          Back to User Page
        </Link>
      </nav>
      <div className="form-container">
        <form
          id="complianceForm"
          className="company-form"
          onSubmit={handleSubmit}
        >
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
                  name="image"
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
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Applicability</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="applicability">Applicability:</label>
                <select
                  id="applicability"
                  name="applicability"
                  value={formData.applicability}
                  onChange={handleInputChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="form-section">
                <label htmlFor="month">Month:</label>
                <select
                  id="month"
                  name="month"
                  value={formData.month}
                  onChange={handleInputChange}
                >
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Compliance Dates</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="statutoryDueDate">Statutory Due Date:</label>
                <input
                  type="date"
                  id="statutoryDueDate"
                  name="statutoryDueDate"
                  value={formData.statutoryDueDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor="actualComplianceDate">
                  Actual Compliance Date:
                </label>
                <input
                  type="date"
                  id="actualComplianceDate"
                  name="actualComplianceDate"
                  value={formData.actualComplianceDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="submissionDate">Submission Date:</label>
                <input
                  type="date"
                  id="submissionDate"
                  name="submissionDate"
                  value={formData.submissionDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Performed By</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="performerName">Name:</label>
                <input
                  type="text"
                  id="performerName"
                  name="performerName"
                  value={formData.performerName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor="performerEmail">Email:</label>
                <input
                  type="email"
                  id="performerEmail"
                  name="performerEmail"
                  value={formData.performerEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor="performerRemarks">Remarks:</label>
                <textarea
                  id="performerRemarks"
                  name="performerRemarks"
                  value={formData.performerRemarks}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Reviewed By</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="reviewerName">Name:</label>
                <input
                  type="text"
                  id="reviewerName"
                  name="reviewerName"
                  value={formData.reviewerName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor="reviewerEmail">Email:</label>
                <input
                  type="email"
                  id="reviewerEmail"
                  name="reviewerEmail"
                  value={formData.reviewerEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor="reviewerRemarks">Remarks:</label>
                <textarea
                  id="reviewerRemarks"
                  name="reviewerRemarks"
                  value={formData.reviewerRemarks}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="form-category">
            <h3>Function Head Approval</h3>
            <div className="form-row">
              <div className="form-section">
                <label htmlFor="functionHeadName">Name:</label>
                <input
                  type="text"
                  id="functionHeadName"
                  name="functionHeadName"
                  value={formData.functionHeadName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-section">
                <label htmlFor="functionHeadEmail">Email:</label>
                <input
                  type="email"
                  id="functionHeadEmail"
                  name="functionHeadEmail"
                  value={formData.functionHeadEmail}
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
            <div className="form-row">
              <div className="form-section">
                <button type="submit" className="submit-btn">
                  Submit
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
