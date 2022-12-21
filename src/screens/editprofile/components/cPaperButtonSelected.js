import { ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
const CPaperbuttonselected = styled(ListItem)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 24,
  borderRadius: "8px",
  color: "#000",
  padding: "0px",
  backgroundColor: "#ffe9c3",
  "&:hover": {
    backgroundColor: "#ffe9c3",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffe9c3",
  },
});

export default CPaperbuttonselected;
