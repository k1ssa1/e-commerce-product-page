import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mainImage from "../assets/image-product-1.jpg";
import product1_thumbnail from "../assets/image-product-1-thumbnail.jpg";
import product2_thumbnail from "../assets/image-product-2-thumbnail.jpg";
import product3_thumbnail from "../assets/image-product-3-thumbnail.jpg";
import product4_thumbnail from "../assets/image-product-4-thumbnail.jpg";
import product2_main from "../assets/image-product-2.jpg";
import product3_main from "../assets/image-product-3.jpg";
import product4_main from "../assets/image-product-4.jpg";
import close from "../assets/icon-close.svg";
import { GrNext, GrPrevious } from "react-icons/gr";

const LighthouseContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: hsl(0, 0%, 0%, 0.75);
  height: 100vh;
  width: 100vw;
  z-index: 100;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const LighthouseImageryDisplayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50%;
  color: #282f42;
  height: 10px;
  width: 10px;
  position: fixed;
  top: 40%;
  padding: 20px;
  border: 1px solid #f5f5f5;

  :hover {
    cursor: pointer;
  }
`;

const PreviousIcon = styled(IconWrapper)`
  right: 835px;
`;

const NextIcon = styled(IconWrapper)`
  right: 455px;
`;

const LighthouseImageryThumbnail = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
`;

const LighthouseThumbnailImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const LighthouseImageryList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 10px;
  width: 100%;
  height: 80px;
`;

const LighthouseImageryItem = styled.li`
  list-style: none;
  border-radius: 8px;
  :hover {
    cursor: pointer;
    filter: opacity(60%);
  }
`;

const LighthouseProductImage = styled.img`
  height: 100%;
  border-radius: 8px;
  width: 100%;
`;

const LighthouseBtn = styled.img`
  transform: translateX(180px) translateY(-20px);
  filter: brightness(100%);
  height: 1.2rem;
`;

const Lighthouse = ({ onClose }) => {
  const carouselImages = [
    { src: mainImage },
    { src: product2_main },
    { src: product3_main },
    { src: product4_main }
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setLProduct(<LighthouseThumbnailImage src={carouselImages[imageIndex].src} alt="thumbnail" />);
  }, [imageIndex]);

  const handlePrevious = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setImageIndex((nextIndex) =>
      nextIndex === carouselImages.length - 1 ? 0 : nextIndex + 1
    );
  };

  const [lproduct, setLProduct] = useState(
    <LighthouseThumbnailImage src={carouselImages[0].src} alt="thumbnail" />
  );

  const resetImage = () => {
    setImageIndex(0);
  };

  const switchSecond = () => {
    setImageIndex(1);
  };

  const switchThird = () => {
    setImageIndex(2);
  };

  const switchForth = () => {
    setImageIndex(3);
  };

  return (
    <LighthouseContainer>
      <LighthouseBtn src={close} onClick={onClose} />
      <LighthouseImageryDisplayer>
        <PreviousIcon onClick={handlePrevious}>
          <GrPrevious />
        </PreviousIcon>
        <LighthouseImageryThumbnail>{lproduct}</LighthouseImageryThumbnail>
        <NextIcon onClick={handleNext}>
          <GrNext />
        </NextIcon>
        <LighthouseImageryList>
          <LighthouseImageryItem>
            <LighthouseProductImage
              src={product1_thumbnail}
              alt="thumbnail-product1-image"
              onClick={resetImage}
            />
          </LighthouseImageryItem>
          <LighthouseImageryItem>
            <LighthouseProductImage
              src={product2_thumbnail}
              alt="thumbnail-product2-image"
              onClick={switchSecond}
            />
          </LighthouseImageryItem>
          <LighthouseImageryItem>
            <LighthouseProductImage
              src={product3_thumbnail}
              alt="thumbnail-product3-image"
              onClick={switchThird}
            />
          </LighthouseImageryItem>
          <LighthouseImageryItem>
            <LighthouseProductImage
              src={product4_thumbnail}
              alt="thumbnail-produc4-image"
              onClick={switchForth}
            />
          </LighthouseImageryItem>
        </LighthouseImageryList>
      </LighthouseImageryDisplayer>
    </LighthouseContainer>
  );
};

export default Lighthouse;
