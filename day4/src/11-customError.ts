class UserService {
  createUser(email: string, password: string): void {
    if (!email.includes("@")) {
      //throw "Email geçersiz";
      throw new Error("Email adresi geçersiz");
    }

    if (password.length < 6) {
      //throw "Zayıf parola";
      throw new Error("Zayıf parola");
    }

    const exists = this.checkUserIsExists(email);
    if (exists) {
      //throw "Kullanıcı zaten var";
      throw new Error("Kullanıcı zaten var");

    }

    console.log("Kullanıcı oluşturuldu");
  }
  checkUserIsExists(email: string) {
    return email === "test@example.com";
  }
}

const userService = new UserService();
userService.createUser("abc","1234");


