import React from "react";
import {
  TestimonialContainer,
  TestimonialWrapper,
  Column1,
  TopLine,
  Heading,
  Paragraph,
  TestimonialBtn,
  Button,
  TestimonialProfil,
  Col1Img,
  Name,
  Circle,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  Column2,
  Rectangle,
  Col2Img,
  Roll,
} from "./TestimonialElements";

const Testimonial = ({
  id,
  topline,
  headline,
  paragraph,
  buttonLabel,
  name,
  circle,
  circle2,
  circle3,
  circle4,
  circle5,
}) => {
  return (
    <TestimonialContainer id={id}>
      <TestimonialWrapper>
        <Column1>
          <Rectangle></Rectangle>
          <Col2Img></Col2Img>
        </Column1>
        <Column2>
          <TopLine>{topline}</TopLine>
          <Heading>{headline}</Heading>
          <Paragraph>{paragraph}</Paragraph>
          <TestimonialBtn>
            <Button>{buttonLabel}</Button>
          </TestimonialBtn>
          <TestimonialProfil>
            <Col1Img></Col1Img>
            <Name>{name}</Name>
          </TestimonialProfil>
          <Roll>
            <Circle circle={circle}></Circle>
            <Circle2 circle2={circle2}></Circle2>
            <Circle3 circle3={circle3}></Circle3>
            <Circle4 circle4={circle4}></Circle4>
            <Circle5 circle5={circle5}></Circle5>
          </Roll>
        </Column2>
      </TestimonialWrapper>
    </TestimonialContainer>
  );
};

export default Testimonial;
