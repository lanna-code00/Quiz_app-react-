import { TEST_URL_FAIL, TEST_URL_REQUEST, TEST_URL_SUCCESS } from "../../Helpers/constants";

export const TestReducer = (state = {}, action) => {
    switch (action.type) {
      case TEST_URL_REQUEST:
        return {loading: true };
      case TEST_URL_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          success: true
        };
      case TEST_URL_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
          success: false
        };
      default:
        return state;
    }
  };