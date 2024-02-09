export const getGifs = async(category) =>{
    //consulta http para traer imagenes
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Jk2xPrB1htoji88A8IlxIspITEVYSibR&q=valorant=${category}&limit=20`;
    //respuesta hhttp para mostrarla?
    const resp = await fetch(url);
    // ver la data como json por consola
    const {data = []} = await resp.json();

    //traer datos de la data 
    const gifs = data.map (img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url 
    }))
    return gifs;
}