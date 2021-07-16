import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn,
  ArrowRight,
  Play,
  HeroBg,
  Btn,
  BtnIcon,
  BtnIcon2,
  HeroCircle,
  HeroCircle2,
  HeroCircle3,
  HeroCircle4,
} from "./HeroElements";

function HeroSection() {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>Start Your Journey With Us And Enjoy Your Trip</HeroH1>
        <HeroP>
          Travel.id provides various and affordable tourist facilities. Trust
          your journey to us. Your satisfaction is our priority. Let's have an
          adventure with Travel.id
        </HeroP>
        <Btn>
          <HeroBtn>
            <BtnIcon>
              <ArrowRight />
            </BtnIcon>
            Explore more
          </HeroBtn>
          <HeroBtn>
            <BtnIcon2>
              <Play />
            </BtnIcon2>
            Watch Video
          </HeroBtn>
        </Btn>
      </HeroContent>

      <HeroBg></HeroBg>

      <HeroCircle></HeroCircle>
      <HeroCircle2></HeroCircle2>
      <HeroCircle3></HeroCircle3>
      <HeroCircle4></HeroCircle4>
    </HeroContainer>
  );
}

export default HeroSection;
