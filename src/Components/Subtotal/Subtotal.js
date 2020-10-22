import React from 'react';
import styles from './Subtotal.module.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../StateProvider/Reducer';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className={styles.subtotal_gift}>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'Rs'}
      />
      <button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
};
export default Subtotal;
