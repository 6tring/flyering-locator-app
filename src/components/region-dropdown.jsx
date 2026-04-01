import { MenuItem, FormControl, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { locationActions } from "../store/store";

const regions = [
  "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD",
  "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH",
  "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY",
];

const RegionDropdown = () => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.locationReducer.inputRegion);

  const regionHandler = (event) => {
    dispatch(locationActions.editRegion(event.target.value));
  };

  return (
    <FormControl sx={{ minWidth: 130 }}>
      <Select
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          fontFamily: "Catamaran, sans-serif",
          color: "#fff",
          "& .MuiSvgIcon-root": { color: "rgba(255,255,255,0.5)" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.2)" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.35)" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#f58030" },
        }}
        variant="outlined"
        size="small"
        displayEmpty
        value={region}
        renderValue={(value) => value || <span style={{ color: "rgba(255,255,255,0.5)" }}>State</span>}
        onChange={regionHandler}
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
      >
        {regions.map((r) => (
          <MenuItem key={r} value={r}>
            {r}
          </MenuItem>
        ))}
      </Select>
      <span className="form-label">Select a State</span>
    </FormControl>
  );
};

export default RegionDropdown;
