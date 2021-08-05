import APIURL from "../../../helpers/environment";

export function deleteHours(text, token) {
  return fetch(`http://localhost:3000/hours/${text.id}`, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: token,
    }),
  });
}
