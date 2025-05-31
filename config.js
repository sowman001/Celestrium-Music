

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1378096858433323098", ""], 
  mongodbUri : "mongodb+srv://Celestrium:@akronY1598@celestrium.zugchpe.mongodb.net/?retryWrites=true&w=majority&appName=Celestrium",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Celestrium",
      password: "@akronY1598",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
