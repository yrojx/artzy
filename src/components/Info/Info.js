import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';

import { InfoSection, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './Info.elements';

const Info = ({ 
  primary, 
  lightBg, 
  imgStart, 
  lightTopLine, 
  lightTextDesc, 
  buttonLabel, 
  description, 
  headline, 
  lightText, 
  topLine,
  img,
  alt,
  start, 
}) => {
  return (
    <>
      <InfoSection lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSection>
    </>
  )
}

export default Info;