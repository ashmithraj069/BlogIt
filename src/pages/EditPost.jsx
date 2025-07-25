import React,{useEffect,useState} from 'react'
import { Container,Postcard,PostForm } from '../components'
import appwriteService from '../appwrite/configure'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const[post,setPost]= useState(null)
    const {slug}= useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if (slug) {
            appwriteService.getPost(slug)
            .then((post)=>{
                if (post) {
                 setPost(post)   
                }
                else{
                    navigate('/')
                }
        })
        }
    },[slug,navigate])
  return post?(
    <div className=' py-8'>
        <Container>
            <Postcard post = {post}/>
        </Container>
    </div>
  ):null
}

export default EditPost