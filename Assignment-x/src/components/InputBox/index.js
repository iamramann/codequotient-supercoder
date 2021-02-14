import "./index.css";
export default function InputBox(props) {
  return (
    <>
      <textarea
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      ></textarea>
    </>
  );
}
