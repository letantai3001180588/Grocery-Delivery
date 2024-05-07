
import Navbar from "components/navbar";
import Slide from "components/slide";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Sidebar from "components/sidebar";
import { service } from "../../utils/data";
import IService from "models/service";
import Slider from 'react-slick'
import { NextIcon, PrevIcon } from "utils/icon";
import Product from "components/product";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)"
}));


function SamplePrevArrow(props?: any) {
    const { onClick } = props;
    return (
        <div
            className="absolute w-7 h-7 left-6 z-10 top-[50%] bg-white rounded-md flex items-center justify-center"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            onClick={onClick}
        >
            <div className="w-5 h-5">
                <PrevIcon />
            </div>
        </div>
    );
}

function SampleNextArrow(props?: any) {
    const { onClick } = props;
    return (
        <div
            className="absolute w-7 h-7 right-6 top-[50%] bg-white rounded-md flex items-center justify-center"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            onClick={onClick}
        >
            <div className="w-5 h-5">
                <NextIcon />
            </div>
        </div>
    );
}

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ],
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
};

export default function Home() {
    return (
        <div>
            <Navbar />
            <Slide />
            <div className="xl:w-[80%] lg:w-[100%] mx-auto">
                <div className="w-[100%] p-10">
                    <Grid container spacing={2}>
                        {service.map((item: IService) =>
                            <Grid item sm={6} md={3} >
                                <Item className="flex flex-row">
                                    <div className="mx-5 w-10 h-10 text-black">
                                        {item?.icon}
                                    </div>
                                    <div className="text-left">
                                        <h2 className="text-[#2B3445] font-[700] text-base">{item?.name}</h2>
                                        <p className="text-[#7D879C]">{item?.description}</p>
                                    </div>
                                </Item>
                            </Grid>
                        )}
                    </Grid>
                </div>

                <div className="grid grid-cols-5 gap-8 p-5">
                    <Sidebar />
                    <div className="lg:col-span-4 md:col-span-5 sm:col-span-5 max-sm:col-span-5">
                        <div className="m-0">
                            <h2 className="text-2xl font-[700] mx-5">
                                Popular Products
                            </h2>
                            <p className="text-sm font-[400] m-5 mt-1">Best collection in 2024 for you!</p>
                            <div className="w-[100%] h-[420px] slider-container">
                                <div className="w-[100%] h-[420px]">
                                    <Slider {...settings} className="w-[100%] h-[420px]">
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: number) =>
                                            <Product img="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Flime.png&w=640&q=75" name="" />
                                        )}
                                    </Slider>
                                </div>
                            </div>
                        </div>

                        <div className="my-10">
                            <h2 className="text-2xl font-[700] mx-5">
                                Trend Products
                            </h2>
                            <p className="text-sm font-[400] m-5 mt-1">Best collection in 2024 for you!</p>
                            <div className="w-[100%] h-[420px] slider-container">
                                <div className="w-[100%] h-[420px]">
                                    <Slider {...settings} className="w-[100%] h-[420px]">
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: number) =>
                                            <Product img="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Flime.png&w=640&q=75" name="a" />
                                        )}
                                    </Slider>
                                </div>
                            </div>
                        </div>

                        <div className="my-10">
                            <h2 className="text-2xl font-[700] mx-5">
                                All Products
                            </h2>
                            <p className="text-sm font-[400] m-5 mt-1">Best collection in 2024 for you!</p>
                            <p className="text-sm font-[400] m-5 mt-1">&emsp;</p>
                            <div className="h-[3000px] mt-5 ml-5">
                                <Grid container spacing={3} columns={{ xs: 4, sm: 9, md: 12 }}>
                                    {Array.from(Array(12)).map((_, index) =>
                                        <Grid xs={2} sm={3} md={3}>
                                            <Product img="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Flime.png&w=640&q=75" name="product" />
                                        </Grid>
                                    )}
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    );
}
