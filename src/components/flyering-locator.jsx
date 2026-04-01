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
      <div className="glass-panel">
        <AppTitle />
        <FormTitle />

        <div className="form-section">
          <CityInput />
          <RegionDropdown />
          <SiteTypeDropdown />
        </div>

        <FlyeringButton />

        <div className="map-area">
          <FlyeringMap />
        </div>

        <p className="footer-text">
          Powered by <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Google Maps</a>. Enter a location and site type to discover flyering spots.
        </p>
      </div>
    </div>
  );
};

export default FlyeringLocator;
