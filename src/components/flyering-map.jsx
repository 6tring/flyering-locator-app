import { useSelector } from "react-redux";

const FlyeringMap = () => {
  const apiLocation = useSelector((state) => state.locationReducer.apiLocation);

  return (
    <iframe
      title="Flyering locations map"
      src={`https://www.google.com/maps/embed/v1/search?key=${import.meta.env.VITE_API_KEY}&q=${apiLocation}&zoom=10`}
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
};

export default FlyeringMap;
