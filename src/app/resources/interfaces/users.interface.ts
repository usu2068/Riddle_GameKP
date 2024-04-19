export interface User {
    id: number,
    user: string,
    email: string
}

//DEBERIA SOLO USAR UNO SOLO?
export interface CreateUser {
    id: number,
    user: string,
    email: string
}

export interface LoginUser {
    user: string,
}

