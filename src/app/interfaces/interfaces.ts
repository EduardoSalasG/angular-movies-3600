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
    id: number,
    name: string,
    poster: string,
    year: number
}