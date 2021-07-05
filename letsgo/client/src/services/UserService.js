import axios from "axios"

export default {
  async getUsers() {
    let res = await axios.get("http://localhost:9090/");
    return res.data;
  },
  async getSingleUsers(id) {
    let res = await axios.delete("http://localhost:9090/"+id+"/delete")
    return res.data
  }
}