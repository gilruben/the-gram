import $ from 'jquery';
import store from './store/store';
import {verify} from './actions/verify-actions';
import {update_user_data} from './actions/user-actions';

export const verifyUser = (nextState, replace, cb) => {
  console.log(nextState);

  $.ajax({
    url: '/auth/verify',
    type: 'GET'
  })
  .done((data) => {

    store.dispatch(verify({isVerified: true}));
    store.dispatch(update_user_data(data));
    cb()
  })
  .fail(() => {
    store.dispatch(verify({isVerified: false}));
    cb()
  })
}
