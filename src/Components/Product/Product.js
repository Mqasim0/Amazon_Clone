import React from 'react';
import styles from './Product.module.css';
import { useStateValue } from '../StateProvider/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layyer
    dispatch({
      type: 'ADD_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className={styles.product}>
      <div className={styles.product_info}>
        <p>{title}</p>
        <p className={styles.product_price}>
          <small>$</small>
          <strong>{price} </strong>
        </p>
        <div className={styles.product_rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
