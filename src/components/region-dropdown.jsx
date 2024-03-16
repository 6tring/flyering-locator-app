import { MenuItem, FormControl, FormHelperText, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { locationActions } from "../store/store";

const regions = [
  "AK",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];

const RegionDropdown = () => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.inputRegion);

  const regionHandler = (event) => {
    dispatch(locationActions.editRegion(event.target.value));
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
        value={region}
        defaultValue="Event State"
        renderValue={(value) => (value === "Event State" ? "Event State" : value)}
        onChange={regionHandler}
      >
        {regions.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText className="frmtext" shrink="true" sx={{ mt: 1, ml: 0 }}>
        Select a State
      </FormHelperText>
    </FormControl>
  );
};

export default RegionDropdown;
