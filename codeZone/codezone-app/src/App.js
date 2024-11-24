import './App.css';

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
     
    </div>
  );
}

export default App;
