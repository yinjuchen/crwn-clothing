import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'


// top level components 
// user <Fragment> if we don't want to render some specific element 

const Navigation = () => {
  return (
    <Fragment>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <CrwnLogo className='logo'/>
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
        <Link className='nav-link' to='/sign-in'>
          SignIn
        </Link>
      </div>
    </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation
