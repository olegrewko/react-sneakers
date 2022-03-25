function Card(props){
  console.log(props); 
    return (
<div classoName="card">
      <div className="favorite">
      <img  src="img/liked.svg" alt="img/liked.svg" />
      </div >
   
      <img widht="133" height="112"  src={props.imageUrl} alt="img/sneakers/1.jpg" />
      

      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
      
        <div className="d-flex ">
          <span>Цена:</span>
          <b>{props.price}руб</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img widht="10" height="10" src="img/plus.svg" alt='img/plus.svg' />
        </button>
      </div>
   

</div>
);
}
export default Card;