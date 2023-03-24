import APIRequest from "../config/AxiosConfig";

export function getRandomJoke() {
  return APIRequest.get("/", {
    validateStatus: function (status) {
      return status;
    },
  });
}
