import {useState, useEffect} from 'react'

function Header(){

    const [toggle, setToggle] = useState(false)
   
    const [screenWidth, setScreenWidhth] = useState(window.innerWidth)
   
    

    useEffect(()=>{
        
        const changeWidth = ()=>{
            setScreenWidhth(window.innerWidth);

        }
            window.addEventListener('resize', changeWidth);
        
        return()=>{
            window.removeEventListener('resize',changeWidth);
        }
    },[])

    return(
        
        <div className="navbar">
            <div className="logo">
                <img src="./images/logo.png" />
            </div>
             <nav>
            {(toggle || screenWidth > 800) && (
                <ul className='menu-items'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Account</a></li>
                </ul>)}
            </nav>

            <img src="./images/cart.png" className="cart"/>
            <img src="./images/menu.png" className="menu" onClick={(e)=>setToggle(!toggle)}/>
        </div>
    )
}


export default Header