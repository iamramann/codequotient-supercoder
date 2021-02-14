import "./index.css";
export default function Button(props) {
  return (
    <>
      <button onClick={props.onBtnClick}>{props.text}</button>
    </>
  );
}
