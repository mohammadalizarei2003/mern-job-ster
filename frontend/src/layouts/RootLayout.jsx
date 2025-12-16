import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return <main className="max-w-7xl mx-auto p-2">
        <h1>Header</h1>
        <Outlet />
    </main>
}

export default RootLayout