import styled from 'styled-components'
import ProductImagery from '../component/ProductImagery';
import ProductDetails from '../component/ProductDetails';

const WomenView = () => {

    const ProductContainer = styled.div`
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
    `


    return ( 
        <ProductContainer>
            <ProductImagery/>
            <ProductDetails/>
        </ProductContainer>
     );
}
 
export default WomenView;