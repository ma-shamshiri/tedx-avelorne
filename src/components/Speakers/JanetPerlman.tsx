import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import NavBar2 from "../NavBar2";
import BlockSpeakerProfiles from "../BlockSpeakerProfiles";
import BlockFooter from "../BlockFooter";

import imageSrc from "../../assets/images/Janet.webp";

const JanetPerlman: React.FC = () => {
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
          name="Janet Perlman"
          position="Animator and Children's Book Author"
          imageSrc={imageSrc}
          talkTopic={t("comingSoon")}
        />
        <BlockFooter />
      </motion.div>
    </>
  );
};

export default JanetPerlman;
