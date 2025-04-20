import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext'

const Order = () => {
  const {getTotal} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="order-left">
        <p className='Title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="" placeholder='first name'/>
          <input type="" placeholder='last name'/>
        </div>
        <input type="email" placeholder='Email-Address'/>
        <input type="text" placeholder='street'/>
        <div className="multi-fields">
          <input type="" placeholder='City'/>
          <input type="" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="" placeholder='Zip Code'/>
          <input type="" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>

      </div>
      <div className="order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotal()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotal()===0?0:getTotal()+2}</b>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default Order