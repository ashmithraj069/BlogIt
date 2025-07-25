import React from 'react'
import appwriteService from '../appwrite/configure'
import {Link} from 'react-router-dom'
function Postcard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img
  src={
    featuredImage
      ? appwriteService.getFilePreview(featuredImage)
      : "https://via.placeholder.com/300x200?text=No+Image"
  }
  alt={title}
  className="rounded-xl"
/>


            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
)
}

export default Postcard