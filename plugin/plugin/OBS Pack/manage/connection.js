//set up functions to OBS Pack

const obs = require("../service/obs-connect");

obs.on('SwitchScenes', data => {
    console.log(`New Active Scene: ${data.sceneName}`);
});

obs.on('error', err => {
    console.error('socket error:', err);
});
obs.send('StartRecording')
console.log(obs.send('GetRecordingStatus'))

obs.on('SwitchScenes', data => {
    client.send(`${oscOutPrefix}${data.sceneName}${oscOutSuffix}`, (err) => {  //Takes OBS Scene Name and Sends it Out as OSC String (Along with Prefix and Suffix)
        if (err) console.error(err);
      });
    })

