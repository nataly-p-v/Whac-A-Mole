import React from 'react';
import { connect } from 'react-redux';
import App from './App';

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({type: 'DECREMENT'})
  }
};
const mapStateToProps = state => {
  return {
    count: state
  };
};
const mainComponent = ({count, handleIncrementClick, handleDecrementClick}) => <App count={count} handleIncrementClick={handleIncrementClick} handleDecrementClick={handleDecrementClick}/>;
export const Container = connect(mapStateToProps, mapDispatchToProps)(mainComponent);