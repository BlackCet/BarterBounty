import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
    border: "2px solid"

  }
     return (
    <footer className="bg-dark text-light py-3" style={footerStyle}> 
        <p className="text-center">
          Copyright &copy; BarterBounty.com
        </p>
    </footer>
  )
}
