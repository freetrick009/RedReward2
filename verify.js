const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

// Your 7 private channel IDs
const channels = [
  "-1002643515967",
  "-1002120919296",
  "-1004447234871",
  "-1001985552030",
  "-1002056625583",
  "-1003310898721",
  "-1001213656510"
];

async function checkMembership(userId) {

  for (const channelId of channels) {
    try {
      const member = await bot.telegram.getChatMember(
        channelId,
        userId
      );

      const allowedStatus = [
        "creator",
        "administrator",
        "member"
      ];

      if (!allowedStatus.includes(member.status)) {
        return false;
      }

    } catch (error) {
      console.log("Channel check error:", channelId, error.message);
      return false;
    }
  }

  return true;
}

module.exports = {
  checkMembership
};
