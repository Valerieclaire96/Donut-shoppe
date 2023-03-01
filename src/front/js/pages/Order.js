import React from 'react'

export default function Order() {
  return (
    <div>
        <form>
            <h2>Order Now</h2>
            <label>Pick up Date</label>
            <input type="date"/>
            <label>Pick up Time</label>
            <input></input>
            <label>Choose:</label>
            <input type="dropdown"/>
            <input type="dropdown"/>
            <input type="text"/>
            <p>Total:</p>
            <button>Check Out</button>
        </form>
    </div>
  )
}