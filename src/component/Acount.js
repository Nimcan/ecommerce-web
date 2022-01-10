import React, { useState, useRef } from 'react'

export const Acount = () => {

    const loginForm = useRef()
    const registerForm = useRef()
    const Indicator = useRef()


    function Register(){
        console.log(registerForm.current)
        
        registerForm.current.style.transform = "translateX(0px)";
        loginForm.current.style.transform = "translateX(0px)";
        Indicator.current.style.transform = "translateX(100px)";


    }

    function Login(){
        console.log(loginForm.current);
        registerForm.current.style.transform = "translateX(350px)";
        loginForm.current.style.transform = "translateX(350px)";
        Indicator.current.style.transform = "translateX(0px)";

    }
    

    return (
        <div className='acount' id='acount'>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <img src='./images/image1.png'/>

                    </div>
                    
                    <div className='col-2'>
                        <div className='form-container'>
                            <div className='acount-btn'>
                                <span  onClick={Login}>Login</span>
                                <span onClick={Register}>Register</span>
                                <hr className='indicator' ref={Indicator}/>
                            </div>

                            {/* login form */}
                            <form id='login-form' ref={loginForm}>
                                <input type="text" placeholder='User Name'/>
                                <input type="password" placeholder='Password'/>
                                <button className='login-btn'>Login</button> <br/>
                                <a href='#'>Forget Password</a>
                            </form>

                            {/* register form */}
                            <form id='reg-form' ref={registerForm}>
                                <input type="text" placeholder='User Name'/>
                                <input type="email" placeholder='Email'/>
                                <input type="password" placeholder='Password'/>
                                <button className='register-btn'>Login</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
