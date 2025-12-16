import { Link } from 'react-router-dom'
import { LuMoon, LuSun, LuUser } from 'react-icons/lu'

const RootHeader = () => {
    return <header className="sticky top-2 left-0 right-0 w-full px-4 py-2 bg-base-200/80 shadow-lg rounded-xl border border-primary/20 backdrop-blur-lg mb-5 flex items-center justify-between gap-4 z-10">
        <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold"><span className="text-primary">Job</span> Ster</h1>
            <ul className="p-0 menu menu-horizontal bg-none rounded-box space-x-2">
                <li className="">
                    <Link to='/jobs' className='bg-none rounded-xl hover:bg-base-100 hover:text-primary transition-all duration-300'>Jobs</Link>
                </li>
                <li className="">
                    <Link to='/about-us' className='bg-none rounded-xl hover:bg-base-100 hover:text-primary transition-all duration-300'>About Us</Link>
                </li>
            </ul>
        </div>
        <div className='flex items-center justify-center gap-2'>
            <button className='btn btn-sm btn-circle btn-outline border-0 outline-none bg-base-100 focus-within:outline-none shadow-none'>
                <LuSun className='size-4' />
            </button>
            <Link to='/auth' className='btn btn-sm btn-circle btn-outline border-0 outline-none bg-base-100 focus-within:outline-none shadow-none'>
                <LuUser className='size-4' />
            </Link>
        </div>
    </header>
}

export default RootHeader