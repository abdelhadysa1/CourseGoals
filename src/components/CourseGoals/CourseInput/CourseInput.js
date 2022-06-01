import React, { useState } from 'react';
import styled from 'styled-components'

import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    ${props => props.invalidInput === true && 'color: rgb(255, 94, 94);'}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalidInput === true ? '#fad0ec' : '#ccc'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    ${props => props.invalidInput === true && 'background-color: rgb(255, 94, 94);'}
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }`

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
      <FormControl invalidInput={isEmptyInput() && !defaultState ? true : false}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit" disabled={isEmptyInput()}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
