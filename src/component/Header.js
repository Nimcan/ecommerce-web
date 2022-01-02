import {useState} from 'react'

function Header(){

    const [toggle, setToggle] = useState(false)

    const navbar = document.querySelector(".menu-items");
    function toggleMenu(){
        
        
    }

    return(
        
        <div className="navbar">
            <div className="logo">
                <img src="./images/logo.png" />
            </div>
            {/* {toggle  && (
            <section className='responsive-header' aria-hidden="true">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Account</a></li>
                </ul>
            </section>)} */}

            <nav>
                <ul className='menu-items'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Account</a></li>
                </ul>
            </nav>

            <img src="./images/cart.png" className="cart"/>
            <img src="./images/menu.png" className="menu" onClick={(e)=>setToggle(!toggle)}/>
        </div>
    )
}


export default Header