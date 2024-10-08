import bcrypt from 'bcrypt';
const hashPass = (pass) => {
  const hashedPassword = bcrypt.hashSync(pass, 10);
  return hashedPassword;
};

const checkPassword = async (pass, dbpass) => {
  try {
    const validatePassword = await bcrypt.compare(pass, dbpass);
    return validatePassword;
  } catch (e) {
    console.log(e);
  }
};
export { hashPass, checkPassword };
