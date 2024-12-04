import './App.css';
import WelcomeFunctionalComp from './components/WelcomeFunctionalComp.js';
import WelcomeCC from './components/WelcomeClassComp.js';
import Product from './components/Product.js';
import Inputs from './components/Inputs.js';
// import  Clock  from './components/Clock.js';

function App() {
  //----------------- jsx example----------------------------------
  const profileLink = "https://www.linkedin.com/in/susana-sameh";
  const myName = 'Susana Sameh';
  
  function greeting(name) {
    if (name) {
      return (
        <h2>
          Hello ,<a className="profile-link" href={profileLink}>{name}</a>
        </h2>
      );
    }
    return <h2>Hello, Guest</h2>
  }
  return (
    <div className="App">
      <h1>{greeting(myName)}</h1>
      {/* functional Components */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#f4dddb",
          padding: "10px",
          margin: "10px",
        }}
      >
        <WelcomeFunctionalComp name="Susana" age={32} color="#ff000085" />
        <WelcomeFunctionalComp name="Susana" age={35} color="lightgreen" />
      </div>

      {/* class Components */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#f4dddb",
          padding: "10px",
          margin: "10px",
        }}
      >
        <WelcomeCC name="Andria" age={8} color="red" />
        <WelcomeCC name="Johnathan" age={3} color="purple" />
      </div>

      {/* -------------------components and props------------------ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#f4dddb",
          padding: "10px",
          margin: "10px",
        }}
      >
        <Product
          title="candy"
          description="chocolate lore`m lorem"
          price="$10"
        />
        <Product
          title="chips"
          description="potato lorem jsfhlh jhjsfhj"
          price="$5"
        />
        <Product
          title="ice cream"
          description="vanilla jhkjh jhjhk jkhkj"
          price="$15"
        />
      </div>

      {/* <>
        <Clock />
      </> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "blueviolet",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
          border: "1px solid black",
          width: "30%",
        }}
      >
        <Inputs
          formTitle="Form"
          inputLabel="Enter your name : "
          type="text"
          placeHolder="Enter your name"
         
        />
        <Inputs
          inputLabel="Enter your age : "
          type="number"
          placeHolder="Enter your age"
        />
        <Inputs
          inputLabel="Enter your email : "
          type="email"
          placeHolder="Enter your email"
        />
        </div>
       </div>
    </div>
  );
}

export default App;
