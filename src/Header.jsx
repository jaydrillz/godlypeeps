import './Header.css'
import { NavLink, Outlet } from 'react-router-dom'
const Header =()=>{
    return(
        <header>
        <div className= 'logo'>Welcome to react</div>
     <nav>
     <NavLink to='/'>HOME</NavLink>
      <NavLink to='about'>ABOUT</NavLink>
      <NavLink to= 'service'>SERVICES</NavLink>

     </nav>
     <main>

     <Outlet/>

     </main>
      </header>
      
    )
}


export default Header