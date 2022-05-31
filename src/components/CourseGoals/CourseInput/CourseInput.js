import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [defaultState, setDefaultState] = useState(true)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setDefaultState(false)
  };

  const isEmptyInput = () => {
    if (enteredValue.trim().length === 0) {
      return true
    }
    return false
  }

  const formSubmitHandler = event => {
    event.preventDefault();
    if (isEmptyInput()) {
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
    setDefaultState(true)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isEmptyInput() && !defaultState ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" disabled={isEmptyInput()}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
