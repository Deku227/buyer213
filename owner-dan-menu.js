const fs = require('fs')

global.namabot = "Bot Store"
global.namaowner = "Owner Bot"
global.footer_text = "Β© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['0','6285156756860']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay
`
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}
*π₯Β Φ΄Ϋπͺ΅Μ·ΜΈΜ΅ΰ»Ν ΛΛ ΰΌΏ bot store Net-Pedia*
κ·ββΉΰ£ͺΰ£ͺκ¦κ·βΰ£­ΰ£­κ¦κ·ββΉΰ£ͺΰ£ͺκ¦κ·βΰ£­ΰ£­κ¦κ·ΰ£­ΰ£­ γ π
*βΉ Β ΫͺΧΝα₯ βοΈπ [FITUR BOT]*

\`\`\`π₯ !owner
π₯ !addsewa
π₯ !delsewa
π₯ !ceksewa
π₯ !listsewa
π₯ !pay 
π₯ !setpay
π₯ !list
π₯ !addlist 
π₯ !updatelist
π₯ !dellist
π₯ !jeda
π₯ !setproses
π₯ !changeproses
π₯ !delsetproses
π₯ !setdone
π₯ !changedone
π₯ !delsetdone
π₯ !proses
π₯ !done
π₯ !welcome
π₯ !goodbye
π₯ !setwelcome
π₯ !changewelcome
π₯ !delsetwelcome
π₯ !setleft
π₯ !changeleft
π₯ !delsetleft
π₯ !antiwame
π₯ !antilink
π₯ !open
π₯ !close 
π₯ !hidetag
\`\`\`

κ·ββΉΰ£ͺΰ£ͺκ¦κ·βΰ£­ΰ£­κ¦κ·ββΉΰ£ͺΰ£ͺκ¦κ·βΰ£­ΰ£­κ¦κ·ΰ£­ΰ£­ γ π
*πfitur bisa di pakai dengan/tanpa prefix (awalan simbol)*
*π bot on 24 jam*
*π no coppy list*
*π all trx no reff.*
*π₯Β Φ΄ Ν πα³κ ₯γ¬ΜΈΜ·Μ΅  sewa βpc :* 
 πβοΈ https://wa.me/6285156756860
`
}
