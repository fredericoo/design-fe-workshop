import { Circle, HStack, Stack, Text } from "@chakra-ui/react";

type TimelineItemProps = {
  dateTime: string;
  name: string;
  extra?: string;
  isCurrent?: boolean;
  isFirst?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  dateTime,
  name,
  extra,
  isCurrent,
  isFirst,
}) => {
  return (
    <HStack alignItems="flex-start" lineHeight="shorter">
      <Stack
        h="100%"
        position="relative"
        _before={
          isFirst
            ? undefined
            : {
                zIndex: "1",
                content: "''",
                display: "block",
                w: "2px",
                h: "100%",
                bg: "neutral.400",
                position: "absolute",
                left: "calc(50% - 1px)",
                top: "19px",
              }
        }
      >
        <Circle
          zIndex="2"
          mt="19px"
          size="timelineDot"
          backgroundColor={isCurrent ? "primary.500" : "primary.bg"}
          boxShadow="inset 0 0 0 1.5px var(--chakra-colors-primary-500)"
        />
      </Stack>
      <Stack spacing={1} py={3}>
        <Text color="neutral.700">{dateTime}</Text>
        <Text as="h3" color="neutral.800" fontWeight="semibold">
          {name}
        </Text>
        {extra && <Text>extra</Text>}
      </Stack>
    </HStack>
  );
};

export default TimelineItem;
