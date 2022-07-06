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
      <HStack as={Container} maxW="pageWidth" spacing={6}>
        <Image src="/logo.svg" h="24px" alt="SaltPay" />

        <HStack flexGrow="1" spacing={4}>
          {menuOptions.map((option, i) => (
            <Button
              variant="tab"
              key={option.label}
              data-active={i === 1 ? "true" : undefined}
            >
              {option.label}
            </Button>
          ))}
        </HStack>

        <HStack>
          <Box p={0.5}>
            <Image src="/cogwheel.svg" alt="Cogwheel" h="5" w="5" />
          </Box>
          <Avatar
            bg="neutral.300"
            color="neutral.800"
            fontSize="sm"
            fontWeight="semibold"
            name="Frederico Batista"
            size="xs"
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
