

function HeaderC(props){ 
    return (
        <header className='d-flex justify-between align-cetnter p-20'>
        <div className='headerLeft'>
         <img widht={40} height={40}  src="img/logo.png" alt="img/logo.png" />
        <div className='header-info text-left'>
          <h3 className='text-left'>React sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
        </div>
      <div>
        <ul className='d-flex'>
          <li  className="mr-30 cu-p">
          <img onClickCart={props.onClickCart} widht={18} height={18}  src="img/cart.svg" alt="cart" />
            <span>1205 руб</span>
            </li>
          <li>
          <img widht={18} height={18}  src="img/user.svg" alt="user" /> 
            
          </li>
        </ul>
        </div>   
      </header>
    );}

 export default HeaderC;   