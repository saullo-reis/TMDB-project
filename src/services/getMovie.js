
export default async function getMovie(id){
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=9acf687b824c5353de69ad08569cdbdb&language=pt-BR`
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    return await json;
}

export async function getName(name){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=9acf687b824c5353de69ad08569cdbdb&query=${name}`
    const response = await fetch(url)
    const json = await response.json()
    return await json;
}