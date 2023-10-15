import { useEffect, useState } from 'react';
import './Home.css'
import PostCard from './PostCard';
import { db } from '../firebase/config';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

import useTitle from './hooks/useTitle';
const Home = () => {
   
    const [posts, setPosts] = useState([]);
    const postsRef = (collection(db, "posts"));
    useTitle("Home Page");
  
    useEffect(() => {
        async function getPosts() {
            const data = await getDocs(postsRef);
           setPosts(data.docs.map((document)=>({...document.data(),id:document.id})));
        }
        getPosts();
    }, [postsRef])
    return (
        <div className='mt-5'>
            <h3 className='my-2 text-blue'>Blog Posts</h3>
            <main className='mt-4'>
                {
                    posts.map((post)=>(
                        <PostCard key={post.id} post={post}/>
                    ))
                }
                

            </main>

        </div>
    )
};

export default Home
