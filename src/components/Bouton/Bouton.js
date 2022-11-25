import "./Bouton.css";

export default function Bouton(props) {
  return (
    <div onClick={props.onClick} type={props.type} className="Bouton">
      {props.title}
    </div>
  );
}
