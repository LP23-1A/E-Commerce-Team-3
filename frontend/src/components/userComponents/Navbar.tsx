import EmailIcon from "@mui/icons-material/Email";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { parseCookies, setCookie } from "nookies";
import { useBasket } from "./OrderContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken'
import { useDraft } from "./DraftContext";

const UserNavbar = () => {
  const [user, setUser] = useState('')
  const router = useRouter();
  const { basket } = useBasket();
  const {draft} = useDraft()

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.token;
    const code:any = jwt.decode(token)

    if (code) {
      setUser(code?.payload.email);
    }
  }, []);

  const saveBasketToCookie = () => {
    setCookie(null, "basket", JSON.stringify(basket), {
      maxAge: 20 * 30,
      path: "/",
    });
  };

  const saveDraftToCookie = () => {
    setCookie(null, "draft", JSON.stringify(draft),{
      maxAge: 20 * 30,
      path: "/",
    } )
  }

  return (
    <div className="bg-[#7E37E0] text-white py-3 flex justify-between px-[340px]">
      <div className="flex gap-[15px]">
        <div className="flex  gap-2">
          <EmailIcon />
          <p>info@ecommerce.mn</p>
        </div>
        <div className="flex gap-2">
          <WifiCalling3Icon />
          <p>77123456</p>
        </div>
      </div>
      <div className="flex gap-[15px]">
        {user &&  user ? (
          <div className="flex gap-2 items-center">
            <p className="text-[16px] ">{user}</p>
            <PersonOutlineIcon />
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <button onClick={() => router.push('user/login')}>Нэвтрэх</button>
            <PersonOutlineIcon />
          </div>
        )}
        <div className=" relative">
          <button onClick={() => {router.push("/user/draft"); saveDraftToCookie() }}>
             <FavoriteBorderOutlinedIcon />
          </button>
          {draft.length > 0 && (
            <div className=" bg-[#EC42A2] rounded-[50%] w-[25px] h-[25px] flex justify-center  items-center absolute  top-[-10px] right-[-20px]">
              <p>{draft.length}</p>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => {
              router.push("/user/basket");
              saveBasketToCookie();
            }}
          >
            <ShoppingCartOutlinedIcon />
          </button>
          {basket.length > 0 && (
            <div className=" bg-[#EC42A2] rounded-[50%] w-[25px] h-[25px] flex justify-center  items-center absolute  top-[-10px] right-[-20px]">
              <p>{basket.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
