import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return <main className='w-screen min-h-screen p-5 flex items-center justify-center flex-col'>
        <h1 className="text-5xl font-bold my-10"><span className="text-primary">Job</span> Ster</h1>
        <Outlet />
    </main>
}

export default AuthLayout