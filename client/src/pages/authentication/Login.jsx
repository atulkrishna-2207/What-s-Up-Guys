import React, { useEffect } from "react";
import { CiFlag1, CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slice/user/user.thunk";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    const response = await dispatch(loginUserThunk(loginData));
    if (response?.payload?.success) {
      navigate("/");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex justify-center p-6 min-h-screen items-center">
      <div className="max-w-[30rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h1 className="text-3xl">Welcome Back</h1>
        <p className="text-gray-400">Please enter your details</p>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <CiUser />
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <IoKeyOutline />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="grow"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <button
          onClick={handleLogin}
          className="btn btn-primary bg-yellow-300 text-black font-semibold"
        >
          Login
        </button>
        <p>
          Don't have an account? &nbsp;{" "}
          <Link to="/signup" className="text-yellow-300 underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
