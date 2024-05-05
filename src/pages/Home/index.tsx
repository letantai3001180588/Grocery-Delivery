
import Navbar from "components/navbar";
import Slide from "components/slide";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Sidebar from "components/sidebar";
import { service } from "../../utils/data";
import IService from "models/service";
import { useState } from "react";
import Slider from 'react-slick'
import { Button, Rating, Typography } from "@mui/material";

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)"
}));

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
};

export default function Home() {
    return (
        <div>
            <Navbar />
            <Slide />

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

            <div className="grid grid-cols-4 gap-8 p-5">
                <Sidebar />
                <div className="col-span-3">
                    <h2>
                        Popular Products
                    </h2>
                    <div className="w-[100%] h-[420px] slider-container bg-red-300">
                        <div className="w-[100%] h-[420px]">
                            <Slider {...settings} className="w-[100%] h-[420px]">
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: number) =>
                                    <div className="h-[420px]">
                                        <div className="w-[100%] h-[100%] flex justify-center bg-blue-400">
                                            <div className="w-[90%] h-[100%] bg-green-400">
                                                <img className="w-[100%] h-[300px] bg-slate-600" />
                                                <div className="w-[100%] flex flex-row justify-between p-2">
                                                    <div className="">
                                                        <Typography component="legend">Disabled</Typography>
                                                        <Rating name="read-only" value={5} readOnly />
                                                        <p>
                                                            <span>$ 150.00</span>
                                                            &emsp;
                                                            <span>$ 200.00</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-end">
                                                        <Button variant="outlined" color="error">+</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
