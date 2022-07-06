import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
import Card from "./components/Card";
import PageHeader from "./components/PageHeader";
import Timeline from "./components/Timeline";
import TimelineItem from "./components/TimelineItem";

const Home: NextPage = () => {
  return (
    <Container maxW="pageWidth">
      <PageHeader
        title="Transaction Details"
        buttons={[
          { label: "Download", iconSrc: "/download.svg" },
          { label: "Help", iconSrc: "/question.svg" },
        ]}
      />
      <SimpleGrid columns={3} gap="grid">
        <SimpleGrid gridColumn={"1 / span 2"} columns={2} gap="grid">
          <Card label="Date">
            <Heading size="sm" color="neutral.900">
              22 Jun 2020, 17:14
            </Heading>
          </Card>
          <Card label="Card">
            <Heading size="sm" color="neutral.900">
              Mastercard 4657
            </Heading>
          </Card>
          <Card label="Gross Amount">
            <Heading size="sm" color="neutral.900">
              £1.338,00
            </Heading>
          </Card>
          <Card label="Terminal">
            <Heading size="sm" color="neutral.900">
              t192739271
            </Heading>
          </Card>
          <Card label="Timeline">
            <Timeline>
              <TimelineItem
                name="Created"
                dateTime="20 Mar 2022, 23:58:03"
                isFirst
              />
              <TimelineItem name="Processed" dateTime="20 Mar 2022, 23:58:03" />
              <TimelineItem name="Captured" dateTime="20 Mar 2022, 23:58:03" />
              <TimelineItem
                name="Partial Refund"
                dateTime="24 Mar 2022, 08:07:23"
                extra="12.300,30€"
                isCurrent
              />
            </Timeline>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
