import GenericServices from "./GenericServices";
class Quiz extends GenericServices {
  constructor() {
    super();
  }

  getQuiz = (id) => {
    return this.get("quiz/" + id);
  };

  
}
let quizs = new Quiz();
export default quizs;
