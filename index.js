const express = require("express");
const { Telegraf } = require("telegraf");
const path = require("path");
const { checkMembership } = require("./verify");

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

app.use(express.json());


// Telegram Bot Start
bot.start(async (ctx) => {
  try {
    const imagePath = path.join(__dirname, "assets", "welcome.jpg");

    await ctx.replyWithPhoto(
      { source: imagePath },
      {
        caption:
          "🍫 *Welcome to the Nestlé KitKat Cashback Rewards!* 🎉\n\n🎁 Claim your exclusive cashback in just a few simple steps.\n\n👇 Tap the button below to get started!",
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🎁 Open Mini App",
                web_app: {
                 url: "https://freetrick009.github.io/RedReward2/"
                }
              }
            ]
          ]
        }
      }
    );

  } catch (err) {
    console.error(err);
  }
});


// Railway Test Route
app.get("/", (req, res) => {
  res.send("✅ Railway server is running.");
});


// Telegram Membership Verification API
app.post("/verify", async (req, res) => {

  try {

    const { userId } = req.body;

    if (!userId) {
      return res.json({
        success: false,
        message: "Missing user ID"
      });
    }


    const result = await checkMembership(userId);


    res.json({
      success: result
    });


  } catch (error) {

    console.error(error);

    res.json({
      success: false
    });

  }

});


// Start Bot
bot.launch();

console.log("✅ Bot is running...");


// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});
