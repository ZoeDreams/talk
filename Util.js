const chalk = require("chalk");

module.exports = class Util {
  static log(clazz, msg) {
    if(!clazz) clazz = {constructor: {name: "Talk"}};
    console.log(
      chalk.blue("[" + clazz.constructor.name + "]") + " " + msg
    );
  }

  static logHandshakes(handshake) {

    // TODO need to implement a prettier way to log this stuff

    // console.log(handshake);
  }

  static logSocketIORequest(type, message, socket) {
    console.log(
      chalk.magenta("[TALK]") +
      " " +
      type +
      " -> " +
      message +
      " :: " +
      !socket ? "" : socket.id
    );
  }

  static logPostRequest(type, url, dtoReq, dtoRes) {
    console.log(
      chalk.magenta("[TALK]") +
      " " +
      type +
      " -> " +
      url +
      " : REQ=" +
      JSON.stringify(dtoReq) +
      " : RES=" +
      JSON.stringify(dtoRes)
    );
  }

  static logWarnRequest(msg, type, url) {
    console.log(
      chalk.magenta("[API-DEV]") +
      " " +
      chalk.bold.yellow("[WARN]") +
      " " +
      type +
      " -> " +
      url +
      " :: " +
      msg
    );
  }

  static logError(e, type, url) {
    console.log(
      chalk.magenta("[TALK]") +
      " " +
      chalk.bold.red("[ERROR]") +
      " " +
      type +
      " -> " +
      url +
      " : " +
      chalk.bold(e.stack)
    );
  }

  static isObjEmpty(obj) {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
      return true;
    }
    return false;
  }
};
