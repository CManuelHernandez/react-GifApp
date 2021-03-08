

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category) }&limit=15&api_key=myYm1gLb1sBnBjy7qH1IGYiyJk2dtIsP`
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
                url: img.images?.downsized_medium.url // ? Asegurarse de que trae imagenes 
        }
    })
    
    return gifs;
}