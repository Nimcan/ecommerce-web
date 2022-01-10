

import React from 'react'

export default function View() {
    return (
        <div className='catogories-small-container single-product-view'>
            <div className='row'>
                <div className='col-2'>
                    <img src='./images/gallery-1.jpg' className='item-image' />

                    <div className='gallery-row'>
                        <div className='gallery-col'>
                            <img src='./images/gallery-1.jpg'/>
                        </div>
                        <div className='gallery-col'>
                            <img src='./images/gallery-2.jpg'/>
                        </div>
                        <div className='gallery-col'>
                            <img src='./images/gallery-3.jpg'/>
                        </div>
                        <div className='gallery-col'>
                            <img src='./images/gallery-4.jpg'/>
                        </div>
                    </div>

                </div>
                <div className='col-2'>
                    <p>Home / T-shirts</p>
                    <h1>Red printed T-shirt</h1>
                    <h4>$50.00</h4>
                    <select>
                        <option>Select Size</option>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                    <input type="number"/>
                    <a href='#' className='btn-addCart'>ADD TO CART</a>
                    <h3>Product Detail <i class="fas fa-indent"></i></h3>
                    <p>Page-kan waxaad ka helaysaa dharka sports-ka sidoo kale dharka kale 
                    waad ka heli kartaa iyagoo qiime jaban ah.
                    </p>

                </div>
            </div>
        </div>
    )
}
