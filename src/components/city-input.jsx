import { TextField, FormControl, FormHelperText } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { locationActions } from "../store/store";

const CityInput = () => {
  
  const dispatch = useDispatch();
  const city = useSelector(state => state.inputCity)

  const cityHandler = (event) => {
    dispatch(locationActions.editCity(event.target.value))
  }

  return (
    <FormControl>
      <TextField
        label="Event City"
        variant="outlined"
        size="small"
        width="100px"
        sx={{
          color: "#000000",
          bgcolor: "#ffffff",
          "& label": {
            color: "#000000"
          },
          "& label.Mui-focused": {
            color: "#000000",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "grey",
            },
            "&:hover fieldset": {
              borderColor: "grey.500",
            },
            "&.Mui-focused fieldset": {
              borderColor: "grey.300",
            },
          },
        }}
        InputLabelProps={{ style: { fontFamily: "Lora, Serif", fontWeight: 500 } }}
        onChange={cityHandler}
      />
      <FormHelperText className="frmtext" shrink="true" sx={{ mt: 1, ml: 0 }}>
        Please enter a US city or town
      </FormHelperText>
    </FormControl>
  );
};

export default CityInput;
