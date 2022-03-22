function Head(){
    return(
        <header className='d-flex justify-between align-center p-40'>
        <div className='headerLeft'>
         <img widht={40} height={40}  src="img/logo.png" />
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
      </header>
    );
}
export default Head;