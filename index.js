const { create, Client } = require('@open-wa/wa-automate')
const figlet = require('figlet')
const fs = require('fs-extra')
const options = require('./utils/options')
const { color, messageLog } = require('./utils')
const HandleMsg = require('./HandleMsg')


const start = (aruga = new Client()) => {
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('URBAE BOT', { font: 'Ghost', horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color('[DEV]'), color('Urbae', 'yellow'))
    console.log(color('[~>>]'), color('BOT Started!', 'green'))

    // Mantenha a sessão ligada
    aruga.onStateChanged((state) => {
        console.log(color('[~>>]', 'red'), state)
        if (state === 'CONFLICT' || state === 'UNLAUNCHED') aruga.forceRefocus()
    })

    // quando o bot é convidado para o grupo
     aruga.onAddedToGroup((async (chat) => {
        let totalMem = chat.groupMetadata.participants.length
        let groupName = chat.contact.name
	const gucid = gcid.includes(groupId)
        const ownerNumber = '62895334950905@c.us'
        const getAllMembers = await aruga.getGroupMembersId(chat.groupMetadata.id)
        if (totalMem < 300 && !getAllMembers.includes(ownerNumber)) {
            aruga.sendText(chat.id, `Upss ...\n\nPara poder convidar bots para o grupo *${name}*. Você deve comprar a permissão ^^\n\nSe estiver interessado, converse diretamente com o administrador digitando: wa.me/5521992491007`).then(() => aruga.leaveGroup(chat.id)).then(() => aruga.deleteChat(chat.id))
        } else {
            aruga.sendText(chat.groupMetadata.id, `Olá *${name}* obrigado por convidar este bot, para ver o menu envie */help* e não se esqueça de ajudar o dono a aumentar o servidor para que o bot não suspenda / ou tenha lentidão no envio`)
        }
    }))

		  aruga.onGlobalParicipantsChanged(async (event) => {
        const host = await aruga.getHostNumber() + '@c.us'
		const left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
		const isLeft = left.includes(event.chat)
		const welcome = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
		const isWelcome = welcome.includes(event.chat)
		let profile = await aruga.getProfilePicFromServer(event.who)
		if (profile == '' || profile == undefined) profile = 'https://i.ibb.co/DthYrSB/a256bae0f5ed.jpg'
        // kondisi ketika seseorang diinvite/join group lewat link
        if (event.action === 'add' && event.who !== host && isWelcome) {
			 const gChat = await aruga.getChatById(event.chat)
			const { contact, groupMetadata, name} = gChat
			await aruga.sendFileFromUrl(event.chat, profile, 'profile.jpg', `*ey yo,what up!* *@${event.who.replace('@c.us','')}* Welcome to *${name}*\n\nThere is nothing to say, just follow the rules of *${name}* Group.\n\n*Commands bot: /menu, /p*`)
        }
        // condição quando alguém é colocado para dentro / fora do grupo
        if (event.action === 'remove' && event.who !== host && isLeft) {
	    const gChat = await aruga.getChatById(event.chat)
	    const { contact, groupMetadata, name} = gChat
            const zchat = await aruga.getProfilePicFromServer(event.who)
            await aruga.sendFileFromUrl(event.chat, zchat, 'profile.jpg', `Babayy @${event.who.replace('@c.us', '')} Finalmente *${name}* reduziu o numero de participantes`)
        
        }
    })

    aruga.onIncomingCall(async (callData) => {
        // quando alguém liga para o número, o bot envia uma mensagem
        await aruga.sendText(callData.peerJid, 'Não foi possível receber chamadas.\n\n-bot')
        .then(async () => {
            // o bot irá bloquear aquele número
            await aruga.contactBlock(callData.peerJid)
        })
    })


    // quando alguém manda uma mensagem
    aruga.onMessage(async (message) => {
        aruga.getAmountOfLoadedMessages() // limpe o cache de mensagens se já houver 3.000 mensagens.
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[aruga]', color(`Mensagens carregadas ${msg}, cortando o cache de mensagens...`, 'yellow'))
                    aruga.cutMsgCache()
                }
            })
        HandleMsg(aruga, message)    
    
    })
	
    // Message log for analytic
    aruga.onAnyMessage((anal) => { 
        messageLog(anal.fromMe, anal.type)
    })
}

//create session
create(options(true, start))
    .then((aruga) => start(aruga))
    .catch((err) => new Error(err))
