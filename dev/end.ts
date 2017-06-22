class End {

    private div:HTMLElement;
    private h: HTMLElement;
    private t: string;

    constructor(){
        this.div = document.createElement("end");
        document.body.appendChild(this.div);
        
        var h = document.createElement("H1");
        var t = document.createTextNode("Je hebt de snelle vis te pakken gekregen!");
        h.appendChild(t);
        document.body.appendChild(h);
    }
}