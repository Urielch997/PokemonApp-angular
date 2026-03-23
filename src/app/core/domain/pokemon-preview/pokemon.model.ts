export interface Pokemon{
    count:number,
    next:string,
    results:Results[]
}

export interface Results{
    name:string,
    url:string,
    id:number,
    image:string
}