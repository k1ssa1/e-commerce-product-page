import styled from "styled-components"
import mainImage from "../assets/image-product-1.jpg"
import product1 from "../assets/image-product-1-thumbnail.jpg"
import product2 from "../assets/image-product-2-thumbnail.jpg"
import product3 from "../assets/image-product-3-thumbnail.jpg"
import product4 from "../assets/image-product-4-thumbnail.jpg"

const ProductImagery = () => {

    const ImageryContainer = styled.aside`
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(-20px);
        background-color: aliceblue;
        width: fit-content;
        overflow: hidden;
    `

    const ThumbnailContainer = styled.div`
        display: flex;
        height: 350px;
        width: 100%;
    `
    const ThumbnailImage = styled.img`
        width: 100%;
        border-radius: 12px;
    `

    const ImageryList = styled.ul`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 20px;
        margin: 10px;
        width: 100%;
    `

    const ImageryItem = styled.li`
        list-style: none;
    `

    const ProductImage = styled.img`
        height: 70px;
        border-radius: 5px;
        width: 100%;
    `

    return (  
        <ImageryContainer>
            <ThumbnailContainer>
                <ThumbnailImage src={mainImage} alt="main-product-image"/>
            </ThumbnailContainer>
            <ImageryList>
                <ImageryItem>
                    <ProductImage src={product1} alt="thumbnail-product1-image"/>
                </ImageryItem>
                <ImageryItem>
                    <ProductImage src={product2} alt="thumbnail-product2-image"/>
                </ImageryItem>
                <ImageryItem>
                    <ProductImage src={product3} alt="thumbnail-product3-image"/>
                </ImageryItem>
                <ImageryItem>
                    <ProductImage src={product4} alt="thumbnail-produc4-image"/>
                </ImageryItem>
            </ImageryList>
        </ImageryContainer>
    );
}
 
export default ProductImagery;