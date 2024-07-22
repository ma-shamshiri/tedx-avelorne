import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { BlockFooter } from "../components/BlockFooter";
import { BlockHero2023 } from "../components/BlockHero2023";
import { BlockScrollingTeamImage } from "../components/BlockScrollingTeamImage";
import { BlockSponsors } from "../components/BlockSponsors";
import { Navigationbar } from "../components/Navigationbar";
import { PageTransition } from "../components/PageTransition";
import { PageTransition2 } from "../components/PageTransition2";

const Event2023Page: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <Navigationbar />
        <BlockHero2023 />
        <BlockScrollingTeamImage />
        <BlockSponsors />
        <BlockFooter />
      </motion.div>
    </>
  );
};

// export default PageTransition(Event2023Page);
// export default PageTransition2(Event2023Page);
export default Event2023Page;
