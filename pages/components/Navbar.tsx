import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Image,
} from "@chakra-ui/react";

const menuOptions = [
  { label: "Dashboard", href: "/" },
  { label: "Transactions", href: "/" },
  { label: "Settlements", href: "/" },
];

const Navbar: React.FC = () => {
  return (
    <Box shadow="sm" bg="navbarBg">
      <HStack as={Container} maxW="pageWidth" spacing={8}>
        <Image src="/logo.svg" h="100%" alt="SaltPay" />

        <HStack flexGrow="1" spacing={0}>
          {menuOptions.map((option, i) => (
            <Button
              key={option.label}
              data-active={i === 1 ? "true" : undefined}
            >
              {option.label}
            </Button>
          ))}
        </HStack>

        <HStack>
          <Box p={0.5}>
            <Image src="/cogwheel.svg" alt="Cogwheel" h="icon" w="icon" />
          </Box>
          <Avatar name="Frederico Batista" size="xs" />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
