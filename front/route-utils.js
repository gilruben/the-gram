import $ from 'jquery';
import store from './store/store';
import {verify} from './actions/verify-actions';

export const verifyUser = (nextState, replace, cb) => {

  $.ajax({
    url: '/auth/verify',
    type: 'GET'
  })
  .done((data) => {

    store.dispatch(verify({isVerified: true}));
    cb()
  })
  .fail(() => {
    store.dispatch(verify({isVerified: false}));
    cb()
  })
}
