import { Stack } from "@chakra-ui/react";

type TimelineProps = {
  children: React.ReactNode;
};
const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <Stack spacing={0} flexDirection="column-reverse" overflow="hidden">
      {children}
    </Stack>
  );
};

export default Timeline;
