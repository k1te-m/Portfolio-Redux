import axios from "axios";

export default {
  getRepos: async () => {
    return await axios.get("/api/repos");
  },
  sendMessage: async (data) => {
    return await axios.post("/api/messages", data);
  },
};
