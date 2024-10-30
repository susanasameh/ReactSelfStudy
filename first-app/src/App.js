import './App.css';
import Card from './Components/Cards';
import { data } from './data';

export default function App() {
  // console.log(data);
  const dataShow = data.map((el, index) => (
    
    <Card 
      key = { index }
      img={el.img}
      title={el.title}
      description={el.description}
      price={el.price}
      rate={el.rate}
    />
  ));
   
  return (
    <div id="cardSection">
      {dataShow}
    </div>
  );

}

