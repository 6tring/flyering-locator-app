import Grid from "@mui/material/Grid";

const FormTitle = () => {
  return (
    <Grid className="desc-text" sx={{ lineHeight: 1.3 }}>
      Find places to hang flyers and posters for your event by entering the{" "}
      <span className="orng-text">Event Location</span> below, then select from
      the <span className="orng-text">Flyering Site Type</span> menu
      and click <span className="orng-text">Lets Flyer!</span>
    </Grid>
  );
};

export default FormTitle;