import multer from 'multer';
const imageConfiguration = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(new Error('only images is allowed'));
  }
};
const uploadImage = multer({
  storage: imageConfiguration,
  fileFilter: isImage,
});

export default uploadImage;
