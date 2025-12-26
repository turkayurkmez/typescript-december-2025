//Utility types kullanımı:
// Kötü örnek: Gereksiz karmaşıklık

/*
   CreateUserDto, UpdateUserDto, UserResponseDto gibi farklı tipler oluştur:
 */
interface CreateUserDto{
    id:number;
    name:string;
    email?:string;
    password?:string;
}

interface UpdateUserDto{
    id:number;
    name?:string;
    email?:string;
    password?:string;
}

interface UserResponseDto{
    id:number;
    name:string;
    email?:string;
}

//İyi örnek: Ockham'ın usturası prensibine uygun
interface User{
    id:number;
    name:string;
    email?:string;
    password?:string;
}

type CreateUser = Pick<User,'name' | 'email' | 'password'>;
type UpdateUser = Partial<User>;
type UserResponse = Omit<User,'password'>;