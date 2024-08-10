import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
          Enthusiastic and detail-oriented Software Developer currently pursuing a degree in Blockchain
Development at George Brown College. Eager to apply my skills in full-stack web development, cloud
technologies, and smart contract programming in a dynamic co-op role at NexGen. Passionate about
learning, exploration, and innovation, I aim to contribute to creating innovative solutions that enhance
customer experiences and solve challenging problems.
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create dApps and web apps from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, TypeScript, Python, Node js, Mongo DB,NestJs, Solidity, Hyperledger Fabric/Aeris/Indy ,AWS EC2, AWS Lambda, AWS RDS, Docker, Kubernetes, Git and GitHub and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="Jatin-Deswal-Resume"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
