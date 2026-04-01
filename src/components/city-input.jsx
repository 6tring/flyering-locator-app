import { TextField, FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
import { locationActions } from "../store/store";

const CityInput = () => {
  const dispatch = useDispatch();

  const cityHandler = (event) => {
    dispatch(locationActions.editCity(event.target.value));
  };

  return (
    <FormControl>
      <TextField
        label="Event City"
        variant="outlined"
        size="small"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          "& label": { color: "rgba(255,255,255,0.5)", fontFamily: "Catamaran, sans-serif" },
          "& label.Mui-focused": { color: "#f58030" },
          "& .MuiOutlinedInput-root": {
            fontFamily: "Catamaran, sans-serif",
            color: "#fff",
            "& fieldset": { borderColor: "rgba(255,255,255,0.2)", borderRadius: "8px" },
            "&:hover fieldset": { borderColor: "rgba(255,255,255,0.35)" },
            "&.Mui-focused fieldset": { borderColor: "#f58030" },
          },
        }}
        onChange={cityHandler}
      />
      <span className="form-label">Please enter a US city or town</span>
    </FormControl>
  );
};

export default CityInput;
