import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    employerType: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    companyAddress: {
      type: String,
      trim: true,
    },
    companyPAN: {
      type: String,
      trim: true,
    },
    companyPFNumber: {
      type: String,
      trim: true,
    },
    companyESINumber: {
      type: String,
      trim: true,
    },
    companyPTNumber: {
      type: String,
      trim: true,
    },
    companyLWFNo: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    spocName: {
      type: String,
      trim: true,
    },
    spocEmail: {
      type: String,
      trim: true,
    },
    spocContact: {
      type: String,
      trim: true,
    },
    escalationAuthorityName: {
      type: String,
      trim: true,
    },
    escalationEmail: {
      type: String,
      trim: true,
    },
    escalationSPOC2Name: {
      type: String,
      trim: true,
    },
    escalationSPOC2Email: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive', 'Pending'],
      default: 'Pending',
    },
    workorderStartDate: {
      type: Date,
    },
    workorderEndDate: {
      type: Date,
    },
    lastExtensionDate: {
      type: Date,
    },
    tenure: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const company = mongoose.model('Company', companySchema);
export default company;
