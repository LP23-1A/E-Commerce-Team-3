import * as React from 'react';
import { useState } from 'react';
import FeedBack from './FeedBack';

const AdditionalInformation = ({ productName }: any) => {
    const [isShowDetail, setIsShowDetail] = useState(true)

    const handleClick = (isOptionShow:boolean) => setIsShowDetail(isOptionShow)

    return (
        <div className="px-[350px] py-20 bg-[#F9F8FE] flex flex-col">
            < div className="flex gap-6 py-6" >
                <p className="text-[#151875] font-bold text-[24px] hover:border-b border-[#151875] cursor-pointer" onClick={() => handleClick(true)}>Нэмэлт мэдээлэл</p>
                <p className="text-[#151875] font-bold text-[24px] cursor-pointer hover:border-b border-[#151875]" onClick={() => handleClick(false)}>Үнэлгээ</p>
            </div >

            {isShowDetail && <div className="bg-[#fff] flex flex-col gap-4 py-[48px] px-[24px] rounded-[4px]">
                <p className="text-[#151875] font-bold text-[22px]">Үзүүлэлтүүд</p>
                <div className="flex gap-6">
                    <div>
                        <p>Загвар & Зориулалт</p>
                        <p>Хүйс</p>
                        <p>Насны ангилал</p>
                        <p>Улирал</p>
                        <p>Материал</p>
                        <p>Ерөнхий өнгө</p>
                        <p>Зориулалт</p>
                    </div>
                    <div>
                        <p>{productName}</p>
                        <p>Эмэгтэй </p>
                        <p>Том хүн</p>
                        <p>Бүх улирал</p>
                        <p>Арьсан</p>
                        <p>Хул</p>
                        <p>Өдөр тутам</p>
                    </div>
                </div>
            </div>}
            {
                !isShowDetail && <FeedBack />
            }
        </div>
    )
}

export default AdditionalInformation


