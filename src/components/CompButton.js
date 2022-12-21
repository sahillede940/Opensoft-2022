import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
const Compbutton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  borderRadius: "8px",
  color: "white",
  padding: "3px ",
  backgroundColor: "#7F265B",
  "&:hover": {
    backgroundColor: "#7F265B",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#7F265B",
  },
});

export default Compbutton;
