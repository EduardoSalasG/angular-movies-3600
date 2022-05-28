export interface Movie {
    Title:string,
    Year:number,
    imbdID:string,
    Type:string,
    Poster:string
}

export interface ApiResult {
    Search:Movie[],
    totalResults:number,
    Response:boolean
}

export interface Pelicula{
    id?: number,
    name?: string,
    poster?: string,
    year?: number
}

export interface Usuario{
    email?: string,
    password?: string
}

export interface userToken{
    expiration:Date,
    token: string,
    status:string,
    errorMsj:string
}

export interface RutCreacion{
    rut?:string,
    nombre?:string,
    nombreActividad?:string,
    codigoActividad?:number,
    afectoIVA?:boolean,
    fechaInicioAct?:Date; 
}

export interface RutResponse{
    id?: number,
    rut?:string,
    nombre?:string,
    nombreActividad?:string,
    codigoActividad?:number,
    afectoIVA?:boolean,
    fechaInicioAct?:Date; 
}


export interface RutDTO{
    rut?:string
}