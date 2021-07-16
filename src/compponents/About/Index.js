import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Paragraph,
  Price,
  BtnWrap,
  Button,
  Column2,
  ImgWrap,
  Star,
  Star2,
  Star3,
  Star4,
  Star5,
  Img,
  InfoRow,
} from "./AboutElements";

function About({
  id,
  topline,
  headline,
  paragraph,
  price,
  img,
  star,
  star2,
  star3,
  star4,
  star5,
}) {
  return (
    <AboutContainer>
      <AboutWrapper id={id}>
        <InfoRow>
          <Column1>
            <ImgWrap>
              <Img src={img} />
            </ImgWrap>
          </Column1>
          <Column2>
            <TextWrapper>
              <TopLine>{topline}</TopLine>
              <Heading>{headline}</Heading>
              <Paragraph>{paragraph}</Paragraph>
              <Price>{price}</Price>
              <Star star={star}></Star>
              <Star2 star2={star2}></Star2>
              <Star3 star3={star3}></Star3>
              <Star4 star4={star4}></Star4>
              <Star5 star5={star5}></Star5>
              <BtnWrap>
                <Button>Contact us</Button>
              </BtnWrap>
            </TextWrapper>
          </Column2>
        </InfoRow>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;
