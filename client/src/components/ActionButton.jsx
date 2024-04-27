import { Button } from "@mui/material";

const ActionButton = ({ lat, lon, action, onClick }) => {
  return (
    <Button onClick={() => onClick(lat, lon, action)} variant="contained">
      Action
    </Button>
  );
};

export default ActionButton;
