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
        <Button>
          <Image src="/arrow-left.svg" alt="Arrow pointing back" />
        </Button>
        <Heading as="h1" size="lg">
          {title}
        </Heading>
      </HStack>
      <HStack flexGrow="1" justifyContent="flex-end">
        {buttons.map((button) => (
          <Button
            key={button.label}
            leftIcon={<Image src={button.iconSrc} alt="" h="icon" w="icon" />}
          >
            {button.label}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};

export default PageHeader;
