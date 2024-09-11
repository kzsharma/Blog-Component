import { React, useState, useEffect } from 'react'
import axios from 'axios'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function Blog() {
    const [list, setList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.aonflow.com/blog/wp-json/wp/v2/posts');
                setList(response.data.slice(0, 3));
                setLoading(false);
            } catch (error) {
            }
        };
        fetchData();
    }, []);
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {list.map((name, index) => {
                return (
                    <>
                        <SwiperSlide key={index}>
                            <div>
                                {name.title.rendered}
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
                        </SwiperSlide>
                     </>
                )
            })}
        </Swiper>

    )

}

export default Blog