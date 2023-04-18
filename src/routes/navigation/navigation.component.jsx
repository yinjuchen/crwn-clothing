import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss'


// top level components 
// user <Fragment> if we don't want to render some specific element 

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  // console.log(currentUser)
  const {isCartOpen} = useContext(CartContext)


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
        {currentUser ?(
          <span className='nav-link' onClick={signOutUser}>Sign Out</span>
        ) :(
        <Link className='nav-link' to='/auth'>
          Sign In
        </Link>
       )}
       <CartIcon/>
      </div>
      {isCartOpen && <CardDropdown />}
    </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation
