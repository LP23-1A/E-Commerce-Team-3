import EmailIcon from '@mui/icons-material/Email';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useBasket } from './OrderContext';
import { useRouter } from 'next/navigation';

const UserNavbar = () => {
    const router = useRouter()
    const {basket}=useBasket()
    console.log(basket)

  return (
    <div className='bg-[#7E37E0] text-white py-3 flex justify-between px-[340px]'>
        <div className='flex gap-[15px]'>
 
        <div className='flex  gap-2'>
            <EmailIcon/>
            <p>
            info@ecommerce.mn
            </p>
        </div>
        <div  className='flex gap-2'>
            <WifiCalling3Icon/>
            <p>77123456</p>
        </div>
        </div>
        <div className='flex gap-[15px]'>
            <div className='flex gap-2 items-center'>
                <button>Нэвтрэх</button>
                <PersonOutlineIcon/>
            </div>
            <div className='flex gap-2 items-center'>
                <button>Хадгалах</button>
                <FavoriteBorderOutlinedIcon/>
            </div>
            <div className='relative'>
            <button onClick={() => router.push('/user/basket')}> <ShoppingCartOutlinedIcon/></button>
            {basket.length > 0 && (      <div className=' bg-[#EC42A2] rounded-[50%] w-[25px] h-[25px] flex justify-center  items-center absolute  top-[-10px] right-[-20px]'>
                <p>{basket.length}</p>
            </div>) }
      
            </div>
        </div>
   
    </div>
  )
}
export default UserNavbar
