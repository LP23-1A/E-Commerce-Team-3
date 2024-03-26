'use client'
import { UserFooter } from '@/components/userComponents/Footer'
import UserNavbar from '@/components/userComponents/Navbar'
import { useBasket } from '@/components/userComponents/OrderContext'
import React from 'react'

const Basket = () => {
    const {basket} = useBasket()
    return (
        <div>
            <UserNavbar/>
            <div>
                <table className="mx-auto">
                    <thead>
                        <tr className='flex w-[1173px] justify-between'>
                            <th>Бүтээгдэхүүн</th>
                            <th>Үнэ</th>
                            <th>Тоо ширхэг</th>
                            <th>Нийт</th>
                            <th>Нийт төлөх</th>

                        </tr>
                    </thead>
                    <tbody>
                        {basket && basket.map((e) => (
                            <tr className='flex w-[1173px] justify-between' key={e.productId}>
                                <td>
                                    <div className='flex'>
                                        <div className='w-[81px] h-[81px]'>
                                            <img className='min-w-[81px] min-h-[81px]' src={e?.images[1]} alt="" />
                                        </div>
                                        <p>{e?.productName}</p>
                                    </div>
                                </td>
                                <td>
                                    <p>{e.price}</p>
                                </td>
                                <td>
                                    <p>{e.count}</p>
                                </td>
                                <td>
                                    <p>{e.count * e.price}</p>
                                </td>
                             
                            </tr>
                        ))}
                           <td>
                                    <div>
                                        <div>
                                            <p>Нийлбэр:</p>
                                            <p>totalPrices</p>
                                        </div>
                                        <hr />
                                        <div>
                                            <p>Төлөх дүн:</p>
                                            <p>totalPrice</p>
                                        </div>
                                        <button className='text-white bg-[green]'>
                                        Худалдан авах   
                                        </button>
                                    </div>
                                </td>
                    </tbody>
                </table>
            </div>
            <UserFooter/>
        </div>
    )
}

export default Basket
