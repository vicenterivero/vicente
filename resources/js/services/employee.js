const baseUrl = "http://localhost:8000/employee"
import axios from "axios";
const employee = {};

employee.list = async () => {
  const urlList = baseUrl+"/role"
  const res = await axios.get(urlList)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

employee.save = async (data) => {
  const urlSave= baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}
employee.listEmployee = async () => {
    const urlList = baseUrl+"/list"
    const res = await axios.get(urlList)
    .then(response=>{ return response.data; })
    .catch(error=>{ return error; })
    return res;
  }

export default employee
