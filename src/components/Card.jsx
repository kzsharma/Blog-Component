import React from 'react'
import Blog from '../assets/blogImage.png'
import useFetchData from "../hooks/useFetchData"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
function Card() {
    const list = useFetchData()
    const Array = list.slice(0, 3)
    return (
        <Splide
            options={{type: 'loop',perPage: 1}} tag="section">{Array.map((name, index) => (
                <SplideSlide key={index}><div>
                    <a href={name.link}>
                        <div className='card'>
                            <div className='image'>
                                <img src={name.uagb_featured_image_src.full[0]} />
                            </div>
                            <div className='card-data'>
                                <p>
                                    {name.title.rendered}
                                </p>
                            </div>
                        </div>
                    </a>
                </div></SplideSlide>
            ))}

        </Splide>
    )
}

export default Card