import GenericServices from "./GenericServices";
class BussnessServices extends GenericServices {
  constructor() {
    super();
  }
  addBussness = (data, config) => {
    return this.postconfig("Bussness", data, config);
  };
  getBussness = (id) => {
    return this.get("Bussness/" + id);
  };
  forget = (data) => {
    return this.post("users/forget", data);
  };
  reset = (data) => {
    return this.post("users/newpassword", data);
  };
  verifyUser = (data) => {
    return this.post("users/verify", data);
  };
  getBussnessOwner = (id) => {
    return this.get("Bussness/Owner/" + id);
  };

  updateUser = (data) => {
    return this.post("users/userUpdate", data);
  };
  updateUsers = (id, data) => {
    return this.put("Bussness/profile/" + id, data);
  };
  updateAc = (id, data) => {
    return this.put("Bussness/" + id, data);
  };
  createextra = (data) => {
    return this.post("extra/", data);
  };
  updateextra = (data) => {
    return this.put("extra/extraUpdate", data);
  };
 
  viewextra = (id) => {
    return this.get("extra/" + id);
  };

  createMode = (data) => {
    return this.post("extra/modes",data);
  };
  viewMode = (id) => {
    return this.get("extra/modes/"+id);
  };
  updateModes = (data) => {
    return this.put("extra/modes/",data);
  };
  
}
let bussnessServices = new BussnessServices();
export default bussnessServices;
