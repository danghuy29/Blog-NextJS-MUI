import axiosService from "../axios";
export const postService = {
  async getPost() {
    try {
      const data = await axiosService.get("/posts");
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
