import axios from "axios";

class HttpServices {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000,
    });
  }
  async getData(url) {
    try {
      const res = await this.axiosInstance.get(url);
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HttpServices;
