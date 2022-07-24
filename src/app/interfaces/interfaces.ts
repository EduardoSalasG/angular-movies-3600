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

export interface PeliculasResponse{
    ok:boolean,
    peliculas:Pelicula[]
}

export interface Pelicula{
    id?: number,
    name?: string,
    poster?: string,
    year?: number
}

export interface Usuario{
    name?: string,
    email?: string,
    password?: string
}

export interface userToken{
    ok:boolean,
    token: string
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

export interface GenerosResponse{
    ok:boolean,
    generos:Genero[]
}

export interface Genero{
    _id?:string,
    nombre?: string
}