import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const CustomButton = styled(Button)({
  backgroundColor: "#007BFF",
  color: "var(--white-color)",
  width: "110px",
  height: "30px",
  borderRadius: "5px",
  border: "none",
  textTransform: "none",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#0069d9",
    boxShadow: "none",
  },
});

export const CustomLoadingButton = styled(LoadingButton)({
  backgroundColor: "#007BFF",
  color: "var(--white-color)",
  width: "110px",
  height: "30px",
  borderRadius: "5px",
  border: "none",
  textTransform: "none",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#0069d9",
    boxShadow: "none",
  },
});
