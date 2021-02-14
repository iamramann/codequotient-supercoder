import { FaCamera, FaSmile, FaPaperclip, FaMicrophone } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function InputBox() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <IconContext.Provider
          value={{
            style: {
              position: "absolute",
              bottom: "4px",
              padding: "5px",
              cursor: "pointer",
              color: "#838383",
            },
          }}
        >
          <FaSmile size="2em" />
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            style: {
              position: "absolute",
              bottom: "4px",
              right: "100px",
              padding: "5px",
              cursor: "pointer",
              color: "#838383",
            },
          }}
        >
          <FaPaperclip size="2em" />
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            style: {
              position: "absolute",
              bottom: "4px",
              right: "70px",
              padding: "5px",
              cursor: "pointer",
              color: "#838383",
            },
          }}
        >
          <FaCamera size="2em" />
        </IconContext.Provider>

        <input type="text" placeholder="Type a message..." />
        <IconContext.Provider
          value={{
            style: {
              position: "absolute",
              bottom: "4px",
              right: "0",
              padding: "5px",
              cursor: "pointer",
              border: "solid 2px #128C7E",
              borderRadius: "50%",
              color: "var(--light-2)",
              background: "#128C7E",
            },
          }}
        >
          <FaMicrophone size="2.5em" />
        </IconContext.Provider>
      </div>
    </>
  );
}
