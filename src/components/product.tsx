import { Button, Rating } from "@mui/material";
import { AddCartIcon } from "utils/icon";

export default function Product({ img, name, handleOpen }: { img: string, name: string, handleOpen: any }) {
    return <>
        <div className="h-[420px]">
            <div className="w-[100%] h-[100%] flex justify-center p-1">
                <div className="w-[90%] h-[100%] rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                    <div className="relative w-[100%] h-[300px] bg-[#f6f9fc] rounded-t-lg flex items-center justify-center" >
                        <span className="absolute top-1 left-1 bg-[#D23F57] px-3 py-1 text-[10px] rounded-2xl text-white">7% off</span>
                        <img className="w-[250px] h-[250px]" src={img} alt="" />
                    </div>
                    <div className="w-[100%] flex flex-row justify-between p-5">
                        <div className="">
                            <p className="text-base font-[600] text-[#373F50]">{name}</p>
                            <Rating name="read-only" value={5} size="small" readOnly />
                            <p>
                                <span className="text-base font-[600] text-[#D23F57]">$ 150.00</span>
                                &emsp;
                                <del className="text-[14px] font-[600] text-[#7D879C]">$ 200.00</del>
                            </p>
                        </div>
                        <div className="flex items-end">
                            <Button variant="text" color="error" className="rounded-[50%] fill-[#D23F57]" onClick={handleOpen}>
                                <AddCartIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}