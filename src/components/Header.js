import React from 'react'

const Header = (props) => {
    return(

     <header>
      <div  className = "left">
      <div className="AllItems" >
       <a href="#/" > All Items </a >
      </div >
      <div>
        <a href = "#/Cart" > Cart </a >
        <a href = "#SignIn" > SignIn </a >
      </div >
      </div> 
     </header >
    )
}

export default Header 