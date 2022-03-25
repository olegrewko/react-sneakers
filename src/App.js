// import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import Header_c from './components/Header_c.js';
import Drawer from './components/Drawer.js';

const arr=[{ title:"Мужские кроссовки Nike Air", price:"1200", imageUrl:"/img/sneakers/1.jpg"} ,
           { title:"Мужские кроссовки Nike Air", price:"22000", imageUrl:"/img/sneakers/2.jpg" },
           { title:"Мужские кроссовки  Converse", price:"32000", imageUrl:"/img/sneakers/3.jpg"  },
           { title:"Мужские кроссовки New Ballance", price:"42000", imageUrl:"/img/sneakers/4.jpg" } 
];

function App() {
  return (
    <div className="wrapper clear">
   
        <Drawer />
  
      

 
    <Header_c />
    <div className='content p-40'>
    <div className='d-flex align-center justify-between mb-40'>   
    <h1 className=' ml-10'>Все кроссовки</h1>
    <div className='search-block d-flex'>
        <img src='img/search.svg' alt='Search' />
        <input placeholder='Поиск...' />
        </div>  
      </div>
      </div>

      <div className="d-flex">
      {/* <Card title={obj.title} price={1200} imageUrl="/img/sneakers/1.jpg" />
      <Card title="Мужские кроссовки Nike Air" price="22000" imageUrl="/img/sneakers/2.jpg" />
      <Card title="Мужские кроссовки  Converse" price="32000" imageUrl="/img/sneakers/3.jpg"  />
      <Card title="Мужские кроссовки New Ballance" price="42000" imageUrl="/img/sneakers/4.jpg" /> */}
    {arr.map((obj) =>(
        <Card title={obj.title}
         price={obj.price}
          imageUrl={obj.imageUrl}
          onClick={() => console.log(obj)} />
    ) )} 
     
      </div>
       
    </div>
    

  );
}

export default App;