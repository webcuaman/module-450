const fs = require("fs");
module.exports.config = {
	name: "Luật box",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Tiadals", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
    cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Luật box")==0 || (event.body.indexOf("luật box")==0)) {
		var msg = {
				body: "• THÔNG BÁO NỘI QUY BOX ‼️\n1. • Box là nơi mọi người giao lưu vui vẻ mong mọi người 👇\n2. • Không văn tục , không buff bẩn phá game , không hack , không share các link không rõ ràng và hình ảnh + video không liên quan đến box ❌\n3. • Không được gây war chữi nhau trong box có việc gì cứ báo trực tiếp với boss để giải quyết \n4. • ĐẶC BIỆT : Box không dành cho cá cảnh seen chùa , không được bơ tv dưới mọi hình thức nên mn nhớ tương tác đầy đủ 📌\n5. • Khi quản trị viên đang thông báo hay giải quyết vấn đề gì đó mong mọi người im lặng và lắng nghe , tôn trọng người khác cũng như tôn trọng mình ❤️\n6. • Chơi game không cay cú , out box nhớ thông báo với quản trị viên 1 tiếng 👈\n7. • LƯU Ý : Thành viên khi vào box không được tự ý đổi biệt danh hoặc chủ đề của box ❗️\n8. • Box cần những bạn tương tác gắn bó lâu dài nên những ai quá 2 ngày không tương tác sẽ bị kích khỏi box ❌\nʏᴇ̂ᴜ ᴍᴏ̣ɪ ɴɢᴜ̛ᴏ̛̀ɪ ʀᴀ̂́ᴛ ɴʜɪᴇ̂̀ᴜ ♡ !!\n𝘽𝙤𝙨𝙨 : Úc Hara",
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}