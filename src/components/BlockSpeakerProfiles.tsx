import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import backgroundImg from "../assets/images/speakerbg.webp";
import videoThumbnail from "../assets/images/videoThumbnail.webp";

import SpeakerProfileCard from "./SpeakerProfileCard";

interface BlockSpeakerProfilesProps {
  name: string;
  position: string;
  talkTopic: string;
  imageSrc: string;
}

const BlockSpeakerProfiles: React.FC<BlockSpeakerProfilesProps> = ({
  name,
  position,
  talkTopic,
  imageSrc,
}) => {
  const { t } = useTranslation();

  return (
    <Flex
      direction={{ base: "column", md: "column", lg: "row" }}
      height={{ base: "auto", lg: "100vh" }}
      width="100%"
      overflow="hidden"
      position="relative"
    >
      {/* Left Section */}
      <Box
        className="left-section"
        flex="1.5"
        backgroundColor={useColorModeValue("#F1F1F1", "black")}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        minHeight="100%"
        marginTop={{ lg: "-30rem" }}
      >
        {/* Speaker Profile Card */}
        <SpeakerProfileCard
          imageSrc={imageSrc}
          name={name}
          position={position}
          talkTopic={talkTopic}
        />
      </Box>

      {/* Right Section */}
      <Box
        className="right-section"
        flex="3"
        position="relative"
        overflow="hidden"
      >
        <Image
          className="background-image"
          src={backgroundImg}
          alt="Background Image"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
        />

        <Box
          className="video_image_outer_container"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={{ base: "90%", lg: "71rem" }}
          zIndex="1"
          overflow="hidden"
          borderRadius="2rem"
          boxShadow="0 0 30px 1px black"
        >
          <Box
            className="video_image_inner_container"
            width="100%"
            height="100%"
            position="relative"
          >
            <Image
              className="vide_thumbnail"
              src={videoThumbnail}
              alt="Video Thumbnail Image"
              objectFit="cover"
              opacity="0.5"
            />
            <Box
              className="title_container"
              display="flex"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              bg="white"
              opacity="0.6"
              justifyContent="center"
              alignItems="center"
            >
              <VStack>
                <Text
                  className="title"
                  fontSize={{ base: "3rem", lg: "5rem" }}
                  fontWeight="bold"
                  color={useColorModeValue("black", "black")}
                >
                  {t("videoThumbnailTitle")}
                </Text>
                <Text
                  className="title"
                  fontSize={{ base: "1.8rem", lg: "3rem" }}
                  fontWeight="bold"
                  color={useColorModeValue("black", "black")}
                >
                  {t("videoThumbnailSubTitle")}
                </Text>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default BlockSpeakerProfiles;
