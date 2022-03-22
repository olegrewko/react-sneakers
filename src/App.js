// import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import Header_c from './components/Header_c.js';
import Drawer from './components/Drawer.js';

function App() {
  return (
    <div className="wrapper clear">
        {/* <div style={{display: "none"}} className="overlay"> */}
        <Drawer />
  
        {/* </div>    */}

    {/* <header className='d-flex justify-between align-cetnter p-40'>
      <div className='headerLeft'>
       <img widht={40} height={40}  src="img/logo.png" alt="img/logo.png" />
      <div className='header-info'>
        <h3>React sneakers</h3>
        <p className="opacity-5">Магазин лучших кроссовок</p>
      </div>
      </div>
    <div>
      <ul className='d-flex'>
        <li className="mr-30">
        <img widht={18} height={18}  src="img/cart.svg" />
          <span>1205 руб</span>
          </li>
        <li>
        <img widht={18} height={18}  src="img/user.svg" /> 
          
        </li>
      </ul>
      </div>   
    </header> */}
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
      {/* <div className="card">
        <div className="favorite">
          <img src="/img/liked.svg" alt="Liked" />
        </div>    
        <img widht="133" height="112"  src="img/sneakers/1.jpg" alt="img/sneakers/1.jpg" />
        <h5>Мужские кроссовки Nike Blazzers</h5>
        <div className="d-flex justify-between align-center">
        
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>1200 руб</b>
          </div>
          <button>
            <img widht="10" height="10" src="img/plus.svg" alt='img/plus.svg' />
          </button>
        </div>
      </div>
      <div className="card">
        <img widht="133" height="112"  src="img/sneakers/2.jpg" alt="img/sneakers/2.jpg" />
        <h5>Мужские кроссовки Nike Atom</h5>
        <div className="d-flex justify-between align-center">
        
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>1200 руб</b>
          </div>
          <button>
            <img widht="10" height="10" src="img/plus.svg" alt='img/plus.svg' />
          </button>
        </div>
      </div>
      <div className="card">
        <img widht="133" height="112"  src="img/sneakers/3.jpg" alt="img/sneakers/3.jpg" />
        <h5>Мужские кроссовки Nike Blazzers</h5>
        <div className="d-flex justify-between align-center">
        
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>1200 руб</b>
          </div>
          <button>
            <img widht="10" height="10" src="img/plus.svg" alt='img/plus.svg' />
          </button>
        </div>
      </div> */}
      {/* <div className="card">
        <img widht="133" height="112"  src="img/sneakers/4.jpg" alt="img/sneakers/4.jpg" />
        <h5>Мужские кроссовки Nike Blazzers</h5>
        <div className="d-flex justify-between align-center">
        
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>1200 руб</b>
          </div>
          <button>
            <img widht="10" height="10" src="img/plus.svg" alt='img/plus.svg' />
          </button>
        </div>
      </div> */}
      <Card />
      <Card />
      <Card />
      </div>
       
    </div>
    

  );
}

export default App;