import { Box, useTheme } from "@mui/material";
import { tokens } from "../themes";

// This defines a new functional component named ProgressCircle which takes two optional props: progress and size.
const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  // The hook useTheme is used to get the current theme in the app, which is then assigned to theme constant.
  const theme = useTheme();
  
  // tokens function returns an object with color palettes for primary, blueAccent & greenAccent, based on the palette mode of the current theme.
  const colors = tokens(theme.palette.mode);
  
  // Uses the angle value in degrees for calculating the circle progress.
  const angle = progress * 360;
  
  // Returns a Box component that is drawn as a radial gradient using three different gradients, derived from the colors constant, along with some other styles defined.
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

// Exporting the ProgressCircle component as default export.
export default ProgressCircle;
