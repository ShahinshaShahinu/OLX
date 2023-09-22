import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import './View.css';



function View() {



  const [userDetails,setUserDetails]=useState()

  const {postDetails}=useContext(PostContext)
  const {db}=useContext(FirebaseContext)
  
  useEffect(()=>{
   
    const userQuery=query(collection(db,'Users'),where('id','==',postDetails.userId))
  
    getDocs(userQuery).then(res=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      })
    })
  },[db,postDetails.userId])
  

  
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt={postDetails.name}
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>₹ {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.profileName}</p>
          <p>{userDetails.number}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;