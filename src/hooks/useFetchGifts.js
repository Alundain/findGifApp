import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

// hook funcion que regresa algo
const useFetchGifts = (category) => {

    const [images, setImages]= useState([]);
    const [isLoading, setIsLoading]= useState(true);

    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect (() =>{
        getImages();
    },[])

    return {
        //en scrip6 cuando hay variables del mismo nombre solo dejamos 1 
        images:images, 
        isLoading
    }
}

export default useFetchGifts