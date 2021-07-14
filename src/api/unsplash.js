import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WlWF8txvokElwhw_Xy6Nhintn_y3ysSwmCMuLuy3rgM",
  },
});
