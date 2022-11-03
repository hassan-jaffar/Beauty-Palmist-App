import GenericServices from "./GenericServices";
class QuizAnswer extends GenericServices {
  constructor() {
    super();
  }

  createAnswer = (data) => {
    return this.post("QuizAnswer", data);
  };
  getAnswer = (id) => {
    return this.get("QuizAnswer/" + id);
  };
}
let quizAnswer = new QuizAnswer();
export default quizAnswer;
