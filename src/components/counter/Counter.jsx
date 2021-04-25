import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, InputGroup, Spinner } from 'react-bootstrap';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  selectLoading,
} from '../../redux/slices/counter.slice';

const Counter = () => {
  const count = useSelector(selectCount);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className="form-inline justify-content-center">
        <Button
          variant="success"
          size="small"
          onClick={() => dispatch(increment())}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </Button>
        <div>
          <h2 style={{ minWidth: '120px' }}>{count}</h2>
        </div>
        <Button
          variant="danger"
          size="small"
          onClick={() => dispatch(decrement())}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </Button>
      </div>
      <div className="form-inline justify-content-center">
        <InputGroup>
          <Form.Control
            type="number"
            value={incrementAmount}
            onChange={event => setIncrementAmount(event.target.value)}
          />
          <InputGroup.Append>
            <Button
              variant="primary"
              onClick={() =>
                dispatch(incrementByAmount(Number(incrementAmount) || 0))
              }
            >
              Add
            </Button>
          </InputGroup.Append>
          <InputGroup.Append>
            <Button
              variant="primary"
              onClick={() =>
                dispatch(incrementAsync(Number(incrementAmount) || 0))
              }
            >
              Add Async{' '}
              {loading && (
                <Spinner size="sm" animation="border" variant="light" />
              )}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
};

export default Counter;
