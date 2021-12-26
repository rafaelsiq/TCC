import UserContent from "../../global/UserFile/UserContent";
import UserFile from "../../global/UserFile/UserFile";

export default class Streamer extends UserFile {
    public login : Boolean;
    constructor(content : UserContent)
    {    
        super(content)
        this.login = content.login;
     }
}