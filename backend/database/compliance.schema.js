import mongoose from 'mongoose';
const complianceSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    natureOfCompany: {
      type: String,
      required: true,
      trim: true,
    },
    complianceId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    actName: {
      type: String,
      required: true,
      trim: true,
    },
    sections: {
      type: String,
      trim: true,
    },
    shortDescription: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    attachment: {
      type: String,
      trim: true,
    },
    frequency: {
      type: String,
      enum: ['Annual', 'Quarterly', 'Monthly'],
      default: 'Annual',
    },
    riskType: {
      type: String,
      enum: ['High', 'Medium', 'Low'],
      default: 'High',
    },
    complianceType: {
      type: String,
      enum: ['Establishment', 'Operational'],
      default: 'Establishment',
    },
    state: {
      type: String,
      trim: true,
    },
    applicability: {
      type: String,
      enum: ['Yes', 'No'],
      default: 'Yes',
    },
    month: {
      type: String,
      enum: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      default: 'January',
    },
    statutoryDueDate: {
      type: Date,
    },
    actualComplianceDate: {
      type: Date,
    },
    submissionDate: {
      type: Date,
    },
    performerName: {
      type: String,
      trim: true,
    },
    performerEmail: {
      type: String,
      trim: true,
    },
    performerRemarks: {
      type: String,
      trim: true,
    },
    reviewerName: {
      type: String,
      trim: true,
    },
    reviewerEmail: {
      type: String,
      trim: true,
    },
    reviewerRemarks: {
      type: String,
      trim: true,
    },
    functionHeadName: {
      type: String,
      trim: true,
    },
    functionHeadEmail: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed', 'Overdue'], // Example, modify as needed
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

const Compliance = mongoose.model('Compliance', complianceSchema);
export default Compliance;
