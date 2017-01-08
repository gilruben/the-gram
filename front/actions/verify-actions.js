export const VERIFY = 'VERIFY';

export const verify = (isVerified) => ({
  type: VERIFY,
  data: isVerified
})
