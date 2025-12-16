import { BsArrowLeft, BsGithub, BsGoogle } from 'react-icons/bs'
import { FaUser, FaUserGraduate } from "react-icons/fa";

import authImage from '../assets/auth_image.svg'
import { Link } from 'react-router-dom'
import { CustomInput } from '../components'


const SignupPage = () => {
    return <section className="grid lg:grid-cols-2 md:lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 max-w-4xl w-full mx-auto bg-base-200 min-h-96 rounded-3xl border border-primary/20 shadow-2xl hover:border-primary/40 p-5 transition-all duration-300">

        <div className='col-span-1  w-full h-full lg:flex md:lg:flex md:flex sm:flex hidden items-center justify-center'>
            <img src={authImage} className='size-80' alt="auth-image" />
        </div>

        <div className='w-full space-y-5'>
            <h2 className='text-2xl font-bold'>Signup</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className='grid grid-cols-2 gap-4'>
                {/*  */}
                <div className="col-span-2 grid grid-cols-2 gap-2 items-center">
                    <div className='w-full h-24 rounded-xl border border-primary/20 bg-base-100 flex flex-col items-center justify-center gap-4'>
                        <FaUser className='size-8' />
                        <span className='text-sm font-bold'>Freelancer</span>
                    </div>
                    <div className='w-full h-24 rounded-xl border border-primary/20 bg-base-100 flex flex-col items-center justify-center gap-4'>
                        <FaUserGraduate className='size-8' />
                        <span className='text-sm font-bold'>Recruiter</span>
                    </div>
                </div>
                <CustomInput />
                <CustomInput />
                <CustomInput className="col-span-2" />
                <CustomInput />
                <CustomInput />
                <div className='col-span-2 flex items-center justify-between gap-5 my-2'>
                    <Link to='/auth' className='link link-primary text-sm'>Signin</Link>
                </div>
                <button className='btn col-span-2 btn-primary btn-md border-none shadow-none rounded-xl uppercase text-sm'>signin</button>
            </div>

            <div className="divider">Our</div>
            <div className='grid grid-cols-2 gap-2'>
                <button className='btn btn-outline btn-primary rounded-xl btn-lg text-sm'>
                    <BsGoogle className='size-4' />
                    <span>Goggle</span>
                </button>
                <button className='btn btn-outline btn-primary rounded-xl btn-lg text-sm'>
                    <BsGithub className='size-4' />
                    <span>Github</span>
                </button>
            </div>

            <div className='text-center mt-10'>
                <Link to='/' className='text-sm link link-primary flex items-center justify-center gap-2'>
                    <BsArrowLeft className='size-4' />
                    <span>Back to landing</span>
                </Link>
            </div>

        </div>

    </section>
}

export default SignupPage