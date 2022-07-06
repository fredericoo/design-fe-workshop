import { Stack, Text } from "@chakra-ui/react";

type CardProps = {
  label: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ label, children }) => {
  return (
    <Stack
      p={4}
      border="1px solid"
      borderColor="border"
      borderRadius="md"
      bg="white"
    >
      <Text fontSize="md" color="neutral.500">
        {label}
      </Text>
      {children}
    </Stack>
  );
};

export default Card;
