


const OrderHistory = ({ data }: any) => {
  console.log(data)
  return (
    <div className="bg-white w-[1170px] ">
      <p className="text-[20px] font-[700] p-6  ">Захиалга</p>
      <div className="">
        <div className="flex bg-[#F7F7F8] p-4 justify-around">
          <p>Захиалгын ID дугаар</p>
          <p className="w-[250px]">Үйлчлүүлэгч</p>
          <p>Огноо</p>
          <p>Цаг</p>
          <p>Төлбөр</p>
          <p>Статус</p>
          <p>Дэлгэрэнгүй</p>
        </div>
      {data && data.map((e) => (
        <div className="flex justify-around p-4  ">       
          <p className="">#{e?.orderNumber}</p> 
        <div className="w-[250px] ml-[70px]">
          <p className="text-black">{e?.userId?.username}</p>
          <p className="text-black">{e?.userId?.email}</p>
          </div>
          <div>
            <p>2023-01-09</p>
          </div>
          <p>10:58</p>
          <p>{e?.amountPaid}</p>
          <p>{e?.status}</p>
          <p>{'>'}</p>
        </div>

      ))}
      </div>
 
    </div>
  )
}

export default OrderHistory
