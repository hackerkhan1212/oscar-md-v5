global.you = ['923219842745'] 
//Developer Bot
global.gc = 'https://api.whatsapp.com/send?phone=923229931076'
global.rowner = ['923229931076'] // Real Owner Bot
global.owner = ['923229931076'] // Owner Bot
global.police = ['923229931076'] // Police Bot
global.mods = ['923229931076']  // Want some help?
global.prems = ['923229931076'] // Premium user has unlimited limit
global.fotonya1 = 'https://telegra.ph/file/3b7ec1308edb07983efef.png' //ini kalo mau di ganti silahkan ganti aja
global.fotonya2 = 'https://telegra.ph/file/3b7ec1308edb07983efef.png' //gw lupa nih foto apa aja:v
global.fotonya3 = 'https://telegra.ph/file/3b7ec1308edb07983efef.png' //ini juga ganti
global.fotonya4 = 'https://telegra.ph/file/3b7ec1308edb07983efef.png' //ini juga ganti
global.fotonya5 = 'https://telegra.ph/file/3b7ec1308edb07983efef.png' //ini juga ganti
global.fotonya6 = 'https://telegra.ph/file/3b7ec1308edb07983efef.png' //ini ganti pakai foto sosialmedia mu
global.fotonya7 = 'https://telegra.ph/file/3b7ec1308edb07983efef.png'
global.instagram = 'https://www.instagram.com/iamibrahim_2005/'

global.helper = ['6285850539404']
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz', 
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  males: 'https://malesin.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  rey: 'https://server-api-rey.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com' 
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://hardianto.xyz': 'hardianto',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'zekais',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
}

global.socket = {
	qr: true,
	version: false,
	logger: true,
	retryMap: false,
	pendingMessage: false,
}

global.useMulti = false

global.media = 'https://telegra.ph/file/1a432751096d4d399a8c4.jpg'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/3b7ec1308edb07983efef.png'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '564588643' // default 10TB
global.fpagedoc = '444'

// Sticker WM
global.packname = '𝕀𝕥𝕩_𝕚𝕓𝕣𝕒𝕙𝕚𝕞'
global.author = '𝕀𝕥𝕩_𝕚𝕓𝕣𝕒𝕙𝕚𝕞'
global.wm = '© 𝕀𝕥𝕩_𝕚𝕓𝕣𝕒𝕙𝕚𝕞'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.lelang = []
global.barter = []

global.multiplier =89 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
