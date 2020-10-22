import React from 'react';
import styles from './CheckoutProduct.module.css';
import { useStateValue } from '../StateProvider/StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [state, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className={styles.checkoutProduct}>
      <img className={styles.checkoutProduct__image} src={image} />

      <div className={styles.checkoutProduct__info}>
        <p className={styles.checkoutProduct__title}>{title}</p>
        <p className={styles.checkoutProduct__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.checkoutProduct__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
