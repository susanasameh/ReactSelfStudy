export default function Button(props) {
    const btnHandler = () => {
        console.log('Smile');
    }
    const btnLeaveHandler = () => {
        console.log('Leave');

    }
    return (
      <button
        className="react-btn"
        onClick={props.onClick}
        style={{
          backgroundColor: props.backgroundColor,
          color: props.color,
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
          outline: "none",
        }}
      >
        {props.title}

        {/* we should use arrow function to apply the action of event only in function not from the first of component render */}
        <button
          onClick={() => {
            console.log("hi");
          }}
                onMouseEnter={btnHandler}
                onMouseLeave={btnLeaveHandler}
        >
          👍
        </button>
       
      </button>
    );
}