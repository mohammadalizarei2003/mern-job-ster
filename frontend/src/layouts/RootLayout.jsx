import { Outlet } from 'react-router-dom'
import { RootHeader } from '../components'

const RootLayout = () => {
    return <main className="max-w-7xl mx-auto p-2 relative">
        <RootHeader />
        <section className="p-5">
            <Outlet />
        </section>
    </main>
}

export default RootLayout