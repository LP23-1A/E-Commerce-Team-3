 export const SavedProduct = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <h3 className="text-[#151875] font-extrabold text-2xl ">Хадгалсан бүтээгдэхүүн</h3>
      <div className="">
        <div className="flex gap-10">
          <img src="" alt="" className="w-[270px] h-[270px]"/>
          <div className="flex flex-col">
            <div>
              <span className="text-[#151875] text-lg font-bold">usan ygaan sandal</span>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-[#151875]">750'000</p>
              <p className="text-[#5A5C7E] font-extrabold text-sm">(32)</p>
            </div>
            <p className="w-[590px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <div className="flex gap-4">
              <button className="w-[165px] h-[44px] text-white flex justify-center items-center bg-[#FB2E86] rounded-md">Hudaldan awah</button>
              <button className="w-[97px] h-[44px] text-[#535399] flex justify-center items-center bg-[#F6F5FF] rounded-md">Hasah</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
