//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUx1RVhmYWYrdVoxcHZvNmtmYUJZNUZsbnFZdmVkbjhQUWNjQS8rbGMzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9neC9VVjd1d2hqRk1vS2tmUE1iaVFCYTZWOWNNOGYxOWlvQTlMVU5SND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjS1hwSExwcU9weDl6VVRlUXlybEIwTStCTG14WXdDMmNzZVI2TjNucDJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvTmI5NS9nbXRUelgyUjNtRlVBL0lBaUFDRFhQa0hGamxHd2U4anBPNDE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJDaTV2L3VlaWFOREFhZHNHYnl0RFJQZTQ4bm8rdHJJdVJSSjM2NDVaSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllRTXo3OWo3amZtcjJrMXljOG5pM0tUZkZFQ3VKeS96eTU2YldTS2dMQTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhTSCtqUG43SjNHK0cvbGFmaXlWMytndmFPdUN6OFNDQ1NSeTRCU2lrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWEvS0Eya3ptMjhXaW9QVG05djlLcmh6MVJCMGZEWnptV3IzVEM0NUNGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZEbUxGc1NURmJ2V091a1hCenQ1SWV0WFErQUJ3Q2JHOWlBUmVrUTJlaUFsM0hQdE96c1NRZk1KZ1pETUtNdW96aXVYNnNlNWZiazc1VXV1cFdYTWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJvbUZFaHd5d1h3dkRZMGdURTRyTDRTemg3eGRLVCtYaXgvUkJvYlR3aitVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCaFA2VlJNUFNwNnQ5VEpya1locWdBIiwicGhvbmVJZCI6ImIwNzAxZjYwLWQ5OWUtNGM5Mi1iMTM3LWUxZjI4MDgyMzlmOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLalR0ZTV0QTc1RGpsTVFGMllZeXRENmNpcWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickZGeGlJMG9YV1ZYRVZ3S3o1WHdHSW9HZjZRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFZNzFZRVA2IiwibWUiOnsiaWQiOiI5NDc2MzkwODg1ODo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY2NTY3NzE1Njg0NDUwOjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOT3hrQmdRdUtMVHh3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwRUdrbTh5QXpzY2Vyd3VzWGliTS96dEFsWWRQTjlQUlQ5dEtOTXR3ckI4PSIsImFjY291bnRTaWduYXR1cmUiOiJ1bmJ5TFdYcmVTTldCRjlvd3FVb1MwdTdpWFFrRkNQNzJ1bS8vR1FkYzU1clZtVFpKMGJ4anErSEp3WXY0OUFKZGRpbXQ2RHpGaXJ6T1ZIYU1WRzJDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaUhSRjEvbEQwWFhtZVNSSlF6YlBwanJycG82VE1HVFBRaHNIbDE1aGFSV2JYNm9vUUZLUDBWVWxvTy9WT090YXVSanNhQTQ4ZTFLQ3FseFVBYXhiakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzkwODg1ODo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFSQnBKdk1nTTdISHE4THJGNG16UDg3UUpXSFR6ZlQwVS9iU2pUTGNLd2YifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MDg3NDgyMiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJaDgifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
