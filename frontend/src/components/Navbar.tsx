 import logo from '../assets/Vectr.png'
 import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
 import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
 
const Navbar =()=>{
    return(
        <div className=' flex justify-between items-center px-10 py-[10px] bg-black'>
        <img className='w-[24px] h-[20px]' src={logo.src}/>
        <div className='flex gap-6'>
            <NotificationsNoneOutlinedIcon sx={{color:'white'}}/>
            <div className='flex gap-4 items-center'>
                <PersonOutlineIcon sx={{color:'white'}}/>
                <p className="text-white">Username</p>
            </div>
        </div>
        </div>
    )
}
export default Navbar