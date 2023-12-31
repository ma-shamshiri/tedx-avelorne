import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsClockFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { CgEventbrite } from "react-icons/cg";
import { GoLocation } from "react-icons/go";

import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

import hallBuilding from "../assets/images/hallbuilding.webp";
import hallSalon from "../assets/images/hallsalon.webp";
import mcgill from "../assets/images/mcgill.webp";

const BlockEvent: React.FC = () => {
  useEffect(() => {
    window.onload = () => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    };
  }, []);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleUnhover1 = () => {
    setIsHovered1(false);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleUnhover2 = () => {
    setIsHovered2(false);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleUnhover3 = () => {
    setIsHovered3(false);
  };

  const { t } = useTranslation();

  return (
    <Box
      className="block block--white"
      bg={useColorModeValue("#EFE8D6", "#23214A")}
      // bg={useColorModeValue("#EFE8D6", "#9DAF89")}
      // color="#7b858b"
      // width="100vh"
      // minWidth="90rem"
      overflow={"hidden"}
    >
      <Box
        className="block container block-domain aos-animate"
        padding="6rem 2rem"
        paddingBottom={{ base: "13rem", lg: "17rem" }}
        // maxWidth="1140px"
        margin="0 auto"
        width="100%"
        // minWidth="100rem"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Box
          className="block__header aos-animate"
          textAlign="center"
          width="100%"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <Text
            className="h2"
            color={useColorModeValue("#f04e2d", "gray.100")}
            // color={useColorModeValue("#f04e2d", "#354E41")}
            marginBottom="1rem"
            marginTop="0"
            fontSize={{ base: "5.5rem", lg: "7rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            {t("eventPageTitle")}
          </Text>
          <Text
            className="p"
            color={useColorModeValue("red", "gray.200")}
            // color={useColorModeValue("red", "#3B5B40")}
            fontSize={{ base: "2.2rem", lg: "2.8rem" }}
            // fontWeight="bold"
            marginBottom="6rem"
          >
            {t("eventPageSubTitle")}
          </Text>
        </Box>
        <Flex
          className="block__body aos-animate"
          justifyContent="center"
          width="100%"
          data-aos="fade-up"
          data-aos-duration="500"
          // margin="0 1rem"
        >
          <Box
            width={{ base: "100%", lg: "100rem" }}
            height={{ base: "40rem", lg: "20rem" }}
            border="0.2rem solid #3263a8"
            _dark={{ border: "0.2rem solid #3263a8" }}
            borderRadius={"3rem"}
            bg={useColorModeValue("#EFE8D6", "#EFE8D6")}
            // bg={useColorModeValue("#EFE8D6", "#CCD6C0")}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box className="grid grid--1x3" margin="10rem 15rem">
              <Grid
                display="grid"
                templateRows={["1fr", null, null, "repeat(2, 1fr)"]}
                templateColumns={["1fr", null, null, "repeat(3, 1fr)"]}
                rowGap={{ base: "10rem", lg: "3rem" }}
                columnGap="7rem"
                color="#3263a8"
                marginLeft={{ lg: "-3rem" }}
              >
                <Flex
                  //   width="50px"
                  //   height="50px"
                  marginTop="-6rem"
                  justifyContent="center"
                  alignItems="center"
                  visibility={{ base: "hidden", lg: "visible" }}
                  display={{ base: "none", lg: "inherit" }}
                >
                  <BsFillCalendarCheckFill
                    size="35px"
                    color="#3263a8"
                    opacity="0.5"
                  />
                </Flex>
                <Flex
                  //   width="50px"
                  //   height="50px"
                  marginTop="-6rem"
                  justifyContent="center"
                  alignItems="center"
                  visibility={{ base: "hidden", lg: "visible" }}
                  display={{ base: "none", lg: "inherit" }}
                >
                  <GoLocation size="35px" color="#3263a8" opacity="0.5" />
                </Flex>
                <Flex
                  //   width="50px"
                  //   height="50px"
                  marginTop="-6rem"
                  justifyContent="center"
                  alignItems="center"
                  visibility={{ base: "hidden", lg: "visible" }}
                  display={{ base: "none", lg: "inherit" }}
                >
                  <BsClockFill size="35px" color="#3263a8" opacity="0.5" />
                </Flex>
                <Flex
                  //   width="50px"
                  width="100%"
                  height="50px"
                  marginTop="-2rem"
                  justifyContent="center"
                  alignItems="center"
                >
                  <HStack alignItems="center">
                    <Text fontSize="10rem">30</Text>
                    <VStack lineHeight={"1.2"}>
                      <Text fontSize="3rem">SAT</Text>
                      <Text fontSize="3rem">SEP</Text>
                    </VStack>
                  </HStack>
                </Flex>
                <Flex
                  //   width="50px"
                  width="40rem"
                  height="50px"
                  marginTop="-2rem"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                >
                  <VStack>
                    <Text
                      fontSize="3.4rem"
                      fontWeight="bold"
                      lineHeight="1.5"
                      textTransform="capitalize"
                    >
                      chancellor day hall
                    </Text>
                    <Text
                      textTransform="capitalize"
                      fontSize={{ base: "1.6rem" }}
                    >
                      3644 Peel Street, Montréal, QC, H3A-1W9
                    </Text>
                  </VStack>
                </Flex>
                <Flex
                  width="100%"
                  // width="50px"
                  height="50px"
                  marginTop="-2rem"
                  justifyContent="center"
                  alignItems="center"
                  marginBottom={10}
                  paddingBottom={0}
                >
                  <VStack>
                    <Text fontSize="3rem" fontWeight="bold">
                      10.00
                    </Text>
                    <Text fontSize="3rem" fontWeight="bold">
                      18.00
                    </Text>
                  </VStack>
                </Flex>
              </Grid>
            </Box>
          </Box>
        </Flex>
        <Flex
          className="block__button aos-animate"
          justifyContent="center"
          width="100%"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <HStack>
            <Link
              position="relative"
              className="btn btn--secondary btn--block"
              href="https://www.eventbrite.ca/e/tedxavelorne-you-choose-tickets-690380846697?aff=oddtdtcreator"
              target="_blank"
              border="2px solid #F04E2D"
              borderRadius="15px"
              cursor="pointer"
              fontSize={{ base: "2.5rem", lg: "2.5rem" }}
              margin="2rem 1rem"
              padding="2rem"
              textAlign="center"
              textTransform="capitalize"
              whiteSpace="nowrap"
              bg="#f04e2d"
              color="#fff"
              boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
              display="inline-block"
              width="25rem"
              _hover={{
                border: "0.2rem solid #f75540",
                bg: "#EFE8D6",
                // bg: "#CCD6C0",
                color: "#f04e2d",
                boxShadow:
                  "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
              }}
              transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
            >
              <HStack justifyContent="center" alignItems="center">
                <Box position="absolute" top="0.5rem" left="0.5rem">
                  <CgEventbrite size="25px" color="white" opacity="1" />
                </Box>
                <Text marginLeft="1rem">{t("getTicket")}</Text>
              </HStack>
            </Link>
          </HStack>
        </Flex>

        <Box className="grid grid--1x3" marginTop="5rem">
          <Box maxWidth="1400px" margin="0 auto">
            <Grid
              display="grid"
              templateColumns={["1fr", null, null, "repeat(3, 1fr)"]}
              columnGap="5rem"
              rowGap={{ base: "5rem" }}
            >
              <Box
                className="aos-animate"
                background="white"
                borderRadius="5%"
                position="relative"
                onMouseEnter={handleHover1}
                onMouseLeave={handleUnhover1}
                overflow="hidden"
                data-aos="fade-right"
                data-aos-duration="500"
                boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1), -10px 10px 30px 0.5px gray"
              >
                <Box
                  position="absolute"
                  top={isHovered1 ? "0" : "100%"}
                  left="0"
                  width="100%"
                  height="100%"
                  background="white"
                  opacity={isHovered1 ? 0.5 : 0}
                  transition="top 0.3s ease-in-out, opacity 0.3s ease-in-out"
                  borderRadius="5%"
                >
                  <Text
                    textAlign="center"
                    fontSize={{ base: "6rem", lg: "4rem" }}
                    fontWeight="bold"
                    color="#000"
                    opacity="1"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    McGill University
                  </Text>
                </Box>
                <Image
                  src={mcgill}
                  width="100%"
                  height="100%"
                  // boxShadow="0 0 30px 0.5px black"
                  // boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1), -10px 10px 30px 0.5px gray"
                  // boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                  objectFit="cover"
                  borderRadius="5%"
                  // _hover={{ transform: "scale(1.03)" }}
                  // transition="transform 0.2s ease-out"
                />
              </Box>
              <Box
                className="aos-animate"
                background="white"
                borderRadius="5%"
                position="relative"
                onMouseEnter={handleHover2}
                onMouseLeave={handleUnhover2}
                overflow="hidden"
                data-aos="fade-up"
                data-aos-duration="500"
                boxShadow="0 7px 30px 0.5px black"
              >
                <Box
                  position="absolute"
                  top={isHovered2 ? "0" : "100%"}
                  left="0"
                  width="100%"
                  height="100%"
                  background="white"
                  opacity={isHovered2 ? 0.5 : 0}
                  transition="top 0.3s ease-in-out, opacity 0.3s ease-in-out"
                  borderRadius="5%"
                >
                  <Text
                    textAlign="center"
                    fontSize={{ base: "6rem", lg: "4rem" }}
                    fontWeight="bold"
                    color="#000"
                    opacity="1"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    Chancellor Day Hall
                  </Text>
                </Box>
                <Image
                  src={hallBuilding}
                  width="100%"
                  height="100%"
                  boxShadow="0 7px 30px 0.5px black"
                  objectFit="cover"
                  borderRadius="5%"
                  // _hover={{ transform: "scale(1.03)" }}
                  // transition="transform 0.2s ease-out"
                />
              </Box>
              <Box
                className="aos-animate"
                background="white"
                borderRadius="5%"
                position="relative"
                onMouseEnter={handleHover3}
                onMouseLeave={handleUnhover3}
                overflow="hidden"
                data-aos="fade-left"
                data-aos-duration="500"
                boxShadow="5px 5px 30px 0px black"
              >
                <Box
                  position="absolute"
                  top={isHovered3 ? "0" : "100%"}
                  left="0"
                  width="100%"
                  height="100%"
                  background="white"
                  opacity={isHovered3 ? 0.5 : 0}
                  transition="top 0.3s ease-in-out, opacity 0.3s ease-in-out"
                  borderRadius="5%"
                >
                  <Text
                    textAlign="center"
                    fontSize={{ base: "6rem", lg: "4rem" }}
                    fontWeight="bold"
                    color="#000"
                    opacity="1"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    Moot Court
                  </Text>
                </Box>
                <Image
                  src={hallSalon}
                  width="100%"
                  height="100%"
                  // boxShadow="5px 5px 30px 0px black"
                  objectFit="cover"
                  borderRadius="5%"
                  // _hover={{ transform: "scale(1.03)" }}
                  // transition="transform 0.2s ease-out"
                />
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlockEvent;
