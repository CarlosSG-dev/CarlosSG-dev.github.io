import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

const Sidbar = () => {
   <div className="nav-bar">
       <Link className="logo" to="/">
           <img src={LogoS} alt="logo"/>
           <img className="sub-logo" src={LogoSubtitle} alt="CarlosSG"/>
       </Link>
       <nav>
           <NavLink exact="true" activeClassName="active" to="/">
               <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>

           </NavLink>
       </nav>
   </div>
}

export default Sidbar