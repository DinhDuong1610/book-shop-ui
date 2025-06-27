import { Button, Result } from "antd"
import { useCurrentApp } from "../context/app.context"
import { Link, useLocation } from "react-router-dom"

interface IProps {
    children: React.ReactNode
}
const ProtectedRoute = (props: IProps) => {
    const location = useLocation()
    const { isAuthenticated, user } = useCurrentApp()
    if (!isAuthenticated) return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button><Link to="/login">Login</Link></Button>}
        />
    )

    const isAdminRoute = location.pathname.includes('admin');
    if (isAuthenticated && isAdminRoute) {
        const role = user?.role.name;
        if (role === "USER") return (
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button><Link to="/">Home</Link></Button>}
            />
        )
    }

    return (
        <>
            {props.children}
        </>
    )
}

export default ProtectedRoute