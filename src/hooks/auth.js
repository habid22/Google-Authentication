import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth, db } from "../lib/firebase";
import { useState } from "react";
import { DASHBOARD, LOGIN } from '../lib/routers';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { set } from 'react-hook-form';
import { setDoc, doc } from 'firebase/firestore';

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
                description: "Make sure you've entered the correct credentials!",
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

export function useRegister() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    async function register({username, email, password, redirectTo = DASHBOARD})

    {
        setLoading(true);
       const usernameExists = await isUsernameExists(username)

       if(usernameExists) {
        toast({
            title: "Username already exists",
            status: "error",
            isClosable: true,
            position: "top",
            duration: 5000,
        });
        setLoading(false);
  
       }
       else {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            await setDoc(doc(db, "users", res.user.uid), {
                id: res.user.uid, username: username.toLowerCase(), avatar: "", date: Date.now(),
            })

            toast({
                title: "Account created",
                description: "You are now logged in",
                status: "success",
                isClosable: true,
                position: "top",
                duration: 5000,
            });

            navigate(redirectTo);
        }
        catch (error) {
            toast({
                title: "Account creation failed",
                description: error.message,
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000,
            });

        } finally {
            setLoading(false);
        }

       setLoading(false);

    

    return {register, isLoading};
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