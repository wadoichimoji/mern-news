import sendRequest from "./send-request";
const BASE_URL = "/api/news";

export function topStories() {
  return sendRequest(`${BASE_URL}/topstories`);
}

