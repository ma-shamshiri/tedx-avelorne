import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import NavBar2 from "../NavBar2";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import BlockFooter from "../BlockFooter";

import imageSrc from "../../assets/images/Flore.webp";

const FloreDeshayes: React.FC = () => {
  const { t } = useTranslation();

  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <NavBar2 />
        <BlockSpeakerProfiles
          name="Flore Deshayes"
          position="Social worker"
          imageSrc={imageSrc}
          talkTopic={t("comingSoon")}
          videoSrc=""
          // videoSrc="https://www.dailymotion.com/embed/video/x8wkz00"
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default FloreDeshayes;
