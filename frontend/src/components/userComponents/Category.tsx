import CorrectIcon from "@/assets/CorrectIcon";
import axios from "axios";
import useSWR from "swr";

const Category = ({ onChange, selectedCategory }: any) => {
  const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };
  const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

  const { data, error, isLoading } = useSWR(
    `${backendPoint}/mainCategory`,
    fetcher
  );

  const handleAllClick = () => {
    onChange("");
  };

  const handleCategoryClick = (name: string) => {
    onChange(name); 
  };
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2 w-fit py-4">
      <p className="font-bold">Ангилал </p>
      <hr />
      <div className="flex items-start flex-col gap-2">
        <button
          className={selectedCategory === "" ? "hover:text-[#FB2E86] font-bold" : "hover:text-[#FB2E86]"}
          onClick={handleAllClick}
        >
          All
        </button>
        {data &&
          data.map((el: any) => (
            <div className="flex w-[170px] items-center gap-2" key={el.id}>
              {selectedCategory === el.mainCategoryName && (
                <div>
                  <CorrectIcon />
                </div>
              )}
              <button
                onClick={() => handleCategoryClick(el.mainCategoryName)}
                className={
                  selectedCategory === el.mainCategoryName
                    ? "hover:text-[#FB2E86] font-bold"
                    : "hover:text-[#FB2E86]"
                }
              >
                {el.mainCategoryName}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
