import {FillerFile} from "../../global/FillerFile/FillerFile";
import login_streamer_terminal from "../../terminals/streamer/loginTerminal";


export default new FillerFile({
    name: "home_login",
    parallel:[],
    serial:[],
    terminal:[login_streamer_terminal] 
})
