import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const CustomButton = styled(Button)({
  backgroundColor: "#007BFF",
  color: "var(--white-color)",
  width: "110px",
  height: "30px",
  borderRadius: "5px",
  border: "1px solid #007BFF",
  textTransform: "none",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
});

export const CustomLoadingButton = styled(LoadingButton)({
  backgroundColor: "#007BFF",
  color: "var(--white-color)",
  width: "110px",
  height: "30px",
  borderRadius: "5px",
  border: "1px solid #007BFF",
  textTransform: "none",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
});
