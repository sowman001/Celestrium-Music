

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1378096858433323098", ""], 
  mongodbUri : "mongodb+srv://akrony:akrony@cluster0.kmf8s84.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
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
      password: "akrony",
      host: "160.191.77.60",
      port:  3986,
      secure: false
    }
  ]
}
