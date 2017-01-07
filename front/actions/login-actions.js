import $ from 'jquery';

export const LOG_IN = 'LOG_IN';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';

export const log_in = (loginData) => ({
  type: LOG_IN,
  data: loginData
})

export const log_in_fail = (loginMsg) => ({
  type: LOG_IN_FAIL,
  data: loginMsg
})


export const loginAsync = (loginData) =>  (dispatch) => {
  $.ajax({
    url: '/auth/login',
    type: 'POST',
    data: loginData
  })
  .done((data) => {
    dispatch(log_in(data))
  })
  .fail(() => {
    dispatch(log_in_fail({loginMsg: 'Incorrect Username and/or Password'}))
  })
}
