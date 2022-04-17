import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = ({ onShowCart }) => {
  return (
    <button className={classes.button} onClick={onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* badge shows how many items in the cart */}
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton
