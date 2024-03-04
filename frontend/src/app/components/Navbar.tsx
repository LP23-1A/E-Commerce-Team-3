 import logo from '../../../public/image/Vector.png'
 import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
 import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar =()=>{
    return(
        <div className=' flex justify-between items-center px-10 py-[10px] bg-black'>
        <img className='w-[34px] h-[34px]' src={logo.src}/>
        <div className='flex gap-6'>
            <NotificationsIcon sx={{color:'white'}}/>
            <div className='flex'>
                <PersonOutlineIcon sx={{color:'white'}}/>
                <p className="text-white">Username</p>
            </div>
        </div>
        </div>
    )
}
export default Navbar