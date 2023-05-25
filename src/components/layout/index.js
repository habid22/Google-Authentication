
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../lib/routers';
import {useAuth} from "../../hooks/auth";
import Navbar from '../navbar';

export default function Layout() {
 const {pathname} = useLocation();
 const navigate = useNavigate();
 const {user, isLoading} = useAuth();



 useEffect(() => {
    if (pathname.startsWith("/protected") && !user) {
        navigate(LOGIN);
    }

 }, [pathname, user])

 if(isLoading) return "Loading..."

 return (
    <>
    <Navbar/>

    <Outlet/>
    
    </>
 );
}
