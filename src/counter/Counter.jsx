import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../redux/slices/counter.slice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className="field is-grouped" style={{ justifyContent: 'center' }}>
        <div className="control">
          <button
            type="button"
            className="button is-primary is-large"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faPlusCircle} />
            </span>
          </button>
        </div>
        <div className="control">
          <h2 className="title is-1" style={{ minWidth: '120px' }}>
            {count}
          </h2>
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-primary is-large"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faMinusCircle} />
            </span>
          </button>
        </div>
      </div>
      <div className="field is-grouped" style={{ justifyContent: 'center' }}>
        <div className="control">
          <input
            type="number"
            aria-label="Set increment amount"
            value={incrementAmount}
            className="input"
            onChange={event => setIncrementAmount(event.target.value)}
          />
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-info"
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            <span className="icon mr-1">
              <FontAwesomeIcon icon={faPlusCircle} />
            </span>
            Add Amount
          </button>
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-info"
            onClick={() =>
              dispatch(incrementAsync(Number(incrementAmount) || 0))
            }
          >
            <span className="icon mr-1">
              <FontAwesomeIcon icon={faPlusCircle} />
            </span>
            Add Async
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
