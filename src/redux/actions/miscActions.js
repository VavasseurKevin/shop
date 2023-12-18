import {
    LOADING, SET_REQUEST_STATUS
  } from '../../constants/constants';

export const setRequestStatus = (status) => ({
    type: SET_REQUEST_STATUS,
    payload: status
  });

  export const setLoading = (bool = true) => ({
    type: LOADING,
    payload: bool
  });
  
  