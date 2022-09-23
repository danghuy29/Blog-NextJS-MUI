import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
interface PropsType {
  eventItem: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
  };
}
const EventItem: React.FC<PropsType> = ({ eventItem }) => {
  const { title, description, location, date, image, id } = eventItem;
  const convertDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formatLocation = location.replace(", ", "\n");
  return (
    <>
      <Card sx={{ borderRadius: 4 }}>
        <Box sx={{ cursor: "pointer", width: "100%" }}>
          <Link href={`/events/${id}`}>
            <Image src={image} alt={title} width="100%" height="100%" />
          </Link>
        </Box>
        <CardContent>
          <Typography
            variant="h6"
            component="h1"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {title}
          </Typography>
          <Typography paragraph textAlign="justify">
            {description}
          </Typography>
          <Typography component="address">{formatLocation}</Typography>
          <Typography component="time">{convertDate}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default EventItem;
