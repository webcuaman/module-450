module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`>> ${global.config.PREFIX} << • ${(!global.config.BOTNAME) ? "𝐗𝐢𝐧 𝐜𝐡à𝐨 𝐦ì𝐧𝐡 𝐥à 𝐁𝐎𝐓 𝐇𝐂𝐇𝐎𝐍𝐆, 𝐠õ .𝐡𝐞𝐥𝐩 để 𝐱𝐞𝐦 𝐚𝐥𝐥 𝐥ệ𝐧𝐡, 𝐬𝐩𝐚𝐦 𝐁𝐎𝐓=𝐎𝐮𝐭 𝐛𝐨𝐱+𝐁𝐚𝐧 𝐁𝐨𝐱" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`𝐗𝐢𝐧 𝐜𝐡à𝐨 𝐦ì𝐧𝐡 𝐥à 𝐁𝐎𝐓 𝐇𝐂𝐇𝐎𝐍𝐆, 𝐠õ .𝐡𝐞𝐥𝐩 để 𝐱𝐞𝐦 𝐚𝐥𝐥 𝐥ệ𝐧𝐡, 𝐬𝐩𝐚𝐦 𝐁𝐎𝐓=𝐎𝐮𝐭 𝐛𝐨𝐱+𝐁𝐚𝐧 𝐁𝐨𝐱.`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinMp4");
			const pathGif = join(path,`hi.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝕮𝖍à𝖔 𝕸ừ𝖓𝖌 𝕰𝖒 𝖄ê𝖚 {name}.\n 𝕥ớ𝕚 𝕧ớ𝕚 𝕟𝕙ó𝕞 {threadName}.\n{type} 𝕝à 𝕖𝕞 𝕚𝕦 𝕥𝕙ứ {soThanhVien} 𝕔ủ𝕒 𝔹𝕆𝕋 🥲" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}