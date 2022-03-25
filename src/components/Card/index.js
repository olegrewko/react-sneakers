import React from 'react';
import styles from './Card.module.scss';

function Card(props){
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(! isAdded);
  }
  React.useEffect(() => {
  console.log(' Переменная изменилась');
}, [isAdded]);

    return (
<div classoName={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
      <img  src="img/unliked.svg" alt="img/unliked.svg" />
      </div >
   
      <img widht="133" height="112"  src={props.imageUrl} alt="img/sneakers/1.jpg" />
      

      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
      
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}руб</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img className={styles.plus} onClick= {onClickPlus} src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"} alt="Plus" />
        </button>
      </div>
   

</div>
);
}
export default Card;