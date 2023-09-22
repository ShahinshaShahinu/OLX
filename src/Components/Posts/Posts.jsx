import React, { useContext, useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import './Post.css';


import { useNavigate } from 'react-router-dom';



function Posts() {
  const { db } = useContext(FirebaseContext)

  const [products, setProducts] = useState([])
  const { setPostDetails } = useContext(PostContext)


  const Navigate = useNavigate()



  useEffect(() => {
    getDocs(collection(db, 'Products')).then(snapshot => {
      console.log(snapshot);
      const allPost = snapshot.docs.map(obj => {

        return {
          ...obj.data(),
          id: obj.id
        }
      })
      setProducts(allPost);
    })
  }, [db])


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Fresh recommendations</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {

            products.map(product => {
              return (

                <div
                  className="card"
                  onClick={() => {
                    setPostDetails(product)
                    Navigate('/View')
                  }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.url} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>


              )
            })


          }
        </div>
      </div>
    </div>
  );
}

export default Posts;





//snapshot iside docs enna arra ,arra inside each document have many methods
  //map array datas take cheyyunnu 
  // snapshot is a object, docd is a array, 