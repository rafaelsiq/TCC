const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

class OBSConnect {
    constructor() {
        this.obsIp = "127.0.0.1"
        this.obsPort = 4444;
        this.obsPassword = "secret"
        this.Scenes = "tt"
    }
    Connection = () => {
        return obs.connect({
            address: this.obsIp + ':' + this.obsPort,
            password: this.obsPassword
        })
    }

    GetSceneList = async () => {
        return this.Connection()
            .then(() => {
                return obs.send('GetSceneList');
            })
            .then(data => {
                this.Scenes = (data.scenes.length);
                return this.Scenes
            })
            .catch(err => {
                console.log("-!- Make Sure OBS is Running and Websocket IP/Port/Password are Correct -!-");
            });
    }

    InsertItemScene = (item) => {
        this.Connection()
            .then(() => {
                return obs.send('GetVersion')
            }).then(data => {
                console.log(data + ' added')
            }).catch(err => {
                console.log(err)
            })

    }
}
module.exports = OBSConnect;