const handler = async (m, {conn}) => {
  m.reply(global.vendedores);
};
handler.command = /^(vendedores)$/i;
export default handler;

global.vendedores = `
🐧 𝗩𝗲𝗻𝗱𝗲𝗱𝗼𝗿𝗲𝘀 𝗢𝗳𝗶𝗰𝗶𝗮𝗹𝗲𝘀 🐧

𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗣𝗶𝗻𝗴𝘂𝗶 : https://www.instagram.com/cristoferrojasph
𝗡𝘂𝗺𝗯𝗲𝗿 : +51 926 933 818

𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗥𝗼𝗺𝗶𝗻𝗮 : https://www.instagram.com/romii_dl03
𝗡𝘂𝗺𝗯𝗲𝗿 : +51 978 420 752


𝗧𝗲 𝗘𝘀𝘁𝗮𝗳𝗮𝗿𝗼𝗻 𝗬 𝗘𝗹 𝗡𝘂𝗺𝗲𝗿𝗼 𝗢 𝗜𝗴 𝗡𝗼 𝗦𝗲 𝗘𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮 𝗔𝗰𝗮 ? 

𝗡𝗼 𝗡𝗼𝘀 𝗛𝗮𝗰𝗲𝗺𝗼𝘀 𝗖𝗮𝗿𝗴𝗼 𝗬𝗮 𝗤𝘂𝗲 𝗡𝗼 𝗘𝘀 𝗨𝗻 𝗩𝗲𝗻𝗱𝗲𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 , 𝗟𝗼 𝗦𝗶𝗲𝗻𝘁𝗼 :(
`;
