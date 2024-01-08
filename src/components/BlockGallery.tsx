import React, { useState } from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { slides } from "./data";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import ImageGrid from "./ImageGrid";

const BlockGallery: React.FC = () => {
  const { t } = useTranslation();

  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      <Box
        className="block block--dark block--skewed-right block-showcase"
        padding="6rem 4rem"
        //   bg={useColorModeValue("gray.800", "#16F8B6")}
        //   bg={useColorModeValue("#ACD1B4", "#23214A")}
        bg={useColorModeValue(
          "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
          "#23214A"
        )}
        color="#16F8B6"
        overflow={"hidden"}
      >
        <Box
          className="block__header container"
          textAlign="center"
          // maxWidth="100rem"
          marginBottom="10rem"
        >
          <Text
            className="h2"
            color={useColorModeValue("white", "#16F8B6")}
            marginBottom="2rem"
            fontSize={{ base: "4rem", lg: "6rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            {t("mediaPageTitle")}
          </Text>

          <Text
            className="p"
            color={useColorModeValue("gray.100", "white")}
            //   marginBottom="1rem"
            marginTop="0"
            fontSize={{ base: "2.0rem", lg: "2.5rem" }}
            lineHeight="1.1"
          >
            {t("mediaPageSubTitle")}
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box width="100%">
            <ImageGrid
              data={slides}
              onClick={(currentIndex) => {
                setIndex(currentIndex);
              }}
            />

            <Lightbox
              plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
              captions={{
                showToggle: true,
                descriptionTextAlign: "center",
              }}
              index={index}
              slides={slides}
              open={index >= 0}
              close={() => setIndex(-1)}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlockGallery;
