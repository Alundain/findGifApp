import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import useFetchGifts from '../hooks/useFetchGifts';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifts(category)
    console.log(images, isLoading);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            { ...image}
                        />
                    ))

                }
            </div>

        </>
    )
}
