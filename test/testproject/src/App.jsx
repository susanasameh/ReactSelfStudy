import './App.css'

//------------------TASK1----------------
// import NavbarComponent from './components/navbarComponent/NavbarComponent'
// import SidebarComponent from './components/sidebarComponent/SidebarComponent'

//---------------------TASK2--------------------
// import ImageWrapper from './components/imageWrapper/ImageWrapper'
// import InfoWrapper from './components/infoWrapper/InfoWrapper'

//--------------------TASK3--------------------
import ProductImageWrapper from './components/productImageWrapper/ProductImageWrapper'
import ProductInfoWrapper from './components/productInfoWrapper/ProductInfoWrapper'


export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <div id='main'>
     
      {/* ------------------TASK 1------------------------------------------ */}
      {/* <NavbarComponent />
      <SidebarComponent />
      <h1> Hello from th react project</h1>
      */}

       {/* ------------------TASK 2------------------------------------------ */}
      {/* <ImageWrapper />
      <InfoWrapper /> */}

      {/* ------------------TASK 3------------------------------------------ */}
      <ProductImageWrapper />
      <ProductInfoWrapper />

   
    </div> 
  )
}
