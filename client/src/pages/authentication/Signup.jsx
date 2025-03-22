import React, { useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/user.thunk";
import { toast } from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [signupData, setSignupData] = React.useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    if (signupData.password != signupData.confirmPassword) {
      return toast.error("Password and Confirm Password do not match");
    }
    const response = await dispatch(registerUserThunk(signupData));
    if (response?.payload?.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center p-6 min-h-screen items-center">
      <div className="max-w-[30rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h1 className="text-3xl">Create new account</h1>
        <p className="text-gray-400">Please enter your details</p>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <CiUser />
          <input
            name="fullName"
            type="text"
            className="grow"
            placeholder="Full Name"
            onChange={handleInputChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <CiUser />
          <input
            name="username"
            type="text"
            className="grow"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <IoKeyOutline />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="grow"
            onChange={handleInputChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <IoKeyOutline />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="grow"
            onChange={handleInputChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <input
            id="male"
            value="male"
            type="radio"
            name="gender"
            className="radio radio-info"
            onChange={handleInputChange}
          />
          Male
          <input
            id="female"
            value="female"
            type="radio"
            name="gender"
            className="radio radio-info"
            onChange={handleInputChange}
          />
          Female
        </label>
        <button
          onClick={handleSignup}
          className="btn btn-primary bg-yellow-300 text-black font-semibold"
        >
          Sign up now
        </button>
        <p>
          Already have an account? &nbsp;{" "}
          <Link to="/login" className="text-yellow-300 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
