function Drawer(){ 
    return (
 <div style={{display: "none"}} className="overlay">        
<div className="drawer" >
            <h2 className="mb-30 d-flex justify-between ">Корзина<img className="removeBtn cu-p" src="img/btn-remove.svg" alt="img/btn-remove.svg" /></h2>
            
                {/* <div className="items">
                <div className="cartTotalBlock">
                    <ul >
                        <li >
                            <span>Итого:</span>
                            <div></div>
                            <b>12 000</b>
                        </li>
                        <li >
                            <span>Доставка:</span>
                            <div></div>
                            <b>500 руб</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ<img src="img/arrow.svg" alt="img/arrow.svg" /></button>
                    <div></div>
                    </div>
                       
                </div> */}
                 <div className="items">
               <div className="cartItem d-flex align-center mb-5">
                <img className="mr-10" widht={70} height={70} src="img/sneakers/1.jpg" alt="img/sneakers/1.jpg" />
                <div>
                    <p className="mb-5">Мужские кроссовки Nike Blazzers</p>
                    <b>12 200руб</b>
                </div>
                <img className="removeBtn" src="img/btn-remove.svg" alt="img/btn-remove.svg" />
            </div>
            <div className="cartItem d-flex align-center mb-5">
                <img className="mr-10" widht={70} height={70} src="img/sneakers/1.jpg" alt="img/sneakers/1.jpg" />
                <div>
                    <p className="mb-5">Мужские кроссовки Nike Blazzers</p>
                    <b>12 200руб</b>
                </div>
                <img className="removeBtn" src="img/btn-remove.svg" alt="img/btn-remove.svg" />
            </div>           
            <div className="cartItem d-flex align-center mb-5">
                <img className="mr-10" widht={70} height={70} src="img/sneakers/1.jpg" alt="img/sneakers/1.jpg" />
                <div>
                    <p className="mb-5">Мужские кроссовки Nike Blazzers</p>
                    <b>12 200руб</b>
                </div>
                <img className="removeBtn" src="img/btn-remove.svg" alt="img/btn-remove.svg" />
            </div>
            <div className="cartItem d-flex align-center mb-5">
                <img className="mr-10" widht={70} height={70} src="img/sneakers/1.jpg" alt="img/sneakers/1.jpg" />
                <div>
                    <p className="mb-5">Мужские кроссовки Nike Blazzers</p>
                    <b>12 200руб</b>
                </div>
                <img className="removeBtn" src="img/btn-remove.svg" alt="img/btn-remove.svg" />
            </div>
            {/* <div className="items">
                    <ul className="cartTotalBlock">
                        <li >
                            <span>Итого:</span>
                            <div></div>
                            <b>12 000</b>
                        </li>
                        <li >
                            <span>Доставка:</span>
                            <div></div>
                            <b>500 руб</b>
                        </li>
                    </ul>

                </div>    */}
                     {/* <div className="items"> */}
                     </div>      
                <div className="cartTotalBlock">
                    <ul >
                        <li >
                            <span>Итого:</span>
                            <div></div>
                            <b>12 000</b>
                        </li>
                        <li >
                            <span>Доставка:</span>
                            <div></div>
                            <b>500 руб</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ<img src="img/arrow.svg" alt="img/arrow.svg" /></button>
                    <div></div>
                    </div>
                       
                    </div>    
        </div>
);
}
export default Drawer;