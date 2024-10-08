import express from 'express';
import {
  loginController,
  registerController,
  companyController,
  complianceController,
  getProfileController,
  editProfileController,
  forgotPasswordController,
  generateOTPController,
  verifyOtpController,
} from '../controllers/user.controller.js';
import uploadImage from '../middlewares/multer/photoMiddleware.js';
const router = express.Router();
router.post('/login', loginController);
router.post('/register', registerController);
router.post('/forget-password/:id', forgotPasswordController);
router.post('/company', companyController);
router.post('/compliance', uploadImage.single('image'), complianceController);
router.post('/edit-profile/:id', editProfileController);
router.get('/get-profile/:id', getProfileController);
router.post('/generate-otp', generateOTPController);
router.post('/verify-otp', verifyOtpController);
export default router;
