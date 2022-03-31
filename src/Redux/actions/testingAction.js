import axiosInstance from "../../Helpers/axiosInstance";
import { TEST_URL_FAIL, TEST_URL_REQUEST, TEST_URL_SUCCESS } from "../../Helpers/constants";

export const TestAction = () => async (dispatch) => {
      try {
        dispatch({ type: TEST_URL_REQUEST });
        const { data } = await axiosInstance.get(
          `https://opentdb.com/api.php?amount=10&category=28&type=multiple`,
        );
        dispatch({ type: TEST_URL_SUCCESS, payload: data });
      } catch (error) {
        dispatch({
          type: TEST_URL_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };