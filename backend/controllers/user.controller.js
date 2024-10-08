import Compliance from '../database/compliance.schema.js';
import user from '../database/user.schema.js';
import company from '../database/company.schema.js';
import { checkPassword, hashPass } from '../middlewares/bcrypt/hashpassword.js';
import jwt from 'jsonwebtoken';
const loginController = async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!password || !email) {
      return res.status(400).send({
        message: 'Please fill the form completely',
        success: false,
      });
    }
    const userExist = await user.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).send({
        message: 'There is no user with that email address',
        success: false,
      });
    }
    const comparePassword = await checkPassword(password, userExist.password);
    if (!comparePassword) {
      return res.status(400).send({
        message: 'invalid credentials',
        success: false,
      });
    }
    const users = {
      name: userExist.firstname,
      email: userExist.email,
    };
    const token = jwt.sign(users, process.env.JWT_SECRETKEY);
    return res.status(201).send({
      message: 'User logged in successfully',
      success: true,
      token,
      userExist,
    });
  } catch (e) {
    console.log(e);
  }
};
const registerController = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password, phone } = req.body;
    if (!firstName || !lastName || !email || !password || !phone) {
      return res.status(404).send({
        message: 'Please fill the form completely',
        success: false,
      });
    }
    const userExist = await user.findOne({ email });
    if (userExist) {
      return res.status(404).send({
        message: 'User already exists',
        success: false,
      });
    }
    const hashedPas = hashPass(password);
    const newUser = await new user({
      firstname: firstName,
      lastname: lastName,
      email,
      password: hashedPas,
      phone,
    }).save();
    console.log(newUser);
    return res.status(201).send({
      message: 'user created successfully',
      success: true,
      newUser,
    });
  } catch (e) {
    console.log(e);
  }
};
const companyController = async (req, res) => {
  try {
    console.log(req.body);
    const savedCompany = await new company({ ...req.body }).save();
    return res.status(201).send({
      message: 'Company data saved successfully',
      success: true,
      savedCompany,
    });
  } catch (e) {
    console.log(e);
  }
};
const complianceController = async (req, res) => {
  try {
    const { companyName } = req.body;
    const { filename } = req.file;
    console.log(companyName);
    const checkCompanyExist = await company.findOne({ companyName });
    if (!checkCompanyExist) {
      return res.status(400).send({
        message: 'Company not found',
        success: false,
      });
    }
    const savedCompliance = await new Compliance({
      ...req.body,
      image: filename,
    }).save();
    return res.status(201).send({
      message: 'Compliace saved successfully',
      success: true,
      savedCompliance,
    });
  } catch (e) {
    console.log(e);

    return res.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
  }
};
const editProfileController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { email, firstname, phone } = req.body;
    let userDetails = {};
    if (email) {
      userDetails.email = email;
    }
    if (firstname) {
      userDetails.firstname = firstname;
    }
    if (phone) {
      userDetails.phone = phone;
    }

    const updatedUser = await user.findByIdAndUpdate(
      id,
      { $set: userDetails },
      { new: true, runValidators: true }
    );
    console.log(updatedUser);
    if (!updatedUser) {
      return res.status(404).send({
        message: 'User not found',
        success: false,
      });
    }
    return res.status(201).send({
      message: 'User updated successfully',
      success: true,
      updatedUser,
    });
    console.log(id);
  } catch (e) {
    console.log(e);
  }
};
const getProfileController = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetails = await user.findById(id);
    return res.status(200).send({
      message: 'Profile has been fetched successfully',
      success: true,
      userDetails,
    });
  } catch (e) {
    console.log(e);
  }
};
const generateOTPController = async (req, res) => {
  try {
    const { email } = req.body;
    const checkUserExist = await user.findOne({ email });
    if (!checkUserExist) {
      return res.status(400).send({
        message: 'User does not exist in the database',
        success: false,
      });
    }
    const otp = Math.floor(Math.random() * 900000);
    user.otp = otp;
    user.otpExpiration = Date.now() + 10 * 60 * 1000;
    await user.save();
  } catch (e) {
    console.log(e);
  }
};
const verifyOtpController = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const checkUser = await user.findOne({ email: email });
    if (!checkUser) {
      return res
        .status(400)
        .send({ message: 'user not found ', success: false });
    }
    const dbOtp = checkUser.otp;
    if (dbOtp !== otp || checkUser.otpExpiration < Date.now()) {
      return res.status(400).send({ message: 'Invalid otp', success: false });
    }
    user.otp = null;
    user.otpExpiration = null;
    await user.save();
  } catch (e) {
    console.log(e);
  }
};
const forgotPasswordController = async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;
    if (!newPassword) {
      return res.status(400).send({
        message: 'Please fill the form ',
        success: false,
      });
    }
    const checkUser = await user.findById(id);
    if (!checkUser) {
      return res.status(400).send({
        message: 'User not found',
        success: false,
      });
    }
    const hashNewPassword = hashPass(newPassword);
    const updatedDocument = await user.findByIdAndUpdate(
      id,
      { $set: { password: hashNewPassword } },
      { new: true }
    );
    console.log(updatedDocument);
    return res.status(201).send({
      message: 'Password is updated successfully',
      success: true,
      updatedDocument,
    });
  } catch (e) {
    console.log(e);
  }
};
export {
  registerController,
  loginController,
  forgotPasswordController,
  companyController,
  complianceController,
  editProfileController,
  getProfileController,
  generateOTPController,
  verifyOtpController,
};
