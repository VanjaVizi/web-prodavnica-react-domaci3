import React from "react";
import {FaFacebookSquare} from "react-router-dom";
 
function Footer( ) {
    return (
        <div className="footer">
        <div className="footerItem">
            <ul>
               <strong>Kontaktirajte nas</strong>  
                <li>+381 11 123 456</li>
                <li>slatkisi@gmail.com</li>
            </ul>
        </div>
        <div className="footerItem">
            <ul>
               <strong>Mozete nas pronaci na sledecim lokacijama</strong>  
                <li>Bulevar Mihajla Pupina 74a, Novi Beograd</li>
                <li>Cara Dusana 92, Zemun</li>
                <li>Vojvode Knićanina 12/b, Novi Sad</li>

            </ul>
        </div>
        <div className="footerItem">
            <ul>
                <strong>Developed by:</strong> 
              
                <li><a href="https://www.linkedin.com/in/vanja-vizi-a85180183/"  target="_blank">Vanja Vizi 2018/0126</a></li>
            </ul>
        </div>  
      
    </div>
      );
}
export default Footer;