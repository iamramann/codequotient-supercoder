/* eslint-disable no-unused-vars */
import InputBox from "../InputBox";
import { FaVideo, FaPhone, FaEllipsisV, FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./index.css";
export default function RightHeader(props) {
  const selectedUser = props.selectedUser;
  const userList = props.userList;
  let userMsgs = [];
  return (
    <>
      <section className="right-header">
        <div className="sub-1">
          <div
            style={{
              position: "relative",
              width: "35%",
              margin: "5px",
            }}
          >
            <h1>
              <IconContext.Provider
                value={{
                  style: {
                    position: "absolute",
                    bottom: "2px",
                    left: "0px",
                    margin: "5px",
                  },
                }}
              >
                <FaUserCircle size="2em" />
              </IconContext.Provider>
              {props.username}
            </h1>
            {props.selectedUser > -1 ? (
              <label
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "60px",
                  fontSize: "12px",
                  color: "#FFF",
                }}
              >
                {props.status}
              </label>
            ) : (
              console.log("abc")
            )}
          </div>
          <div className="rh-icons">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <FaVideo />
              <FaPhone />
              <FaEllipsisV />
            </IconContext.Provider>
          </div>
        </div>
        <div className="chat-section">
          <ul>
            {userList.forEach((user, index) => {
              if (user.value === selectedUser) {
                userMsgs = user.msgs;
              }
            })}
            {userMsgs.map((msg, index) => {
              return (
                <li key={msg} className="msg-class">
                  <label style={{ position: "relative" }}>
                    {msg}{" "}
                    <span
                      style={{
                        fontSize: "10px",
                        color: "var(--grey-1)",
                        position: "relative",
                        bottom: "-10px",
                      }}
                    >
                      4:00PM
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="typing-section">
          {props.selectedUser > -1 ? <InputBox /> : console.log("b")}
        </div>
      </section>
    </>
  );
}
