import { TextField } from "@mui/material";

const Input = ({
  variant,
  placeholder,
  sx,
  value,
  name,
  onChange,
  multiline,
  rows,
  type,
}) => {
  return (
    <TextField
      variant={variant ? variant : "outlined"}
      placeholder={placeholder}
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      multiline={multiline}
      rows={rows}
      sx={{
        width: "100%",
        "& .MuiInputBase-input": {
          transition: "all .5s ease",
          padding: "11.5px 14px",
          border: "1px solid #ffffff14",
          color: "#fff",
          borderRadius: 0,
          "&::placeholder": {
            color: "#B2B7C2",
            fontSize: "1rem",
          },
          "&:focus": {
            border: "1px solid #fff",
            "&::placeholder": {
              color: "#525C76",
            },
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        ...sx,
      }}
    />
  );
};

export default Input;
