import { Grid } from "@mui/material";
import AppTitle from "./app-title";
import FormTitle from "./form-title";
import CityInput from "./city-input";
import RegionDropdown from "./region-dropdown";
import SiteTypeDropdown from "./siteType-dropdown";
import FlyeringButton from "./flyering-button";
import FlyeringMap from "./flyering-map";

const FlyeringLocator = () => {
  return (
    <div className="background-image">
      {/* parent container */}
      <Grid sx={{ maxWidth: "xl", mx: { xs: 2, lg: 10, xxl: 12 }, my: 3, pt: 1 }}>
        {/* desktop layout */}
        {/* title row */}
        <Grid item xs={12} sx={{ mt: { xs: 2, md: 4 } }}>
          <AppTitle />
        </Grid>
        {/* parent app components row */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: { xs: 4, lg: 6 } }}
        >
          {/* form column */}
          <Grid item xs={12} lg={3}>
            <Grid container direction="column">
              {/* form elements */}
              <Grid container direction="row">
                <FormTitle />
              </Grid>
              <Grid container direction="row" sx={{ mt: { xs: 3, lg: 4 } }}>
                <CityInput />
              </Grid>
              <Grid container direction="row" sx={{ mt: 2 }}>
                <RegionDropdown />
              </Grid>
              <Grid container direction="row" sx={{ mt: 2 }}>
                <SiteTypeDropdown />
              </Grid>
              <Grid container direction="row" sx={{ mt: { xs: 2, lg: 4 } }}>
                <FlyeringButton />
              </Grid>
            </Grid>
          </Grid>
          {/* Google Maps API column */}
          <Grid item xs={12} lg={9}>
            <Grid
              container
              direction={{ xs: "row", lg: "column" }}
              sx={{ ml: { xs: 0, lg: 5 }, mt: { xs: 4, lg: 1 },  }}
            >
              <Grid
                className="map-div"
                sx={{
                  position: "relative",
                  display: "block",
                }}
              >
                <FlyeringMap />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FlyeringLocator;
