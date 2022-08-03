import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../griditem";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, title }) => (
  <motion.article
    variants={variants}
    initial="hidden"
    animate="enter"
    exit="exit"
    transition={{ duration: 0.5, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Theo</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
          <link href="/favicon.ico" rel="msapplication" />
        </Head>
      )}
      {children}

      <GridItemStyle />
    </>
  </motion.article>
);

export default Layout;
