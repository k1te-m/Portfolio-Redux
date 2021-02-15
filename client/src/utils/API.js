import axios from "axios";

export default {
  getRepos: async () => {
    return await axios.get("/api/repos");
  },
};
