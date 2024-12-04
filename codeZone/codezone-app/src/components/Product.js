import Button from "./Button";

export default function Product(props) {
    return (
      <div
        className="product-card"
        style={{ backgroundColor: "#cbd7ff", padding: "10px", borderRadius: "10px" }}
      >
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>{props.price}</span>
        <div>
          {/*------------------- Composing Components : using components with other component-----------------*/}
          <Button title="Add To Cart" backgroundColor="blue" color="white" />
        </div>
      </div>
    );
}