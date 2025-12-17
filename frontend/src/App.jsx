import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, RootLayout } from './layouts'
import { JobsPage, LandingPage, SigninPage, SignupPage } from './pages'

// 

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'jobs',
        element: <JobsPage />
      },
    ]
  },
  {
    path: 'auth/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SigninPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      }
    ]
  },
  {
    path: '*',
    element: <h1 className='text-2xl text-center my-20 text-warning'>Page not found</h1>
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App