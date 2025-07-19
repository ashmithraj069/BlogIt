import React,{useState,useEffect} from 'react'
import { Container, Postcard } from '../components/index'
import appwriteService from "../appwrite/configure";

function AllPosts() {
    const [post,setPost]=useState([])
    useEffect(()=>{
        appwriteService.getPosts([])
    .then((posts) => {
        if (posts) {
            setPost(posts.documents)
        }
    })
    },[])

    
    

  return (
    <div  className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {post.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <Postcard {...post}/>
                </div>
            ))}
            </div>

        </Container>
    </div>
  )
}

export default AllPosts