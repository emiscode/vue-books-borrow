import { http } from "./config";

export default {
  listAll: () => {
    return http.get("books");
  },

  save: (books) => {
    return http.post("books", books);
  },

  update: (books) => {
    return http.put("books", books);
  },

  delete: (books) => {
    return http.delete("books", { data: books });
  },
};
