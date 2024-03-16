import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { locationActions } from "../store/store";

const FlyeringButton = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.apiLocation);

  const locationHandler = (event) => {
    dispatch(locationActions.editLocation());
  };

  return (
    <Button
      variant="contained"
      size="medium"
      disableRipple
      className="frmtext"      
      sx={{ color:"#ffffff", backgroundColor: "#f2661a", "&:hover": { backgroundColor: "#F3712B" } }}
      onClick={locationHandler}
    >
      Let&#39;s Flyer!
    </Button>
  );
};

export default FlyeringButton;
