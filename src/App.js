import React from 'react';
import './App.css';
import Card from './components/Card';
import HeaderC from './components/HeaderC.js';
import Drawer from './components/Drawer.js';



function App() {

  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => { 

  fetch ('https://623dcf2de8fbc4f16267d464.mockapi.io/api/olegrewko/items')
  .then((res) => { return res.json();
  })
  .then((json) => {
    setItems(json);
  });
}, []);
 
  
 
  
  

  return (
    
    <div className="wrapper clear ">
     
     
   
       {cartOpened && <Drawer onClose = {() => setCartOpened(false) } />  }
   
    <HeaderC onClickCart = {() => setCartOpened(true)}  />
    <div className='content p-40 '>
    <div className='d-flex align-center justify-between mb-40'>   
    <h1 className=' ml-10'>Все кроссовки</h1>
    <div className='search-block d-flex'>
        <img src='img/search.svg' alt='Search' />
        <input placeholder='Поиск...' />
        </div>  
      </div>
      </div>

      <div className="d-flex flex-wrap mb-30">
     
    {items.map((obj) =>(
        <Card title={obj.title}
         price={obj.price}
          imageUrl={obj.imageUrl}
          onFavorite={() => console.log('Добавили в закладки')}
          onPlus={() => console.log('Нажали плюс')} />
    ) )} 
     
      </div>
       
    </div>
    

  );
}

export default App;