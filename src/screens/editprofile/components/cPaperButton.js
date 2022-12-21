import { ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
const CPaperbutton = styled(ListItem)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 24,
  borderRadius: "8px",
  color: "black",
  padding: "0px",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
});

export default CPaperbutton;
