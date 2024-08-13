const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_41_08_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICA3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDg4LFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaVdRcmIrSTNJTUNmZzc1ZGNlRnp0Qm1mM2duREVPTWNJQ0RXcW1ydmh6ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDMyNTE0ODQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDOUQzODNCQTc3QjZBRTVENjk5ODQyNTk3RjQyMzUyQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjM0ODgxMTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDMyNTE0ODQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENkJDOEU0M0NBM0M5NTNDOUI1QjcxRkI3RUIyOTQyOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjM0ODgxMTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicnZHZC1YNG9UeG1JX2RnTWFLZDFud1wiLFxuICBcInBob25lSWRcIjogXCJkYjllNjYyMi1jNjEzLTQ4OTUtYWY3ZC1kMGMxMmE4Nzk2NjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgODIsXG4gICAgICAyMzMsXG4gICAgICA1MSxcbiAgICAgIDEyNCxcbiAgICAgIDE2MCxcbiAgICAgIDE0MCxcbiAgICAgIDEwNSxcbiAgICAgIDE1MCxcbiAgICAgIDEyNSxcbiAgICAgIDc5LFxuICAgICAgMTAwLFxuICAgICAgMTE3LFxuICAgICAgMjQsXG4gICAgICA1NyxcbiAgICAgIDE2NyxcbiAgICAgIDE4MixcbiAgICAgIDUzLFxuICAgICAgMjgsXG4gICAgICAzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICA0NSxcbiAgICAgIDE1NSxcbiAgICAgIDE4MyxcbiAgICAgIDI1MCxcbiAgICAgIDQ5LFxuICAgICAgMjU1LFxuICAgICAgMjQwLFxuICAgICAgMTM5LFxuICAgICAgMjAzLFxuICAgICAgMjE2LFxuICAgICAgMjQxLFxuICAgICAgMjI0LFxuICAgICAgMTUyLFxuICAgICAgOTEsXG4gICAgICAyNDksXG4gICAgICA3MSxcbiAgICAgIDg1LFxuICAgICAgMjMwLFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDMjNGWlJIUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMjUxNDg0Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWlhIHBsdWdcIixcbiAgICBcImxpZFwiOiBcIjE5NjczOTk1Mjg1NzE2Njo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6OG81RUJFT3F1NmJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTU1vcDVxU1d6ZjVmZkJNNFUxc0dQNEFrNzQwdG12cUI1Ymlkb0FPeDFsUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjbVFpSGYxK05ydm96QXo5Rmg5NEdxUHVWVFh6eUlFM2dGSW85eGJtaFBmSGJTK1RlL1pTMzJIN3VEekQ5NFYvNEZlTWJuU1lIZTlOeUMraE82SEVBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoMXlKNk45VG42c0lXN1hwdmtJQ1hRWGxqQmVYU0tLWVVxS2c0T0gwZi9QTlRiRVJaZ05QaW5iVGd4dlJ5MncrNlVPWklqSHJhcnpZR05hZlpWK0hpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMyNTE0ODQ3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM0ODgxMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPMXBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8xcC5qc29uIjogIntcImtleURhdGFcIjpcIjhHZG5HSXdCZmc5WnYyOGlvMXJORmhNUDNUamU2WkNWdWtwRkZuTnNPdTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzA0Njc2MzgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjM0ODgxMTI3NDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
