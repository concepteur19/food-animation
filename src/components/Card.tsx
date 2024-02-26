import React from 'react'

type CardProps = {
    price: string,
    foodName: string,
    foodDescription: string,
    color: string
}

const FoodCard = ({price, foodName, foodDescription, color}: CardProps) => {
  return (
    <div className='text-left mt-[212px]'>
        <p className={`font-semibold  text-[44px] text-[${color}]`}> {price} </p>
        <p className=' font-medium text-[36px] w-[367px] mb-3'> {foodName} </p>
        <p className=' text-sm w-[347px] mb-7'> {foodDescription} </p>
        <button className={`w-[143px] text-white font-bold text-[13px] py-[14px] rounded-[69px] bg-[${color}] shadow-[0_20px_40px_rgba(244, 226, 209, 1)] `} > ORDER NOW </button>
    </div>
  )
}

export default FoodCard