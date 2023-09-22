import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../assets/Arrow';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { auth } from '../../firebase/config';
import { authContext } from '../../store/FirebaseContext';
import './Header.css';




function Header() {

  const {user}=useContext(authContext);
  
  const Navigate=useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user?(  `Welcome ${user.displayName}`) :(<span onClick={()=>Navigate('/login')}>Login</span>)}</span>
          <hr />
          
        </div>
{user && <span onClick={()=>{
  auth.signOut();
  Navigate('/login')
}} >LOgout</span>}
        <div onClick={()=>{
              Navigate('/Create')
            }} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;