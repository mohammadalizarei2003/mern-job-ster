import { BsArrowLeft, BsGithub, BsGoogle } from 'react-icons/bs'
import authImage from '../assets/auth_image.svg'
import { Link } from 'react-router-dom'


const SigninPage = () => {
    return <section className="max-w-3xl w-full p-5 bg-base-200 rounded-2xl shadow-2xl shadow-primary/20 border border-primary/20 min-h-96 grid lg:grid-cols-2 md:lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center gap-5">
        <div className="w-full h-full lg:flex md:md sm:flex items-center hidden justify-center">
            <img src={authImage} alt="" className='size-80 select-none' />
        </div>

        <div className='w-full h-full space-y-4 flex flex-col'>
            <h2 className='text-xl font-bold'>Signin</h2>
            <p className='text-left text-sm'>Lorem ipsum dolor sit amet.</p>

            <form className='grid gap-2'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email</legend>
                    <input type="email" className="input input-md border shadow-none w-full rounded-xl border-primary/20 focus:border-primary/40 bg-base-100 focus:outline-0 transition-all" placeholder="demo@gmail.com" />
                    {/* <p className="label">You can edit page title later on from settings</p> */}
                </fieldset>
                
                <fieldset className="fieldset">
                    <legend className="fieldset-legend flex items-center justify-between w-full">
                        <span>Password</span>
                        <Link to='/forgot-password' className='link link-primary'>Forgot password</Link>
                        </legend>
                    <input type="password" className="input input-md border shadow-none w-full rounded-xl border-primary/20 focus:border-primary/40 bg-base-100 focus:outline-0 transition-all" placeholder="*******" />
                    {/* <p className="label">You can edit page title later on from settings</p> */}
                </fieldset>

                <button className="btn btn-primary btn-md btn-block my-5 rounded-xl shadow-none border-0">Primary</button>
                <Link to='/signup' className='text-sm link link-primary'>
                    <span>Don't have an account ? Signup</span>
                </Link>
                
                <div className="divider">Our</div>
                <div className='grid grid-cols-2 gap-2'>
                    <button className='btn btn-outline rounded-xl outline-none border-primary/20'>
                        <BsGoogle className='size-4' />
                        <span>Goggle</span>
                    </button>
                    <button className='btn btn-outline rounded-xl outline-none border-primary/20'>
                        <BsGithub className='size-4' />
                        <span>Github</span>
                    </button>
                </div>
            </form>

            <Link to='/' className='flex items-center justify-center link link-primary text-sm mt-4 gap-2'>
                <BsArrowLeft className='size-4' />
                <span>Back to landing</span>
            </Link>

        </div>
    </section>
}

export default SigninPage