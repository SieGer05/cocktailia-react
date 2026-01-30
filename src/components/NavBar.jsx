import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
   useGSAP(() => {
      const navTween = gsap.timeline({
         scrollTrigger: {
            trigger: 'html',
            start: 'top top',
            end: '+=200',
            scrub: 0.3
         }
      });

      navTween.to('nav', { 
         backgroundColor: 'rgba(0, 0, 0, 0.8)', 
         backdropFilter: 'blur(12px)',          
         ease: "none"   
      });
   });

   return (
      <nav>
         <div>
            <a href="#home" className="flex items-center gap-2">
               <img src="/images/logo.png" alt="logo" className="w-10 h-auto" />
               <p>Cocktailia React</p>
            </a>

            <ul>
               {navLinks.map((link) => (
                  <li key={link.id}>
                     <a href={`#${link.id}`}>{link.title}</a>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
}

export default NavBar;