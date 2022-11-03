import GenericServices from "./GenericServices";
class BeautyService extends GenericServices {
  constructor() {
    super();
  }
  addBussness = (data, config) => {
    return this.postconfig("service", data, config);
  };
  getService = (id) => {
    return this.get("service/ServiceCategory/" + id);
  };
  getAllService = () => {
    return this.get("service");
  };
  ServiceUser = (id) => {
    return this.get("service/ServiceUser/" + id);
  };
  remServices = (id) => {
    return this.delete("service/" + id);
  };
  recommendationServices = (data) => {
    console.log(data);
    return this.post("service/recommendation/", data);
  };
  EditServices = (id, data) => {
    return this.put("service/" + id, data);
  };
}
let beautyService = new BeautyService();
export default beautyService;
