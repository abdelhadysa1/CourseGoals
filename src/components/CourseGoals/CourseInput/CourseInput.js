import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
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
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} style={{
          backgroundColor: isEmptyInput() ? '#fad0ec' : '#fff'
        }} />
      </div>
      <Button type="submit" disabled={isEmptyInput()}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
