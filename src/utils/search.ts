import axios, { AxiosRequestConfig, CancelTokenSource } from "axios";

const makeRequestCreator = () => {
  let token: CancelTokenSource;

  return async (query: string, config: AxiosRequestConfig) => {
    // Check if we made a request
    if (token) {
      // Cancel the previous request before making a new request
      token.cancel();
    }
    // Create a new CancelToken
    token = axios.CancelToken.source();
    try {
      const res = await axios(query, { ...config, cancelToken: token.token });
      const result = res.data;
      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle if request was cancelled
        console.log("Request canceled", error.message);
      } else {
        // Handle usual errors
        console.log("Something went wrong: ", error.message);
      }
    }
  };
};

export const search = makeRequestCreator();
