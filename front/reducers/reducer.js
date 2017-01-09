import {COUNT_UP, COUNT_DOWN} from '../action/action';

const defaultState = {
                      number: 0
                    };

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case COUNT_UP:
      console.log('counting up')
      return Object.assign({}, state, {number: state.number + 1});
    case COUNT_DOWN:
      console.log('counting down')
      return Object.assign({}, state, {number: state.number - 1})
    default:
        return state;
  }
}

export default reducer;
