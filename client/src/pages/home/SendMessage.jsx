import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../../store/slice/message/message.thunk";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    dispatch(
      sendMessageThunk({
        receiverId: selectedUser?._id,
        message,
      })
    );
    setMessage("");
  };

  const handleSubmitMessage = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={message}
        placeholder="Type a message..."
        className="input input-primary w-full"
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleSubmitMessage}
      />
      <button
        onClick={handleSendMessage}
        className="btn btn-square btn-outline btn-success"
      >
        <BsSend />
      </button>
    </div>
  );
};

export default SendMessage;
