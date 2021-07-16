import React from "react";
import {
  DestinationBtn,
  DestinationContainer,
  DestinationWrapper,
  Column1,
  TopLine,
  Headline,
  Paragraph,
  Button,
  Column2,
  Card,
  Img,
  CardText,
  CardPrice,
  CardRow,
} from "./DestinationElements";

const Destination = ({
  id,
  topline,
  headline,
  paragraph,
  buttonLabel,
  img,
  img2,
  img3,
  img4,
  cardText,
  cardText2,
  cardText3,
  cardText4,
  cardPrice,
}) => {
  return (
    <>
      <DestinationContainer id={id}>
        <DestinationWrapper>
          <Column1>
            <TopLine>{topline}</TopLine>
            <Headline>{headline}</Headline>
            <Paragraph>{paragraph}</Paragraph>
            <DestinationBtn>
              <Button>{buttonLabel}</Button>
            </DestinationBtn>
          </Column1>
          <Column2>
            <CardRow>
              <Card>
                <Img src={img} />
                <CardText>{cardText}</CardText>
                <CardPrice>{cardPrice}</CardPrice>
              </Card>
              <Card>
                <Img src={img2} />
                <CardText>{cardText2}</CardText>
                <CardPrice>{cardPrice}</CardPrice>
              </Card>
            </CardRow>
            <CardRow>
              <Card>
                <Img src={img3} />
                <CardText>{cardText3}</CardText>
                <CardPrice>{cardPrice}</CardPrice>
              </Card>
              <Card>
                <Img src={img4} />
                <CardText>{cardText4}</CardText>
                <CardPrice>{cardPrice}</CardPrice>
              </Card>
            </CardRow>
          </Column2>
        </DestinationWrapper>
      </DestinationContainer>
    </>
  );
};

export default Destination;
