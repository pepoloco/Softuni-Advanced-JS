function solve(inputObj) {
  let requestObj = { ...inputObj };
  const METHODS = ["GET", "POST", "DELETE", "CONNECT"];
  const regUri = /^[a-zA-Z.0-9]+$/gm;
  const VERSION = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", " HTTP/2.0 "];
  const regExMsg = /[<>&'"\\]/gm;

  if (
    !requestObj.hasOwnProperty("method") ||
    !METHODS.includes(requestObj.method)
  ) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (
    !requestObj.hasOwnProperty("uri") ||
    !regUri.test(requestObj.uri) ||
    requestObj.uri === ""
  ) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (
    !requestObj.hasOwnProperty("version") ||
    !VERSION.includes(requestObj.version)
  ) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (
    !requestObj.hasOwnProperty("message") ||
    regExMsg.test(requestObj.message)
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }
  return requestObj;
}
// solve({
//   method: "GET",
//   uri: "svn.public.catalog",
//   version: "HTTP/1.1",
//   message: "",
// });
// solve({
//   method: "OPTIONS",
//   uri: "git.master",
//   version: "HTTP/1.1",
//   message: "-recursive",
// });

solve({
  method: "POST",
  uri: "home.bash",
  version: "HTTP/2.0",
});