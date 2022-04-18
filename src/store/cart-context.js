import React from 'react'

// default value not going to use, but for better auto-completion (typeScript behind the scene)
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})

export default CartContext