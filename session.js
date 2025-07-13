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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0V1Ulh3NzRpaHcwL0JDaTRlVTVRWmJKWllTKzJsMDBDUWlCV3k4MlQzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWI3SkJYZ0RjT1JxSlQyejJTdXEvWEdLVnFDT3BzbGhmR25XNUl1TGltZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRUU4Vmlsb3ovQ3J6TjJ5TU5tNDB6MG9PNVlteXZOSWtadWU3MURtOWswPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxOUl1YVZWOGs4aGZwOGdVUHBHMzBWNFc0bmtsQ2pNdjNTdFI3bXhrZFhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCOU5zN09TNXBHeS9PUXdGM1dObmZtSWJkWExlMDlpb3FGNHJLMFV5Mkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhJSHh4WXlKQTFmMHJ2RCs1dFlIb1JKYzRUbTcwdGkwRU9XSlp4MTgxRjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1A4UTkxMUtqTjFHZkZaWGQrVEV2dVc0WTBwMk9xTk5mZC9IR0xHVnRsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVh4ZmZPdjcxWDRRek1RM3JuVTNYVGdkZlRwKzdhWElEY0NDMW95UEdsWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVVcS9qNkVyVU5IT1J6Ti9kSjdMNEZlZkhiSGI3T3pkdHFyajZHNnhZYmxsanhOUlN6VXZmSlQwSmc5akRhQzhCaGxJdHZPRTlsNFFqbit2WFFaekRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJ3QjJmRVlQbTBDWXdtM3F1N0lZWXh6bFFhYUN2UUJyUVpBL0JWWjJzVFJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJV1VLZXdQNVNicVhMNTFYSkwzcHRBIiwicGhvbmVJZCI6Ijc4MTViZWRkLWNkMzgtNDIxOS04MjFjLTcxMzMwYTEzZDJkMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUm1YUEU0TGtZamZyV1I5WjU4WVI0YmZVU3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVF0TUlMcm80Z093cEtzU3VuR29mYUwzSnBNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZBNldIUjFYIiwibWUiOnsiaWQiOiI5NDc2MzkwODg1ODo5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY2NTY3NzE1Njg0NDUwOjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJR3g3NTRERU9DOXpNTUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4aWt2aGJ6ZDlpakRnTlJlY1BsMHhlSDY5ejhBSkY0bGx3emNiWEVLZ1NjPSIsImFjY291bnRTaWduYXR1cmUiOiJmTm0vT3BUYzI2S3AveGdNR215OTcxTjVGSFVXOWJFaHpHOFIzbmZWMUdtTVlxRjUxWFRQY2RBck1KM05QRjB0dUdyZkN2UUxja21lVWJyTWoxZGFBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOVZCM1ZuMmpzK09mWW5mLzFXMDlzNUNxRU45SHVjLzFZbnhBNjBnWWtQUlJMVXo5cWZPZGVxSUVOcHViUlhEQUpTeW1PTStiQTU1V2k0QktJZ3dYRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzkwODg1ODo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZJcEw0VzgzZllvdzREVVhuRDVkTVhoK3ZjL0FDUmVKWmNNM0cxeENvRW4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjM3NTAyMiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOa3AifQ==",
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
