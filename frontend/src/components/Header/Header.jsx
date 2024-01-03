import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { RESET_AUTH, logout } from "../../utils/reduxStore/authSlice";
import ShowonLogin, { ShowonLogout } from "../hiddenLinks/hiddenlinks";

 const logo=(
    <div className={styles.logo} >
    <Link to="/">
        <h2>Siya<span>Ram</span>Store</h2>
    </Link>
</div>
 )

 const activeLink=(isActive)=>{
    return isActive?`${styles.active}`:""
 }


 const Header1=()=>{
    
 }

const DemoHeader = () => {
    const [showMenu,setShowMenu]=useState(false);
    const toggleMenu=()=>{
        setShowMenu(!showMenu)
    }
    const hideMenu=()=>{
        setShowMenu(false);
    }
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    const logoutUser=(async()=>{
        await dispatch(logout());
        await dispatch(RESET_AUTH());
        navigate("/login")

    })

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);


    const cart=(
        <span className={styles.cart} onClick={() => setShowCart(true)}>
            <Link to={"/cart"}>
                Cart -
                <FaShoppingCart size={20} />
                <p>  {!!cartCount && <span>{cartCount}</span>} </p>
            </Link>
        </span>
    )


  return (
    <>
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className={styles.header} >
            {logo}
            <nav className={showMenu?`${styles["show-nav"]}`:`${styles["hide-nav"]}`}>
                <div  className={showMenu?`${styles["nav-wrapper"]}${styles["show-nav-wrapper"]}`:`${styles["nav-wrapper"]}`} onClick={hideMenu} >

                </div>

                <><ul>
                    <li className={styles["logo-mobile"]} > {logo} 
                    <FaTimes size={22} color='#fff'
                    onClick={hideMenu} />
                    </li>
                      <li>
                          <NavLink to="/" className={activeLink}>
                              Shop
                          </NavLink>
                      </li>
                  </ul><div className={`${styles["header-right"]}`}>
                  <TbSearch size={28} onClick={() => setSearchModal(true)} />
                          <span className={styles.links}>
                          <li className={activeLink} onClick={() => navigate("/")}>Home</li>
                        <li className={activeLink} onClick={() => navigate("/about")}>About</li>
                        <ShowonLogout>
                              <NavLink to={"/login"} className={activeLink}>Login</NavLink>
                              <NavLink to={"/register"} className={activeLink}>Register</NavLink>
                              </ShowonLogout>
                              <ShowonLogin>
                        <Link to={"/"} onClick={logoutUser}>Logout</Link>
                        </ShowonLogin>
                          </span>
                          {cart}
                      </div></>

            </nav>
            <div className={styles["menu-icon"]} >
                {cart}
                <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />

              

            </div>
        </div>  
    </header>
    {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
    </>

    
  )
}

export default DemoHeader