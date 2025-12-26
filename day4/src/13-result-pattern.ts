type Result<T, E = Error> =
  | { kind: "success"; data: T }
  | { kind: "error"; error: E };

class UserService {
  createUser(email: string, password: string): Result<{ email: string }> {
    if (!email.includes("@")) {
      return {
        kind: "error",
        error: new Error("Email geçersiz"),
      };
    }
    if (password.length < 6) {
      return {
        kind: "error",
        error: new Error("Şifre hatalı"),
      };
    }

    return {
      kind: "success",
      data: {
        email,
      },
    };
  }
}

const service = new UserService();
const result1 = service.createUser("test@example.com","123489");
if (result1.kind !== "success") {
    console.log('HATA', result1.error.message);
}

if (result1.kind === "success") {
    console.log('BAŞARILI',result1.data.email);
}
