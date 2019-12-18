const Util = require("../Util");
const ChannelEmitDto = require("../dto/ChannelEmitDto");
const SimpleStatusDto = require("../dto/SimpleStatusDto");

module.exports = class ChannelEmit {
  constructor(server) {
    return (req, res) => {
      try {
        let channelId = req.params.channelId;
        let dtoReq = new ChannelEmitDto(req.body);

        Util.logSocketIORequest(dtoReq.eventName, dtoReq.args);

        ///shows all of the sockets omn the server
        // console.log(server.connections.get(channelId));
        // console.log(dtoReq);

        server.io.to(server.connections.get(channelId)).emit(dtoReq.eventName, dtoReq.args);

        let dtoRes = new SimpleStatusDto({
          status: "SENT",
          message: "message sent to group",
        });

        Util.logPostRequest("POST", req.url, dtoReq, dtoRes);

        res.send(dtoRes);
      }
      catch (e) {
        Util.logError(e, "POST", req.url);
        res.statusCode = 400;
        res.send(e.message);
      }
    }
  }
};
