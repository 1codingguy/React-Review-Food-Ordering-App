import React from 'react'
import classes from './Input.module.css'

// React.forwardRef() here is to forward the Ref prop
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* only then ref can be further forwarded  */}
      <input ref={ref} {...props.input} />
    </div>
  )
})

export default Input