import EmailIcon from '@mui/icons-material/Email';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const UserNavbar = () => {
  return (
    <div className='bg-[#7E37E0] text-white py-3 flex justify-between px-[120px]'>
        <div className='flex gap-[15px]'>
        <div className='flex '>
            <EmailIcon/>
            <p>
            info@ecommerce.mn
            </p>
        </div>
        <div  className='flex'>
            <WifiCalling3Icon/>
            <p>77123456</p>
        </div>
        </div>
        <div className='flex gap-[15px]'>
            <div className='flex items-center'>
                <button>Нэвтрэх</button>
                <PersonOutlineIcon/>
            </div>
            <div className='flex items-center'>
                <button>Хадгалах</button>
                <FavoriteBorderOutlinedIcon/>
            </div>
            <button> <ShoppingCartOutlinedIcon/></button>
        </div>
   
    </div>
  )
}
export default UserNavbar
