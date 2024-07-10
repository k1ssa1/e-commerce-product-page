import styled from "styled-components"
import mainImage from "../assets/image-product-1.jpg"
import product1_thumbnail from "../assets/image-product-1-thumbnail.jpg"
import product2_thumbnail from "../assets/image-product-2-thumbnail.jpg"
import product3_thumbnail from "../assets/image-product-3-thumbnail.jpg"
import product4_thumbnail from "../assets/image-product-4-thumbnail.jpg"

import product2_main from '../assets/image-product-2.jpg'
import product3_main from '../assets/image-product-3.jpg'
import product4_main from '../assets/image-product-4.jpg'


import { useState } from "react"

const ProductImagery = () => {

    const ImageryContainer = styled.aside`
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(-20px);
        width: fit-content;
        overflow: hidden;
    `;

    const ThumbnailContainer = styled.div`
        display: flex;
        height: 350px;
        width: 100%;
    `;

    const ThumbnailImage = styled.img`
        width: 100%;
        border-radius: 12px;
    `;

    const [productImage, setProductImage] = useState(<ThumbnailImage src={mainImage} alt="thumbnail" />);

    const ImageryList = styled.ul`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 20px;
        margin: 10px;
        width: 100%;
        height: 80px;
    `;

    const ImageryItem = styled.li`
        list-style: none;
        border-radius: 8px;
        :hover {
            cursor: pointer;
            filter: opacity(60%);
        }
    `;

    const ProductImage = styled.img`
        height: 100%;
        border-radius: 8px;
        width: 100%;
    `;

    const resetImage = () => {
        setProductImage(<ThumbnailImage src={mainImage} alt="thumbnail" />)
    }

    const switchSecond = () => {
        setProductImage(<ThumbnailImage src={product2_main} alt="thumbnail" />)
    }

    const switchThird = () => {
        setProductImage(<ThumbnailImage src={product3_main} alt="thumbnail" />)
    }

    const switchForth = () => {
        setProductImage(<ThumbnailImage src={product4_main} alt="thumbnail" />)
    }

    return (
        <ImageryContainer>
            <ThumbnailContainer>
                {productImage}
            </ThumbnailContainer>
            <ImageryList>
                <ImageryItem>
                    <ProductImage src={product1_thumbnail} alt="thumbnail-product1-image" onClick={resetImage} />
                </ImageryItem>
                <ImageryItem>
                    <ProductImage src={product2_thumbnail} alt="thumbnail-product2-image" onClick={switchSecond} />
                </ImageryItem>
                <ImageryItem>
                    <ProductImage src={product3_thumbnail} alt="thumbnail-product3-image" onClick={switchThird} />
                </ImageryItem>
                <ImageryItem>
                    <ProductImage src={product4_thumbnail} alt="thumbnail-produc4-image" onClick={switchForth} />
                </ImageryItem>
            </ImageryList>
        </ImageryContainer>
    );
}

export default ProductImagery;