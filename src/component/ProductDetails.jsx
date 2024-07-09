import styled from 'styled-components'

import plus from '../assets/icon-plus.svg'
import minus from '../assets/icon-minus.svg'
import cart from '../assets/icon-cart.svg'

const ProductDetails = () => {

    const DetailsMainContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        overflow: hidden;
        transform: translateY(-20px)
    `;

    const CardHeader = styled.div`
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 70%;
    `;

    const ProductCompany = styled.h4`
        color: hsla(229.56521739130434, 10.697674418604652%, 42.15686274509804%, 0.616);
        font-size: 0.72rem;
        text-transform: uppercase;
        margin: 0 0 10px;
        word-spacing: 3px;
        letter-spacing: 2px;
    `;

    const ProductTitle = styled.h5`
        color: hsl(220, 13%, 13%);
        font-size: 1.8rem;
        width: 85%;
        word-spacing: 3px;
        margin: 0 0 14.5px;
        font-weight: 700;
    `;

    const ProductDescriptipn = styled.p`
        color: hsla(229.56521739130434, 10.697674418604652%, 42.15686274509804%, 0.616);
        font-size: 0.75rem;
        width: 90%;
        line-height: 20px;
        font-weight: 400;
    `;

    const PriceDetails = styled.div`
        display: grid;
        grid-template-columns: auto auto;
        width: fit-content;
        justify-content: space-around;
        gap: 0 12px;
        align-items: center;
    `;

    const ProductPrice = styled.p`
        color: hsl(220, 13%, 13%);
        font-weight: 700;
        font-size: 1.2rem;
        position: relative;
        bottom: 1.85px;
    `;

    const ProductDiscount = styled.p`
        background-color: hsl(220, 13%, 13%);
        color: white;
        border-radius: 4px;
        font-size: 0.7rem;
        padding: 2px 6px;
    `;

    const ProductInitialPrice = styled.p`
        color: hsla(229.56521739130434, 10.697674418604652%, 42.15686274509804%, 0.616);
        border-radius: 10px;
        margin: 0;
        font-size: 0.70rem;
        font-weight: 700;
        text-decoration: line-through;
        transform: translateY(-10px);
    `;

    const ProductSelector = styled.div`
        display: grid;
        gap: 20%;
        grid-template-columns: auto auto;
        justify-content: flex-start;
        width: 100%;
        align-items: center;
    `;

    const ItemCounter = styled.div`
        display: grid;
        gap: 60%;
        grid-template-columns: auto auto auto;
        align-items: center;
    `;

     const Countplus = styled.button`
        padding: 2px 5px;
        display: flex;
        align-items: center;
        background-color: transparent;
        border: 0px;
        :hover{
            cursor: pointer;
        }
    `;

    const Countminus = styled.button`
        padding: 2px 5px;
        display: flex;
        align-items: center;
        background-color: transparent;
        border: 0px;
        padding: 5px;
        :hover{
            cursor: pointer;
        }
    `;

    const CountNumber = styled.p`
        color: hsl(220, 13%, 13%);
    `;

    const AddToCartBtn = styled.button`
        color: black;
        background-color: hsl(26, 100%, 55%);
        border: 1px solid hsl(26, 100%, 55%);
        width: 240px;
        font-weight: 700;
        border-radius: 5px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        :hover{
            cursor: pointer;
        }
    `;

    const CartIcon = styled.img`
        filter: brightness(0%);
        height: 14px;
        margin: 0 8px 0 0;
    `;

    const CartBtnTxt = styled.p`
        font-size: 11px;
    `;

    return (  
       <DetailsMainContainer>
            <CardHeader>
                <ProductCompany>sneaker company</ProductCompany>
                <ProductTitle>Fall Limited Edition Sneakers</ProductTitle>
                <ProductDescriptipn>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</ProductDescriptipn>
            </CardHeader>
            <PriceDetails>
                <ProductPrice>$125.00</ProductPrice>
                <ProductDiscount>50%</ProductDiscount>
                <ProductInitialPrice>$250.00</ProductInitialPrice>
            </PriceDetails>
            <ProductSelector>
                <ItemCounter>
                    <Countminus>
                        <img src={minus} alt="minus-icon"/>
                    </Countminus>
                    <CountNumber>1</CountNumber>
                    <Countplus>
                        <img src={plus} alt="plus-icon"/>
                    </Countplus>
                </ItemCounter>
                <AddToCartBtn>
                    <CartIcon src={cart} alt="cart-icon"/>
                    <CartBtnTxt>Add to cart</CartBtnTxt>
                </AddToCartBtn>
            </ProductSelector>
       </DetailsMainContainer>
    );
}
 
export default ProductDetails;