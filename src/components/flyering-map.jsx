import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const FlyeringMap = () => {
  const apiLocation = useSelector((state) => state.locationReducer.apiLocation);
  return (
    <Grid>
      <iframe
        src={`https://www.google.com/maps/embed/v1/search?key=${import.meta.env.VITE_API_KEY}&q=${apiLocation}&zoom=10`}
        referrerPolicy="no-referrer-when-downgrade"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ position:"absolute", top:0, left: 0 }}
      ></iframe>
    </Grid>
  );
};

export default FlyeringMap;
