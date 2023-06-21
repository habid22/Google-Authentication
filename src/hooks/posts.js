import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { v4 as uuidv4 } from 'uuid';



export default function useAddPost() {

    const [isLoading, setIsLoading] = useState(false);

    async function addPost(post) {
        setIsLoading(true);
        const id = uuidv4();
        await setDoc(doc(db, "posts", id), {
            ...post,
            id,
            date: Date.now(),
            likes: [],
        })
    }
        


    return { addPost, isLoading}
}