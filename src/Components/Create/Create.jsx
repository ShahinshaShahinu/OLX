import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext, authContext } from '../../store/FirebaseContext';
import Header from '../Header/Header';
import './Create.css';


const Create = () => {


  const Navigate=useNavigate()
  const { db, storage } = useContext(FirebaseContext)
  const { user } = useContext(authContext)


  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  
  const newDate=new Date().toDateString()


  const handleSubmit = () => {
   
    const storageRef = ref(storage,"Images/"+image.name)
      uploadBytes(storageRef,image).then(({ref})=>{
      getDownloadURL(ref).then((url) => {
        console.log(url);
        console.log('shahinsha');

        const obj={
          name,category,price,url,userId:user.uid,createdAt:newDate
        
        }
        addDoc(collection(db,'Products'),obj).then(()=>Navigate('/'))
      })
    })
  }







  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            onChange={(e) => { setCategory(e.target.value) }}
            id="fname"
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input"
            type="number"
            value={price}
            onChange={(e) => { setPrice(e.target.value) }}
            id="fname"
            name="Price" />
          <br />

          <br />
          <img alt="Posts"
            width="200px"

            height="200px"
            src={image ? URL.createObjectURL(image) : ''}></img>

          <br />
          <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" accept="image/*"/>
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;