import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component';
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  const nevigate = useNavigate()

const goToCheckoutHandler = () => {
  nevigate('/checkout')
}

   return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length? (cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))) : ( 
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )} 
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECK OUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
