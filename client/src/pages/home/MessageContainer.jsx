import React, { useEffect } from "react";
import User from "./User.jsx";
import Message from "./Message.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMessageThunk } from "../../store/slice/message/message.thunk.js";
import SendMessage from "./SendMessage.jsx";
const MessageContainer = () => {
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser) {
      dispatch(getMessageThunk({ receiverId: selectedUser?._id }));
    }
  }, [selectedUser]);

  return (
    <>
      {!selectedUser ? (
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-2xl font-mono text-gray-100">
            Select a user to start messaging
          </p>
        </div>
      ) : (
        <div className="h-screen w-full flex flex-col">
          <div className="p-3 border-b border-b-white/10">
            <User userDetails={selectedUser} />
          </div>
          <div className="h-full overflow-y-auto p-3">
            {messages?.map((messageDetails) => {
              return (
                <Message
                  key={messageDetails?._id}
                  messageDetails={messageDetails}
                />
              );
            })}
          </div>
          <SendMessage />
        </div>
      )}
    </>
  );
};

export default MessageContainer;
