// import reactLogo from './reactGirl.jpg';

function App() {
    return (
      <div id="meData">
        {/* how to upload img in react */}
        {/* <img src={reactLogo} alt="reactLogo" id="reactlogo" /> */}

        <img
          src={require("./reactGirl.jpg")}
          alt="reactLogo"
          class="reactlogo"
        />
     

        <div id="meDataContent">
          <h1>Iam</h1>
          <h2>Susana</h2>
          <h3>Web Developer</h3>
        </div>
      </div>
    );
}
export default App;