// import { useContext } from 'react'

// import { CartContext } from '../../contexts/cart.context';
import { useDispatch, useSelector} from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext)
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
   <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price className='price'>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} 
      onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
   )
  }

export default ProductCard
