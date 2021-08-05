let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "efa-la.web.app":
    APIURL = "https://efa-la-server.herokuapp.com";
}
export default APIURL;
