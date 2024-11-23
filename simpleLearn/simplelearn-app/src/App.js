
import './App.css'
import FunctionalComp from './Components/FunctionalComp'

// import ClassComp from './Components/ClassComp'
//if we have more than one component in a file then we have to export them
import { ClassComp, ClassComp2 } from './Components/ClassComp'
import { Click } from './Components/Click'
import { Count } from './Components/Count'

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <FunctionalComp />
      <ClassComp />
      <ClassComp2 />
      <Click />
      <Count />
    </div>
  );
}

export default App;
