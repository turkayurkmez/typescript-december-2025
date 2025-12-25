class User{
    constructor(
        public name:string,
        public email:string,
        public password:string        
    ){}

    saveToDatabase(){
        console.log(this.name,'db ye kaydedildi');
    }

    sendWelcomeEmail(){
        console.log(this.email,'eposta gönderildi');

    }

    validateEmail(){
          return this.email.includes('@');

    }

    register(){
        console.log(this.name, 'kaydoldu');
    }

    logActivity(activity:string){
        console.log(this.name,'için etkinlik kaydı:',activity);

    }

    encryptPassword(){
        console.log(this.name,'parolası şifrelendi');

    }
}

