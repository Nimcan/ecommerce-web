import React from 'react'

export default function Card() {
    return (
        <div className='catogories-small-container card-page'>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                </tr>
                <tr>
                    <td>
                        <div className='cart-item'>
                            <img src='./images/buy-1.jpg'/>
                            <div>
                                <p>Red Colored T-shirt</p>
                                <small>Price: $50.00</small>
                                <br></br>
                                <a href='#'>Remove</a>
                            </div>
                        </div>
                    </td>
                    <td><input className='text' type="number" value={1}/></td>
                    <td>$50.00</td>
                </tr>
            </table> 

            <div className='card-total'>
                <table>
                    <tr>
                        <td>SubTotal</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>$30</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$230</td>
                    </tr>
                </table>
            </div>
            
        </div>
    )
}
