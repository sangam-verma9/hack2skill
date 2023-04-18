import React from "react";

const Footer =()=>{
  return(
    <>
        <footer className="width-100% bg-light text-center">
            <p className="text-center"><b>&#169;</b> Copyright 2023 All right reserved.</p>
            <div className="footlink">
              <a href="https://facebook.com" target="_blank" without rel="noreferrer" ><i className="fa-brands fa-square-facebook footerlink"></i></a>
              <a href="https://web.whatsapp.com" target="_blank" without rel="noreferrer"  ><i className="fa-brands fa-square-whatsapp footerlink"></i></a>
              <a href="https://instagram.com" target="_blank" without rel="noreferrer" ><i className="fa-brands fa-square-instagram footerlink"></i></a>
              <a href="https://twitter.com"target="_blank" without rel="noreferrer"  ><i className="fa-brands fa-square-twitter footerlink"></i></a>
              <a href="https://linkedin.com" target="_blank" without rel="noreferrer" ><i className="fa-brands fa-linkedin footerlink"></i></a>
            </div>
        </footer>
    </>
  )
}
export default Footer;