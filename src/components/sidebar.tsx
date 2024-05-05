import ICategories from "models/categories"
import { categoriesOne, categoriesTwo } from "utils/data"
import { ArrowRight } from "utils/icon"

export default function Sidebar() {
    return <>
        <div className="lg:block md:hidden">
            <h5 className="h-[40px] text-lg font-[600] my-4">Top Categories</h5>
            {categoriesOne.map((item: ICategories) =>
                <div className="flex flex-row justify-between my-3 text-[#4B566B]">
                    <div className="flex flex-row">
                        <div className="mx-1 w-[20px] h-[20px]">
                            {item?.icon}
                        </div>
                        {item?.name}
                    </div>
                    <div className="mx-1 w-[20px] h-[20px] text-[#4B566B]">
                        <ArrowRight />
                    </div>
                </div>
            )}

            <h5 className="h-[40px] text-lg font-[600] my-4">Top Categories</h5>
            {categoriesTwo.map((item: ICategories) =>
                <div className="flex flex-row justify-between my-3 text-[#4B566B]">
                    <div className="flex flex-row">
                        <div className="mx-1 w-[20px] h-[20px]">
                            {item?.icon}
                        </div>
                        {item?.name}
                    </div>
                    <div className="mx-1 w-[20px] h-[20px] text-[#4B566B]">
                        <ArrowRight />
                    </div>
                </div>
            )}

        </div>
    </>
}