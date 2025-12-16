import { BsArrowLeft, BsGithub, BsGoogle } from 'react-icons/bs'
import authImage from '../assets/auth_image.svg'
import { Link } from 'react-router-dom'
import { CustomInput } from '../components'


const SigninPage = () => {
    return <section className="grid lg:grid-cols-2 md:lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 max-w-4xl w-full mx-auto bg-base-200 min-h-96 rounded-3xl border border-primary/20 shadow-2xl hover:border-primary/40 p-5 transition-all duration-300">

        <div className='col-span-1  w-full h-full lg:flex md:lg:flex md:flex sm:flex hidden items-center justify-center'>
            <img src={authImage} className='size-80' alt="auth-image" />
        </div>
        <div className='w-full space-y-5'>
            <h2 className='text-2xl font-bold'>Signin</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className='grid grid-cols-1 gap-4'>
                {/*  */}
                <CustomInput />
                <CustomInput />
                <div className='flex items-center justify-between gap-5 my-2'>
                    <Link to='/auth/signup' className='link link-primary text-sm'>Signup</Link>
                    <Link to='/auth/forgot-password' className='link link-primary text-sm'>Forgot Password</Link>
                </div>
                <button className='btn btn-primary btn-md border-none shadow-none rounded-xl uppercase text-md'>signin</button>
            </div>

            <div className="divider">Our</div>
            <div className='grid grid-cols-2 gap-2'>
                <button className='btn btn-outline btn-primary rounded-xl btn-md text-sm'>
                    <BsGoogle className='size-4' />
                    <span>Goggle</span>
                </button>
                <button className='btn btn-outline btn-primary rounded-xl btn-md text-sm'>
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

export default SigninPage