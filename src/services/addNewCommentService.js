import http from "./httpServices";

export function addNewPost(data) {
  const token = "SECURE TOKEN";
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return http.post("/comments", data, header);
}
