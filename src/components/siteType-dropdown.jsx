import { MenuItem, FormControl, FormHelperText, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { locationActions } from "../store/store";

const siteTypes = [
  "Libraries",
  "Community Centers",
  "Music Stores",
  "Instrument Stores",
  "Bookstores",
  "Art Supply Stores",
  "Coffee Shops",
  "Cafes",
];

const SiteTypeDropdown = () => {
  const dispatch = useDispatch();
  const siteType = useSelector((state) => state.inputSiteType);

  const typeHandler = (event) => {
    dispatch(locationActions.editType(event.target.value));
  };

  return (
    <FormControl sx={{ minWidth: 150 }}>
      <Select
        sx={{
          color: "#000000",
          bgcolor: "#ffffff",
          fontFamily: "Lora, Serif",
          fontWeight: 500,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey.500",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey.300",
          },
        }}
        variant="outlined"
        size="small"
        InputLabelProps={{
          shrink: false,
        }}
        displayEmpty
        value={siteType}
        defaultValue="Site Type"
        renderValue={(value) => (value === "Site Type" ? "Site Type" : value)}
        onChange={typeHandler}
      >
        {siteTypes.map((siteType) => (
          <MenuItem key={siteType} value={siteType}>
            {siteType}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText className="frmtext" shrink="true" sx={{ mt: 1, ml: 0 }}>
        Select a Flyering Site Type
      </FormHelperText>
    </FormControl>
  );
};

export default SiteTypeDropdown;
