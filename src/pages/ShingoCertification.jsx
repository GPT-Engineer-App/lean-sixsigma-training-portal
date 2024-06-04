import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";

const ShingoCertification = () => {
  return (
    <Box textAlign="center" p={5}>
      <Heading as="h1" size="xl" mb={5}>
        Shingo Certification
      </Heading>
      <Image src="/path/to/shingo-model.jpg" alt="Shingo Model" />
    </Box>
  );
};

export default ShingoCertification;
