import { Button, Heading, HStack, Image } from "@chakra-ui/react";

type PageHeaderProps = {
  title: string;
  buttons: {
    label: string;
    iconSrc: string;
  }[];
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, buttons }) => {
  return (
    <HStack py={8}>
      <HStack>
        <Button variant="ghost" ml="-3">
          <Image src="/arrow-left.svg" alt="Arrow pointing back" />
        </Button>
        <Heading color="neutral.800" as="h1" size="sm" fontWeight="semibold">
          {title}
        </Heading>
      </HStack>
      <HStack flexGrow="1" justifyContent="flex-end">
        {buttons.map((button) => (
          <Button
            key={button.label}
            variant="secondary"
            leftIcon={<Image src={button.iconSrc} alt="" h="4" w="4" />}
          >
            {button.label}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};

export default PageHeader;
