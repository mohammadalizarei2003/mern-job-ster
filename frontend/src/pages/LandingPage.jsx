import { Link } from 'react-router-dom'
import authImage from '../assets/auth_image.svg'
import { LuArrowLeft, LuArrowRight, LuStar } from 'react-icons/lu'

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
        {Array(length = 12).fill().map((item) => {
          return <article className='w-full min-h-60 bg-base-200 rounded-xl border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 p-5 space-y-2 flex flex-col justify-between'>

            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="mask mask-squircle size-12">
                      <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
                    </div>
                  </div>
                  <span className='text-sm font-bold'>Company Name</span>
                </div>
              </div>

              <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-2'>
                  <LuStar className='size-4' />
                  <LuStar className='size-4' />
                  <LuStar className='size-4' />
                  <LuStar className='size-4' />
                  <LuStar className='size-4' />
                </div>
                <span className='flex text-xs p-2 bg-base-100 rounded-xl border border-primary/20'>Programming</span>
              </div>
            </div>



            <div>
              <p className='text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero voluptatibus eveniet ex consectetur magni veritatis, minima laborum voluptatem nihil.</p>

              <div className="flex items-center gap-2 mt-2">
                <span className='flex text-xs p-2 bg-base-100 rounded-xl border border-primary/20'># HTML</span>
                <span className='flex text-xs p-2 bg-base-100 rounded-xl border border-primary/20'># CSS</span>
                <span className='flex text-xs p-2 bg-base-100 rounded-xl border border-primary/20'># JavaScript</span>
                <span className='flex text-xs p-2 bg-base-100 rounded-xl border border-primary/20'># ...</span>
              </div>
            </div>


          </article>
        })}
        {/* <div className='col-span-3 flex items-center justify-center my-10'>
          <Link to='/jobs' className='btn btn-md btn-primary border-none outline-none shadow-none rounded-xl '>
            <span>Our Jobs</span>
            <LuArrowRight className='size-4' />
          </Link>
        </div> */}
      </div>

    </div>

  </section>
}

export default LandingPage