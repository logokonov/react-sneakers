import React from 'react';
import styles from './Card.module.scss'

function Card({id, title, imageUrl, price, onFavourite, onPlus, favorited = false}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }

    const onClickFavourite = () => {
        onFavourite({id, title, imageUrl, price});
        setIsFavourite(!isFavourite);
    }

    return (
        <div className={styles.card}>
            <div className="favourite">
                <img onClick={onClickFavourite} width={26} height={26} src={isFavourite ? "/img/heart-like.svg" : "/img/heart-unlike.svg"} alt="Unlike"></img>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"></img>
            <h5>{title}</h5>
            <div className="cardBottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>{price} грн.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} width={26} height={26} src={isAdded ? "/img/btn-cheked.svg" : "/img/plus.svg"} alt="Plus"></img>
            </div>
        </div>
    )
}

export default Card;
