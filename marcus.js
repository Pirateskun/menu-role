const { MessageEmbed, Client } = require('discord.js');
const client = new Client({ fetchAllMembers: true });
const marcuscum = require('discord-buttons')
marcuscum(client);
const marcus = require("./yanak.js")
const { MessageMenu, MessageMenuOption } = require('discord-buttons');


client.on("ready", async () => {
    client.user.setPresence({ activity: { type: marcus.Bot.Ready.Type, url: `https://twitch.tv/${marcus.Bot.Ready.Twitch}/`, name: marcus.Bot.Ready.Name, status: marcus.Bot.Ready.Status }, });
    let botVoiceChannel = client.channels.cache.get(marcus.Bot.BotVoiceChannel);
    if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("bağlanamadim agabey"));
  });






client.on("message", (message) => {
    if (message.content !== marcus.Bot.Prefix + marcus.Bot.Command) return;
  
    let Çkl = new marcuscum.MessageButton()
      .setStyle('grey') 
      .setLabel(marcus.Button.Labels.Çekiliş) 
      .setEmoji(marcus.Button.Emoji.Çekiliş)
      .setID(marcus.Button.Labels.Çekiliş); 
  
    let Etk = new marcuscum.MessageButton()
      .setStyle('grey') 
      .setLabel(marcus.Button.Labels.Etkinlik) 
      .setEmoji(marcus.Button.Emoji.Etkinlik)
      .setID(marcus.Button.Labels.Etkinlik); 
    
  
    message.channel.send(`
Selam ${marcus.Bot.ServerName} üyeleri!

Sunucumuzda sizleri rahatsız etmemek amacıyla \`@everyone\` ve \`@here\` atmayacağız bu yüzden siz bizlerin yaptığı etkinlik ve çekilişlerden haberdar olabilesiniz diye 2 rol açtık;

\` • \` Eğer \`@Etkinlik Katılımcısı\`: Rolü alırsanız sunucumuzda düzenli olarak yapılan Gartic iO/Phone, Vampir Köylü, Doğruluk Cesaretlik, Kamp Ateşi gibi bir çok etkinlikten bildirim alabilir ve katılım sağyalayarak discordda harcadğınız zamanı güzelleştirebilirsiniz.

\` • \` Eğer \`@Çekiliş Katılımcısı\`: Rolü alırsanız sunucumuzda düzenli olarak yapılan ${marcus.Button.Emoji.BluTV}, ${marcus.Button.Emoji.Exxen}, ${marcus.Button.Emoji.Netflix}, ${marcus.Button.Emoji.Nitro}, ${marcus.Button.Emoji.Spotify} çekilişlerinden bilirim alabilir ve bir hediye kazanma şansı yakalayabilirsiniz.

**NOT:**\` Sunucumuzda gereksiz yere @everyone veya @here atılmayacağından dolayı rollerinizi kesinlikle almalısınız aksi takdirde yapılan çekilişlerden ve etkinliklerden bildirim alamaz ve katılım sağlayamazsınız ;(
`, { 
      buttons: [Etk, Çkl]
  });
  });
    
  client.on('clickButton', async (button) => {
    
      if (button.id === marcus.Button.Labels.Çekiliş) {
          if (button.clicker.member.roles.cache.get(marcus.Rol.Çekiliş)) {
              await button.clicker.member.roles.remove(marcus.Rol.Çekiliş)
              await button.reply.think(true);
              await button.reply.edit(`Başarılı <@&${marcus.Rol.Çekiliş}> adlı rol üzerinizden alındı!`)
          } else {
              await button.clicker.member.roles.add(marcus.Rol.Çekiliş)
              await button.reply.think(true);
              await button.reply.edit(`Başarılı <@&${marcus.Rol.Çekiliş}> adlı rol üzerinize verildi artık çekilişlerden bildirim alacaksınız!`)
          }
      }
  
    
      if (button.id === marcus.Button.Labels.Etkinlik) {
          if (button.clicker.member.roles.cache.get(marcus.Rol.Etkinlik)) {
              await button.clicker.member.roles.remove(marcus.Rol.Etkinlik)
              await button.reply.think(true);
              await button.reply.edit(`Başarılı <@&${marcus.Rol.Etkinlik}> adlı rol üzerinizden alındı!`)
          } else {
              await button.clicker.member.roles.add(marcus.Rol.Etkinlik)
              await button.reply.think(true);
              await button.reply.edit(`Başarılı <@&${marcus.Rol.Etkinlik}> adlı rol üzerinize verildi artık çekilişlerden bildirim alacaksınız!`)
          }
  
      }
  
  });






// İlişki Rolleri

client.on("message", async(message) => {
    let args = message.content.trim().split(" ")
    if(args[0] !== marcus.Bot.Prefix + marcus.Bot.Command ) { return false } else {
  
      let option_1 = new MessageMenuOption()
      .setLabel(marcus.Button.Labels.LoversL)
      .setValue("1")
      .setDescription("Sevgilisi olanlar için")
      .setDefault()
      .setEmoji(marcus.Button.Emoji.LoversE)
  
      let option_2 = new MessageMenuOption()
        .setLabel(marcus.Button.Labels.AloneL)
        .setValue("2")
        .setDescription("Yalnız olanlar için")
        .setDefault()
        .setEmoji(marcus.Button.Emoji.AloneE) 
  
      let option_3 = new MessageMenuOption()
        .setLabel(marcus.Button.Labels.NoLoveL)
        .setValue("3")
        .setDescription("Sevgili yapmayanlar için")
        .setDefault()
        .setEmoji(marcus.Button.Emoji.NoLoveE) 
  
  let option_4 = new MessageMenuOption()
        .setLabel("Rol İstemiyorum")
        .setValue("56")
        .setDescription("Rollerini Alır")
        .setDefault()
        .setEmoji("🗑️") 
  
  
      let selection = new MessageMenu()
      .setID("selector")
  
      .setPlaceholder("İlişki Rolleri")
      .addOption(option_1)
      .addOption(option_2)
      .addOption(option_3)
      .addOption(option_4)
  
      
      let msg = await message.channel.send("İlişki Rolleri", selection); 
  
      
  
      client.on("clickMenu", async (menu) => {
        if(menu.message.id === msg.id) {
          menuselect(menu)
        }
      })
    };
  
  async function menuselect(menu) {
    switch(menu.values[0]) {
        case "1":
            menu.reply.send("Rollerin düzenlendi!", true)
           await menu.clicker.member.roles.add(marcus.Rol.Lovers)
           await menu.clicker.member.roles.remove(marcus.Rol.Alone)
           await menu.clicker.member.roles.remove(marcus.Rol.NoLove)
  
          break;
            
        case "2":
            menu.reply.send("Rollerin düzenlendi!", true)
           await menu.clicker.member.roles.add(marcus.Rol.Alone)
           await menu.clicker.member.roles.remove(marcus.Rol.Lovers)
           await menu.clicker.member.roles.remove(marcus.Rol.NoLove)
  
          break;
        case "3":
            menu.reply.send("Rollerin düzenlendi!", true)
           await menu.clicker.member.roles.add(marcus.Rol.NoLove)
           await menu.clicker.member.roles.remove(marcus.Rol.Lovers)
           await menu.clicker.member.roles.remove(marcus.Rol.Alone)
  
          break;
  
        case "4":
            menu.reply.send("Rollerin düzenlendi!", true)
           await menu.clicker.member.roles.remove(marcus.Rol.Lovers)
           await menu.clicker.member.roles.remove(marcus.Rol.Alone)
           await menu.clicker.member.roles.remove(marcus.Rol.NoLove)
  
          break;
        default:
            
          break;
    }
  }
  
  });



////////////////////////////////////////////////////////////////////////////////////////////////


client.on("message", async(message) => {
    let args = message.content.trim().split(" ")
    if(args[0] !== marcus.Bot.Prefix + marcus.Bot.Command ) { return false } else {
  
      let option_5 = new MessageMenuOption()
      .setLabel(marcus.Button.Labels.Mavi)
      .setValue("5")
      .setDescription("Mavi Renk için rol.")
      .setDefault()
      .setEmoji(marcus.Button.Emoji.Mavi) //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz
  
      let option_6 = new MessageMenuOption()
        .setLabel(marcus.Button.Labels.Yeşil)
        .setValue("6")
        .setDescription("Yeşil Renk için rol.")
        .setDefault()
        .setEmoji(marcus.Button.Emoji.Yeşil) //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz
  
      let option_7 = new MessageMenuOption()
        .setLabel(marcus.Button.Labels.Sari)
        .setValue("7")
        .setDescription("Sarı Renk için rol.")
        .setDefault()
        .setEmoji(marcus.Button.Emoji.Sari) //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz
  
      let option_8 = new MessageMenuOption()
        .setLabel(marcus.Button.Labels.Kirmizi)
        .setValue("8")
        .setDescription("Kırmızı Renk için rol.")
        .setDefault()
        .setEmoji(marcus.Button.Emoji.Kirmizi) //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz
  
      let option_9 = new MessageMenuOption()
        .setLabel(marcus.Button.Labels.Turuncu)
        .setValue("9")
        .setDescription("Turuncu Renk için rol.")
        .setDefault()
        .setEmoji(marcus.Button.Emoji.Turuncu) //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz
  
      let option_10 = new MessageMenuOption()
        .setLabel(marcus.Button.Labels.Mor)
        .setValue("10")
        .setDescription("Mor Renk için rol.")
        .setDefault()
        .setEmoji(marcus.Button.Emoji.Mor) //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz

      let option_11 = new MessageMenuOption()
        .setLabel(marcus.Button.Labels.Pembe)
        .setValue("11")
        .setDescription("Pembe Renk için rol.")
        .setDefault()
        .setEmoji(marcus.Button.Emoji.Pembe) //  emoji ekleyiniz burçların yanına yaptığım gibi id olarak giriniz
  
  let option_12 = new MessageMenuOption()
        .setLabel("Rol İstemiyorum")
        .setValue("12")
        .setDescription("Rollerini alır")
        .setDefault()
        .setEmoji("🗑️") //  you can add emoji next to the label
  
      let selection = new MessageMenu()
      .setID("selector")
  
      .setPlaceholder("Renk Rolleri")
      .addOption(option_5)
      .addOption(option_6)
      .addOption(option_7)
      .addOption(option_8)
      .addOption(option_9)
      .addOption(option_10)
      .addOption(option_11)
      .addOption(option_12)
  
  
      
      let msg = await message.channel.send("Renk Rolleri", selection); 
  
      client.on("clickMenu", async (menu) => {
        if(menu.message.id === msg.id) {
          menuselect(menu)
        }
      })
    };
  
  async function menuselect(menu) {
    switch(menu.values[0]) {
  case "5":
            menu.reply.send("Rollerin düzenlendi!", true)
          await menu.clicker.member.roles.add(marcus.Rol.Mavi)
  await menu.clicker.member.roles.remove([marcus.Rol.Yeşil, marcus.Rol.Sari, marcus.Rol.Kirmizi, marcus.Rol.Turuncu, marcus.Rol.Mor, marcus.Rol.Pembe])
          break;
            
  case "6":
            menu.reply.send("Rollerin düzenlendi!", true)
          await menu.clicker.member.roles.add(marcus.Rol.Yeşil)
  await menu.clicker.member.roles.remove([marcus.Rol.Mavi, marcus.Rol.Sari, marcus.Rol.Kirmizi, marcus.Rol.Turuncu, marcus.Rol.Mor, marcus.Rol.Pembe])
          break;
  
  case "7":
            menu.reply.send("Rollerin düzenlendi!", true)
           await menu.clicker.member.roles.add(marcus.Rol.Sari)
  await menu.clicker.member.roles.remove([marcus.Rol.Mavi, marcus.Rol.Yeşil, marcus.Rol.Kirmizi, marcus.Rol.Turuncu, marcus.Rol.Mor, marcus.Rol.Pembe])
          break;
  
  case "8":
            menu.reply.send("Rollerin düzenlendi!", true)
           await menu.clicker.member.roles.add(marcus.Rol.Kirmizi)
  await menu.clicker.member.roles.remove([marcus.Rol.Mavi, marcus.Rol.Yeşil, marcus.Rol.Sari, marcus.Rol.Turuncu, marcus.Rol.Mor, marcus.Rol.Pembe])
          break;

  case "9":
            menu.reply.send("Rollerin düzenlendi!", true)
           await menu.clicker.member.roles.add(marcus.Rol.Turuncu)
  await menu.clicker.member.roles.remove([marcus.Rol.Mavi, marcus.Rol.Yeşil, marcus.Rol.Sari, marcus.Rol.Kirmizi, marcus.Rol.Mor, marcus.Rol.Pembe])
          break;


  case "10":
            menu.reply.send("Rollerin düzenlendi!", true)
           await menu.clicker.member.roles.add(marcus.Rol.Mor)
  await menu.clicker.member.roles.remove([marcus.Rol.Mavi, marcus.Rol.Yeşil, marcus.Rol.Sari, marcus.Rol.Kirmizi, marcus.Rol.Turuncu, marcus.Rol.Pembe])
          break;

  case "11":
            menu.reply.send("Rollerin düzenlendi!", true)
           await menu.clicker.member.roles.add(marcus.Rol.Pembe)
  await menu.clicker.member.roles.remove([marcus.Rol.Mavi, marcus.Rol.Yeşil, marcus.Rol.Sari, marcus.Rol.Kirmizi, marcus.Rol.Turuncu, marcus.Rol.Mor])
          break;
  
  case "12":
            menu.reply.send("Rollerin düzenlendi!", true)
  await menu.clicker.member.roles.remove([marcus.Rol.Mavi, marcus.Rol.Yeşil, marcus.Rol.Sari, marcus.Rol.Kirmizi, marcus.Rol.Turuncu, marcus.Rol.Mor, marcus.Rol.Pembe])
          break;
        default:
            
          break;
    }
  }
  
  });

  client.login(marcus.Bot.ClientToken).then(() => console.log("Giriş yapıldı")).catch(() => console.log("Girişi yapılamadı"));