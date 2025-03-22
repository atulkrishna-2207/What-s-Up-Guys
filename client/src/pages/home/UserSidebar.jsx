import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import User from "./User.jsx";
import { CiLogout } from "react-icons/ci";
import { BsFillChatTextFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUserThunk,
  getOtherUsersThunk,
  getUserProfileThunk,
} from "../../store/slice/user/user.thunk.js";
import { useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { otherUsers, userProfile } = useSelector((state) => state.userReducer);
  const [users, setUsers] = useState(otherUsers);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setUsers(otherUsers);
  }, [otherUsers]);

  useEffect(() => {
    setUsers(
      otherUsers?.filter(
        (user) =>
          user.fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.username.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, otherUsers]);

  useEffect(() => {
    (async () => {
      await dispatch(getOtherUsersThunk());
      await dispatch(getUserProfileThunk());
    })();
  }, []);

  const handleLogout = async () => {
    const response = await dispatch(logoutUserThunk());
    if (response?.payload?.success) {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col border-r border-r-white/10">
      <div className="flex items-center gap-2 mx-3 mt-3 justify-center">
        <BsFillChatTextFill />
        <h1 className="text-[#7480FF] text-xl font-semibold">WHAT'S UP GUYS</h1>
      </div>
      <div className="p-3">
        <label className="input rounded-3xl">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
          <CiSearch />
        </label>
      </div>
      <div className="h-full overflow-y-auto px-3 flex flex-col gap-2">
        {users?.map((userDetails) => {
          return <User key={userDetails?._id} userDetails={userDetails} />;
        })}
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="flex gap-3 items-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img src={userProfile?.avatar} />
            </div>
          </div>
          <h2>{userProfile?.fullName}</h2>
        </div>
        <button onClick={handleLogout} className="btn bg-[#27dfff] text-black">
          <CiLogout />
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
