import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/survey-responses");
  }

  get(id) {
    return http.get(`/survey-responses/${id}`);
  }

  create(data) {
    return http.post("/survey-responses", data);
  }

  update(id, data) {
    return http.put(`/survey-responses/${id}`, data);
  }

  delete(id) {
    return http.delete(`/survey-responses/${id}`);
  }

  deleteAll() {
    return http.delete(`/survey-responses`);
  }

}

export default new TutorialDataService();
