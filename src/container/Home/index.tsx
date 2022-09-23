import { Box } from "@mui/material";
import { brown } from "@mui/material/colors";
import EventList from "@src/components/Events/EventsList";
import { getAllEvents } from "@src/constants/dummyData";
import { Fragment } from "react";
const HomeContainer = () => {
  const data = getAllEvents();
  return (
    <Fragment>
      <Box minHeight="100vh" display="flex" alignItems="center">
        <Box bgcolor={brown[100]} py={10}>
          <EventList eventList={data} />
        </Box>
      </Box>
    </Fragment>
  );
};
export default HomeContainer;
