import { MenuItem, FormControl, Select } from "@mui/material";
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
  const siteType = useSelector((state) => state.locationReducer.inputSiteType);

  const typeHandler = (event) => {
    dispatch(locationActions.editType(event.target.value));
  };

  return (
    <FormControl sx={{ minWidth: 170 }}>
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
        value={siteType}
        renderValue={(value) => value || <span style={{ color: "rgba(255,255,255,0.5)" }}>Site Type</span>}
        onChange={typeHandler}
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
      >
        {siteTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <span className="form-label">Select a Flyering Site Type</span>
    </FormControl>
  );
};

export default SiteTypeDropdown;
