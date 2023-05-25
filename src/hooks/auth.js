import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from "../lib/firebase";
import { useState } from "react";
import { DASHBOARD, LOGIN } from '../lib/routers';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

export function useAuth() {

    const [authUser, isLoading, error] = useAuthState(auth);
    
    
    return {user: authUser, isLoading, error};
}

export function useLogin() {
    const[isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function login({email,password, redirectTo=DASHBOARD}) {
        setLoading(true);


        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast ({
                title: "You are logged in",
                status: "success",
                isClosable: true,
                position: "top",
                duration: 5000,
        });
        navigate(redirectTo);
        }
        catch (error){
            toast ({
                title: "Log in failed",
                description: error.message,
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000    
            });
            setLoading(false);
            return false; // Return false if login failed
        }
        setLoading(false);
        return true // Return true if login success
    }
    return {login, isLoading}
}

export function useLogout() {
    const [ signOut, isLoading, error] = useSignOut(auth);
    const navigate = useNavigate();
    const toast = useToast();

    async function logout() {
       if(await signOut()) {
        toast({
            title: "Successfully logged out",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,

        });
        navigate(LOGIN)

       }


    }

    return {logout, isLoading}
}