import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
const CustomTextField = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 8,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "9px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    //   "&:focus": {
    //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    //     borderColor: theme.palette.primary.main,
    //   },
  },
}));
export default CustomTextField;
