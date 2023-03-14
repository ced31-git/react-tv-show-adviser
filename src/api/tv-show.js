import axios from "axios";
import { BASE_URL, API_KEY_PARAM, API_LANGUAGE } from "../config";
export class TVshowAPI {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}/tv/popular${API_KEY_PARAM}${API_LANGUAGE}`
    );
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY_PARAM}${API_LANGUAGE}`
    );
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}/search/tv${API_KEY_PARAM}${API_LANGUAGE}&query=${title}`
    );
    return response.data.results;
  }
}
