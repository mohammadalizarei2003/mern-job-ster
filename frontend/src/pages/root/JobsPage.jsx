import { LuFilter } from "react-icons/lu"
import { CustomInput, JobItem } from "../../components"

const JobsPage = () => {
    return <section className="space-y-10">

        <div className="w-full min-h-40 bg-base-200 rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10 p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 items-center justify-center">
        <h1 className="lg:col-span-3 2:col-span-2 sm:col-span-2 col-span-1 text-3xl font-bold flex items-center gap-4 mb-5">
            <LuFilter className="size-8" />
            <span>Filter Jobs</span>
        </h1>
            <CustomInput />
            <CustomInput />
            <CustomInput />
            <button className="btn btn-md btn-primary shadow-none rounded-xl border-none outline-none self-end mb-2">
                Apply Filter
            </button>
        </div>

        <div className='my-20'>
            <h1 className='text-3xl font-bold'>Jobs</h1>
            <div className="divider"></div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                {/*  */}
                {Array(length = 12).fill().map((item, index) => {
                    return <JobItem key={index} />
                })}
            </div>

        </div>
    </section>
}

export default JobsPage