import React from 'react';
import {connect} from 'react-redux';
import store from '../store/store';
import {bindActionCreators} from 'redux';
import  {count_up, count_down} from '../action/action';

const CounterContainer = (props) => (
  <div>
    <div>
      {props.num}
    </div>
    <div>
      <button onClick={store.dispatch.bind(this, count_up())}>Up</button>
      <button onClick={props.count_down}>Down</button>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
      num: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    count_down: count_down
  },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
