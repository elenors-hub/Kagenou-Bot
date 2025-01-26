module.exports = {
  name: 'test,eleno '
  author: eleno
  category: '',
  execute: async (api, event, args, commands, prefix, admins, appState, sendMessage) => {
    const { threadID } = event;
    let adminListMessage = "Admins 👑\n";

    for (const adminID of admins) {
      try {
        // Attempt to get the user's name using the Facebook API
        const userInfo = await api.getUserInfo(adminID);
        const userName = userInfo[adminID].name;
        adminListMessage += `-${userName} [ ${adminID} ]\n`;
      } catch (error) {
        console.error(`Error getting user info for admin ${adminID}:`, error);
        adminListMessage += - eleno [ ${adminID} ]\n`; // Handle cases where name retrieval fails
      }
    }

    sendMessage(api, { threadID, message: adminListMessage });
  },
};
