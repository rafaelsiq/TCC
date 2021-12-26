import UserContent from '../UserFile/UserFile';
import FillerContent from './FillerContent'

export class FillerFile{
    public serial: UserContent[];
    public parallel: UserContent[];
    public terminal: UserContent[];
    public content  : FillerContent;
    public data;

    constructor(content : FillerContent){
        this.content = content;
        this.serial = content.serial;
        this.parallel = content.parallel;
        this.terminal = content.terminal;
        this.data = (content.serial.length >= 1) ? content.serial.pop() : 
                        (content.terminal.length  >= 1) ? content.terminal.pop() : 
                        (content.parallel.length  >= 1) ? content.parallel.pop(): false;
    }
}
 