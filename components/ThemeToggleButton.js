import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      <IconButton
        aria-label="toggle theme"
        // colorScheme={useColorModeValue("purple", "orange")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
    </div>
  );
};

export default ThemeToggleButton;
