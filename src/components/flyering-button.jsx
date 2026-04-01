import { useDispatch } from "react-redux";
import { locationActions } from "../store/store";

const FlyeringButton = () => {
  const dispatch = useDispatch();

  const locationHandler = () => {
    dispatch(locationActions.editLocation());
  };

  return (
    <button className="glass-btn" onClick={locationHandler}>
      Let's Flyer!
    </button>
  );
};

export default FlyeringButton;
