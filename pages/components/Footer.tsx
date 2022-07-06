import { HStack, Link, Text } from "@chakra-ui/react";

const footerItems = ["Privacy Policy", "Terms & Conditions", "Help Centre"];

const Footer: React.FC = () => {
  return (
    <HStack py={6} justifyContent="center">
      {footerItems.map((item) => (
        <Link key={item} fontSize="sm">
          {item}
        </Link>
      ))}
      <Text color="neutral.600" fontSize="sm">
        Copyright © 2022 SaltPay Co. All rights reserved.
      </Text>
    </HStack>
  );
};

export default Footer;
