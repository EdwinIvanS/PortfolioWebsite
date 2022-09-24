import { useEffect, useState } from "react"

export const NavBarHook = () =>{
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setscrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50) setscrolled(true);
            else setscrolled(false);            
        }
    window.addEventListener("scroll" , onScroll);
    return () => window.removeEventListener("scroll", onScroll);

    },[])

    return { activeLink, setActiveLink, scrolled }
}