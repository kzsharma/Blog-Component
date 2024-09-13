import { React, useState, useEffect } from 'react'
import axios from 'axios'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
function Blog() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.aonflow.com/blog/wp-json/wp/v2/posts');
                setList(response.data.slice(0,3));
                setIsLoading(false)
            } catch (error) {
            }
        };
        fetchData();
    }, []);
    return (
        <>{isLoading ? <>
            <Stack height={'100vh'}>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    breakpoints: { xl: 300 }
                }}
                >
                    <CircularProgress thickness={5} size={100} />
                </Box>
            </Stack></>
            : <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {list.map((name, index) => {
                        return (
                            <> 
                                <SwiperSlide key={index}>
                                <Link href={name.link}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                image={name.uagb_featured_image_src.full[0]}
                                                alt="Blog Image"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {name.title.rendered}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                    </Link>
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>
            </>
        }
        </>
    )
}

export default Blog