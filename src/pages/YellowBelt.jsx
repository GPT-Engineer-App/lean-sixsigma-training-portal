import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const YellowBelt = () => {
  return (
    <Box p={5}>
      <Heading as="h1">Yellow Belt Training</Heading>
      <Text mt={4}>Outline of Yellow Belt training:</Text>
      <Text mt={2}>1. Introduction to Lean Six Sigma</Text>
      <Text mt={2}>2. Basic Concepts and Tools</Text>
      <Text mt={2}>3. Define Phase</Text>
      <Text mt={2}>4. Measure Phase</Text>
      <Text mt={2}>5. Analyze Phase</Text>
      <Text mt={2}>6. Improve Phase</Text>
      <Text mt={2}>7. Control Phase</Text>
    </Box>
  );
};

export default YellowBelt;
