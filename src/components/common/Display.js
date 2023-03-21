import styled from "styled-components";
import { Container } from "./Container";
import Player from "./Player";

const Display = ({
  heading,
  subHeading,
  mediaUrl,
  imageHolder = "images/tv.png",
  mediaType,
  displayType = "contentFirst",
}) => {
  return (
    <DisplayContainer>
      {displayType === "mediaFirst" ? (
        <>
          {mediaType === "imageVideo" && (
            <MediaContainer>
              <Media src={imageHolder}></Media>
              <Player url={mediaUrl} />
            </MediaContainer>
          )}
          {mediaType === "image" && <Media src={mediaUrl}></Media>}
          <Content>
            <h1>{heading}</h1>
            <h2>{subHeading}</h2>
          </Content>
        </>
      ) : (
        <>
          <Content>
            <h1>{heading}</h1>
            <h2>{subHeading}</h2>
          </Content>
          {mediaType === "imageVideo" && (
            <MediaContainer>
              <Media src={imageHolder}></Media>
              <Player url={mediaUrl} />
            </MediaContainer>
          )}
          {mediaType === "image" && <Media src={mediaUrl}></Media>}
        </>
      )}
    </DisplayContainer>
  );
};

export default Display;

const DisplayContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
  color: white;
  margin: 10px 0px;
  @media (max-width: 888px) {
    flex-wrap: wrap;
    h1,
    h2 {
      text-align: center;
    }
  }
`;
const Content = styled.div``;
const Media = styled.img`
  height: 20rem;
`;
const MediaContainer = styled.div`
  display: flex;
  position: relative;
  video {
    position: absolute;
    width: 19rem;
    left: 59px;
    top: 67px;
  }
`;
