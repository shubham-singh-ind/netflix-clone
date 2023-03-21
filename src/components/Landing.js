import styled from "styled-components";
import { Container } from "./common/Container";
import Display from "./common/Display";
import Header from "./common/Header";

const Landing = (props) => {
  return (
    <Container>
      <Header />
      <GetStartedBG></GetStartedBG>
      <GetStarted>
        <h1>Unlimited movies, TV Shows and more.</h1>
        <h2 className="subHeading subHeading1">
          Watch anywhere. Cancel anytime.
        </h2>
        <h2 className="subHeading subHeading2">
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <SignUp>
          <input type="text" placeholder="Email address" autoFocus={true} />
          <button>Get Started &gt;</button>
        </SignUp>
      </GetStarted>
      <DisplayContainer>
        <Display
          heading={"Enjoy on your TV."}
          subHeading={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          mediaType="imageVideo"
          mediaUrl={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
          }
        />
        <Display
          heading={"Download your shows to watch offline."}
          subHeading={
            "Save your favourites easily and always have something to watch."
          }
          displayType="mediaFirst"
          mediaType={"imageVideo"}
          imageHolder="images/girl.jpg"
        />
        <Display
          heading={"Watch everywhere."}
          subHeading={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          }
          mediaType={"imageVideo"}
          mediaUrl={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
          }
        />
        <Display
          heading={"Create profiles for children."}
          subHeading={
            "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          }
          displayType="mediaFirst"
          mediaType={"image"}
          mediaUrl="images/children.png"
        />
      </DisplayContainer>
    </Container>
  );
};

const GetStarted = styled.div`
  height: 30rem;
  position: absolute;
  top: 8rem;
  left: 0;
  right: 0;
  z-index: -1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .subHeading {
    text-align: center;
  }
  .subHeading2 {
    margin: 20px 0px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const GetStartedBG = styled.div`
  background: url(images/intro.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 40rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -2;
  filter: brightness(0.4);
`;

const SignUp = styled.div`
  margin-top: 3px;
  flex-wrap: wrap;
  input {
    padding: 15px 15px;
    border-radius: 5px;
    margin-right: 5px;
    border: 1px solid white;
    color: white;
    width: 20rem;
    font-size: 15px;
    margin: 5px;
    background-color: transparent;
    &::placeholder {
      color: white;
    }
  }
  button {
    padding: 15px 15px;
    color: white;
    background: var(--netflix-red);
    border-radius: 5px;
    border: none;
    width: 10rem;
    font-weight: bold;
    font-size: 17px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    input {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;

const DisplayContainer = styled.div`
  position: absolute;
  top: 40rem;
`;
export default Landing;
