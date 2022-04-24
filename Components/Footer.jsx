import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    @Nikhil Malkhede © {new Date().getFullYear()}{"  "}
    Lakshmi Chit Realestate, Inc.
  </Box>
);

export default Footer;
