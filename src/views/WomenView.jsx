import styled from 'styled-components'
import ProductImagery from '../component/ProductImagery';
import ProductDetails from '../component/ProductDetails';

const WomenView = () => {

    const ProductContainer = styled.div`
        display: grid;
        grid-template-columns: 40% 60%;
        align-items: center;
        gap: 0 10%;
        margin: 70px 200px 0;
    `

    return (
        <ProductContainer>
            <ProductImagery />
            <ProductDetails />
        </ProductContainer>
    );
}

export default WomenView;