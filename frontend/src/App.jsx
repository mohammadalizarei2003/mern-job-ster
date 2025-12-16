import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, RootLayout } from './layouts'
import { LandingPage, SigninPage, SignupPage } from './pages'

// 

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }
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
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App