const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ/whatsapp-bot

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname, waver) => {
    return `
Ola, *_${pushname}!_* Esse é o *_Urbaee Bot_*, veja os comandos abaixo

*▌│█║▌│ █║▌│█│║▌*
  
*┏━───────────────╮*
*┃➥${prefix}sticker*
*┃➥${prefix}ttp*
*┃➥${prefix}stickergif*
*┃➥${prefix}stickergiphy*
*┃➥${prefix}stmg*
*┃➥${prefix}meme*
*┃➥${prefix}rate*
*┃➥${prefix}sreddit*
*┃➥${prefix}clima*
*┃➥${prefix}movie*
*┃➥${prefix}doggo*
*┃➥${prefix}fakta*
*┃➥${prefix}anime*
*┃➥${prefix}kpop*
*┃➥${prefix}memes*
*┃➥${prefix}tts*
*┃➥${prefix}translate*
*┃➥${prefix}covidindo*
*┃➥${prefix}linkgc*
*┃➥${prefix}adminList*
*┃➥${prefix}ownergc*
*┃➥${prefix}me*
*┃➥${prefix}listban*
*┃➥${prefix}listblock*
*┃➥${prefix}gcinfo*
*┃➥${prefix}howmuch*
*┃➥${prefix}grupbot*
*┃➥${prefix}read*
*┃➥${prefix}getpic @tagmember*
*┃➥${prefix}saylist*
*┃➥${prefix}addsay*
*┃➥${prefix}say*
*┃➥${prefix}delsay*
*┃➥${prefix}jadian*
*┃➥${prefix}mystat*
*┃➥${prefix}tod*
*┃➥${prefix}imgtourl*
*┃➥${prefix}trendingtwit*
*┃➥${prefix}covid19*
*┃➥${prefix}bot*
*┃➥${prefix}reverseword*
*┃➥${prefix}linknobg*
*┃➥${prefix}translate*
*┃➥${prefix}afk*
*┗━───────────────╯*
*▌│█║▌│ █║▌│█│║▌*
⌜Downloader & Media:
*┏━───────────────╮*
*┃➥${prefix}ig*
*┃➥${prefix}ig2*
*┃➥${prefix}play*
*┃➥${prefix}play2*
*┃➥${prefix}tiktok*
*┃➥${prefix}ytmp3*
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_
⌜A̶n̶i̶m̶e̶ ⌟ツ:
*┏━───────────────╮*
*┃➥${prefix}rhug*
*┃➥${prefix}slap*
*┃➥${prefix}waifu*
*┃➥${prefix}nsfwgif +18*
*┃➥${prefix}bjgif*
*┃➥${prefix}cumgif*
*┃➥${prefix}kissgif*
*┃➥${prefix}rhentai +18*
*┃➥${prefix}pussy*
*┃➥${prefix}bjanime*
*┃➥${prefix}boobs*
*┃➥${prefix}randomhentai +18*
*┃➥${prefix}randomhug*
*┃➥${prefix}baka*
*┃➥${prefix}animeavatar*
*┃➥${prefix}neko*
*┃➥${prefix}crygif*
*┃➥${prefix}randompat*
*┃➥${prefix}wallpaper*
*┃➥${prefix}wallpaper2*
*┃➥${prefix}wpanime*
*┃➥${prefix}nekonsfw*
*┃➥${prefix}spank*
*┃➥${prefix}classic*
*┃➥${prefix}kuni*
*┃➥${prefix}trapnime*
*┃➥${prefix}cuddle*
*┃➥${prefix}tickle*
*┃➥${prefix}feetgif*
*┃➥${prefix}anal*
*┃➥${prefix}sologif*
*┃➥${prefix}ttgif*
*┃➥${prefix}lesbian*
*┗━───────────────╯*
_-_-_-_-_-_-_-_-_-_-_-_-_-_
⌜I̶m̶a̶g̶e̶s̶ ⌟:
*┏━───────────────╮*
*┃➥${prefix}aesthetic*
*┃➥${prefix}images*
*┗━───────────────╯*
_-_-_-_-_-_-_-_-_-_-_-_-_-_
⌜t̶e̶n̶t̶a̶n̶g  ̶b̶o̶t̶ ⌟:
*┏━───────────────╮*
*┃➥${prefix}botstat*
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_

Hope you have a great day!!(￣▽￣)`
}

/*
Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
https://trakteer.id/arugabot
Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.
Terimakasih. -ArugaZ`
}

exports.kodenuklir = () => {
    return `	
     ● KODE NUKLIR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942 258382 224942
     
229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364  223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613`
}
