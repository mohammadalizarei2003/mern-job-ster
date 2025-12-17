import { Link } from 'react-router-dom'
import authImage from '../../assets/auth_image.svg'
import { LuArrowLeft, LuArrowRight, LuStar } from 'react-icons/lu'
import { JobItem } from '../../components'

const LandingPage = () => {
  return <section className='space-y-20'>
    {/* Hero */}
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 max-w-4xl w-full mx-auto my-20 min-h-96 gap-20'>
      <div className='flex items-center justify-center'>
        <img src={authImage} alt="image not found" className='w-full h-full' />
      </div>
      <div className='space-y-10'>
        <h1 className='text-4xl font-bold text-center text-primary'>Lorem ipsum dolor sit amet.</h1>
        <p className='text-sm text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod sapiente dolores eveniet inventore blanditiis sint dicta! Dolorem in, nisi iure tempore corrupti repellat itaque cupiditate omnis beatae natus. Nobis, totam.</p>
        <div className='flex items-center justify-center'>
          <Link to='/jobs' className='btn btn-md btn-primary border-none outline-none shadow-none rounded-xl '>
            <span>Our Jobs</span>
            <LuArrowRight className='size-4' />
          </Link>
        </div>
      </div>
    </div>

    <div className='my-40'>
      <h1 className='text-3xl font-bold'>Latest Jobs</h1>
      <div className="divider"></div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
        {/*  */}
        {Array(length = 12).fill().map((item, index) => {
          return <JobItem key={index} />
        })}
        <div className='lg:col-span-3 md:col-span-2 col-span-1 flex items-center justify-center my-10'>
          <Link to='/jobs' className='btn btn-md btn-primary border-none outline-none shadow-none rounded-xl '>
            <span>Our Jobs</span>
            <LuArrowRight className='size-4' />
          </Link>
        </div>
      </div>

    </div>

  </section>
}

export default LandingPage