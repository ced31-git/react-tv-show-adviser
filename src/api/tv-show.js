import axios from "axios";
import { BASE_URL, API_KEY_PARAM, API_LANGUAGE } from "../config";
export class TVshowAPI {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}/tv/popular${API_KEY_PARAM}${API_LANGUAGE}`
    );
    return response.data.results;
  }
}
