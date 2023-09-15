import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
// import { CategoriesContext } from '../../contexts/categories.context';
import Spinner from '../../components/spinner/spinner.component';
import { CategoryContainer, Title} from './category.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';

const Category = () => {
  // console.log('render/re-rendering category component')
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  // const { categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    // console.log('effect fired calling setProducts')
    setProducts(categoriesMap[category]);
  },[category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading 
        ? (<Spinner />) 
        : (<CategoryContainer>
          {products && 
          products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
         </CategoryContainer>)}
    </Fragment>
  )
};

export default Category;