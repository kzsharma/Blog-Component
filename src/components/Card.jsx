import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
function Card() {
    const [list, setList] = useState([]);
    const [isLoading,setIsLoading]= useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.aonflow.com/blog/wp-json/wp/v2/posts');
                setList(response.data.slice(0, 3));
                setIsLoading(false)
            } catch (error) {
            }
        };
        fetchData();
    }, []);
    return (
        <>{ isLoading?<div>loading</div>:<div className='temp'>
        <Splide
            options={{
                autoplay: true,
                type: 'loop',
                perPage: 1,
                lazyLoad: 'nearby',
                preloadPages: 1,
                interval:1000
            }}
            tag="section">
            {list.map((name, index) => {
                return (
                    <>
                        <SplideSlide key={index}>
                            <div>
                               
                                <a href={name.link}>
                                    <div className='card'>
                                        <div className='image'>
                                            <img alt='Blog-Image' src={name.uagb_featured_image_src.full[0]} />
                                        </div>
                                        <div className='card-data'>
                                            <p>
                                                {name.title.rendered}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </SplideSlide> </>
                )
            })}
        </Splide>
        </div>
         } </>
    )
}
export default Card