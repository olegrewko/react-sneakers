function Card(){ 
    return (
<div className="card">
      <div className="favorite">
      <img  src="img/liked.svg" alt="img/liked.svg" />
      </div >
   
      <img widht="133" height="112"  src="img/sneakers/1.jpg" alt="img/sneakers/1.jpg" />
      

      <h5>Мужские кроссовки Nike Blazzers</h5>
      <div className="d-flex justify-between align-center">
      
        <div className="d-flex ">
          <span>Цена:</span>
          <b>1200 руб</b>
        </div>
        <button>
          <img widht="10" height="10" src="img/plus.svg" alt='img/plus.svg' />
        </button>
      </div>
   

</div>
);
}
export default Card;