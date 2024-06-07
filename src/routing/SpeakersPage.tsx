import React, { useState } from "react";
import { BlockFooter } from "../components/BlockFooter";
import { BlockSpeakerGrid } from "../components/BlockSpeakerGrid";
import { motion } from "framer-motion";
import { Navigationbar } from "../components/Navigationbar";
import { useTranslation } from "react-i18next";

const SpeakersPage: React.FC = () => {
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
        <Navigationbar />
        <BlockSpeakerGrid />
        <BlockFooter />
      </motion.div>
    </>
  );
};
export default SpeakersPage;
