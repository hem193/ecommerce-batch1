import User from "../models/user.schema";
import asyncHandler from "../services/asyncHandler";
import CustomError from "../utils/customError";

export const cookieOptions = {
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  httpOnly: true, //could be in asepareate file in utils
};

/*

@SIGNUP
@route hhtp://localhost:5000/api/auth/signup
@description User signup controller for creating a new user
@parameters  User signup Controller for creating new user
@returns User Object

*/

export const signUp = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomError("Please fill all fields", 400);
  }
  //check if user exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new CustomError("User already exists", 400);
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  const token = user.getJWtToken();
  console.log(user);
  user.password = undefined;

  res.cookie("token", token, cookieOptions);
  res.status(200).json({
    success: true,
    token,
    user,
  });
});