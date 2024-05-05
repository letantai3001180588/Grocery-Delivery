import ICategories from "models/categories"
import IService from "models/service"
import {
    BreakfastIcon, CannedFoodIcon, CoffeeIcon, DailyIcon,
    DeliveryIcon, FrozenIcon, FruitsIcon,
    OrganicIcon, PaymentIcon, SauceIcon,
    SavingIcon, TimeIcon, VegetablesIcon
} from "utils/icon"

const categoriesOne: ICategories[] = [
    {
        name: "Dariry & Eggs",
        icon: <DailyIcon />
    },
    {
        name: "Breakfast",
        icon: <BreakfastIcon />
    },
    {
        name: "Frozen",
        icon: <FrozenIcon />
    },
    {
        name: "Vegetables",
        icon: <VegetablesIcon />
    },
    {
        name: "Fruits & Vegetables",
        icon: <FruitsIcon />
    },
]

const categoriesTwo: ICategories[] = [
    {
        name: "Organic",
        icon: <OrganicIcon />
    },
    {
        name: "Canned Food",
        icon: <CannedFoodIcon />
    },
    {
        name: "Coffee & Snacks",
        icon: <CoffeeIcon />
    },
    {
        name: "Sauces & Jems",
        icon: <SauceIcon />
    },
]

const service: IService[] = [
    {
        name: "Fast Delivery",
        description: "Start from $10",
        icon: <DeliveryIcon />
    },
    {
        name: "Money Guarantee",
        description: "7 Days Back",
        icon: <SavingIcon />
    },
    {
        name: "365 Days",
        description: "For free return",
        icon: <TimeIcon />
    },
    {
        name: "Payment",
        description: "Secure system",
        icon: <PaymentIcon />
    }
]
export {
    categoriesOne,
    categoriesTwo,
    service
}