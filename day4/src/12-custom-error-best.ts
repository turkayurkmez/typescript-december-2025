class AppError extends Error{
    constructor(
        message:string,
        public statusCode: number = 500,
        public code: string = "INTERNAL_ERROR",
        public isOperational: boolean = true //Operasyonel hata mı?
    ){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this,this.constructor);

    }


}

//2. Validator:
class ValidationError extends AppError{
    constructor(message:string,
                public field:string,
                public value?:string
    ){
        super(message,400,"VALIDATION_ERROR")
    }
}

//
class NotFoundError extends AppError{
    constructor(resource: string, public id?: string){
        super(`${resource}`);
    }
}

