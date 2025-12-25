class validUser {
  constructor(
    public userName: string,
    public email: string,
    public password: string
  ) {}
}

class EmailValidator {
  validate(email: string) {
    return email.includes("@");
  }
}

class PasswordEncryptor {
  encrypt(password: string) {
    return "encrypted-" + password;
  }
}

class DBService {
  saveUser(user: validUser) {
    console.log(user.userName, "db ye kaydedildi");
  }
}

class EmailService {
  sendWelcomeMail(email: string) {
    console.log(email, "adresine e-posta gönderildi");
  }
}

class ActivityLogger {
  log(userName: string, activity: string) {
    console.log(userName, "için log:", activity);
  }
}

class UserService {
  constructor(
    private emailValidator: EmailValidator,
    private passEncryptor: PasswordEncryptor,
    private databaseService: DBService,
    private emailService: EmailService,
    private activityLogger: ActivityLogger
  ) {}
  register(user: validUser) {
    if (this.emailValidator.validate(user.email)) {
      user.password = this.passEncryptor.encrypt(user.password);
      this.databaseService.saveUser(user);
      this.emailService.sendWelcomeMail(user.email);
      this.activityLogger.log(user.userName, " kullanıcı kaydı tamamlandı");
    }
  }
}


const emailValidator = new EmailValidator();
const passEncryptor = new PasswordEncryptor();
const dbService = new DBService();
const emailService = new EmailService();
const logger = new ActivityLogger();

const userService = new UserService(emailValidator,
                                    passEncryptor,
                                    dbService,
                                    emailService,
                                    logger);

const user  = new validUser("user1","user@example.com","412");
userService.register(user);
 