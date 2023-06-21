import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { v4 as uuidv4 } from 'uuid';
import { doc } from 'firebase/firestore';
import { useToast } from '@chakra-ui/react';



export default function useAddPost() {

    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    async function addPost(post) {
        setIsLoading(true);
        const id = uuidv4();
        await setDoc(doc(db, "posts", id), {
            ...post,
            id,
            date: Date.now(),
            likes: [],
        });
        toast({
            title: "Post added successfully!",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
          });

        setIsLoading(false);
    }
        


    return { addPost, isLoading}
}