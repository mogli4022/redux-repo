import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './actions';

function App() {
  const myState = useSelector((state) => state.counter.changeTheNumber);
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus icon"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="auantity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <a
            className="quantity__plus icon"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
