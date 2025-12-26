class reportSender{


    constructor(private sender:sender){}

    send(){
       // const mail = new mailSender();
        this.sender.send("bilgi...","a@b.com");
    }

}

interface sender{
    send(content:string, to:string):void;
}

class mailSender implements sender{
    send(content:string, email:string){
        console.log(content, email, ' adresine mail gönderildi');
    }
}

class whatsAppSender implements sender{
    send(content: string, to: string): void {
       console.log("WhatsApp ile gönderildi");
    }
}

const whatsSender = new whatsAppSender();
const mSender = new mailSender();

const rptSender = new reportSender(whatsSender);
rptSender.send();

