// ProtectedRoute.js
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const { userToken } = useSelector((state) => state.user)
    // show unauthorized screen if no user is found in redux store
    if (!userToken) {
        return (
            <div className='h-[100vh] container flex justify-center items-center text-center'>
                <div className='space-y-[12px]'>
                    <h1 className='font-bold text-[20px]'>Yêu Cầu Đăng Nhập</h1>
                    <NavLink to='/login'>
                        <button className="btn btn-primary w-full">Đăng nhập</button>
                    </NavLink>
                </div>
            </div>
        )
    }

    return <Outlet />
}
export default ProtectedRoute