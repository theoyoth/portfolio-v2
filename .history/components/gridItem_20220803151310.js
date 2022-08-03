import { Box } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/Projects.module.css";
import { Global } from "@emotion/react";

export const ProjectItem = ({ children, title, thumbnail, href }) => {
  return (
    <Box border borderWidth="1px" borderColor="white">
      <Image src={thumbnail} alt={title} className={styles.thumbnail} />
    </Box>
  );
};

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
