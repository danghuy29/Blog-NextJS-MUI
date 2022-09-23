import { Grid } from "@mui/material";
import EventItem from "./EventItem";

interface PropsType {
  eventList: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
  }[];
}
const EventList: React.FC<PropsType> = ({ eventList }) => {
  return (
    <>
      <Grid container spacing={3} component="ul" px={2}>
        {eventList.map((event) => (
          <Grid key={event.id} component="li" lg={3} md={6} sm={12} item>
            <EventItem eventItem={event} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default EventList;
