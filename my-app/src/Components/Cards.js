export default function Cards(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
        <img src={props.imgURL} alt={props.title} className="reactlogo"/>
      </div>
    );
}