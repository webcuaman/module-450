﻿module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100047399490146") {
    var aid = ["100047399490146"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin lần nữa bố ban khỏi dùng","Tag Admin lần nữa tao đấm cho đấy","Đã bảo đừng tag Admin mà, thích ăn đấm hả😠","Đĩ mẹ mày thích tag Admin không con chó 😏","Admin tao ngủ rồi đừng tag nó tí dậy nó rep"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }