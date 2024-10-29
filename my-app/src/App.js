// import reactLogo from './reactGirl.jpg';

//  export default function App() {
//     return (
//       <div id="meData">
//         {/* how to upload img in react */}
//         {/* <img src={reactLogo} alt="reactLogo" id="reactlogo" /> */}

//         <img
//           src={require("./reactGirl.jpg")}
//           alt="reactLogo"
//           class="reactlogo"
//         />
     

//         <div id="meDataContent">
//           <h1>Iam</h1>
//           <h2>Susana</h2>
//           <h3>Web Developer</h3>
//         </div>
//       </div>
//     );
// }
// export default App;

import Cards from './Components/Cards';
import { data } from './data';

export default function App() {

  // console.log(data);
  const dataShow = data.map((el) => <Cards title={el.title} desc={el.desc} imgURL={el.imgURL} />);
 
   return (
     <div>
       {dataShow}
     </div>
   );
}