import UserContent from "./UserContent";

export default class UserFile  {
    public name : String;  
    constructor(content : UserContent)
    {
        this.name = content.name;
    }
}