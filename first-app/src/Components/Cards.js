

export default function Card(props) {
    return (
      <div id="cardDesign">
        {/* <img src={props.img} alt="cardImg" className="cardImage" /> */}
        <div
          className="cardImage"
          style={{ backgroundImage: `url('${props.img}')` }}
        ></div>
        <div id="titleSection" style={{ marginBottom: "0" }}>
          <h2>{props.title}</h2>
          <h3
            style={{
              marginRight: "15px",
              color: "#717171",
              fontWeight: "normal",
            }}
          >
            <i className="fa-solid fa-star" style={{color : "gold"}}></i>
            {props.rate}
          </h3>
        </div>
        <p style={{ color: "gray", marginTop: "0", marginLeft: "10px" }}>
          {props.description}
        </p>
        <h4 style={{ marginLeft: "10px" }}>
          {props.price}$<span style={{ fontWeight: "normal" }}>night</span>
        </h4>
      </div>
    );
   
}