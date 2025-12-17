import { LuStar } from "react-icons/lu"

const JobItem = () => {
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
}

export default JobItem