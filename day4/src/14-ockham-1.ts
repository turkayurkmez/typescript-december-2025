interface UserData{
    id:number | string | null | undefined;
    name:string | null;
    email?:string | null | undefined;
    age?:number | null | undefined;
}

type ProcessedUser={
    userId: UserData["id"];
    fullName: UserData["name"];
    contactEmail: UserData["email"];
    
}|null | undefined  ;

//İyi örnek: ockham'ın usturası prensibine uygun

interface User{
    id:string;
    name:string;
    email?:string;
    age?:number;

}