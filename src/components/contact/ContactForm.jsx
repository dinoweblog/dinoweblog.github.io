import { Box } from "@mui/material";
import {
  IoIosSend,
  primary,
  showErrorNotification,
  showSuccessNotification,
} from "../../app/index";
import { CustomButton } from "../button";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleForm = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fo1nohq",
        "template_nrid5vx",
        form.current,
        "FIBty7MTiwWaKgSmK"
      )
      .then(
        (result) => {
          console.log(result.text);
          showSuccessNotification("Message sent");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          showErrorNotification(error.text);
        }
      );
  };

  const isactive = !formData.name || !formData.email || !formData.message;

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 25,
        marginTop: 25,
        width: "100%",
      }}
    >
      <Input
        placeholder="Your Name"
        name="name"
        type="text"
        onChange={handleForm}
        value={formData.name}
      />
      <Input
        placeholder="E-mail"
        name="email"
        type="email"
        onChange={handleForm}
        value={formData.email}
      />
      <Input
        placeholder="Type your message..."
        name="message"
        type="text"
        multiline
        rows={6}
        sx={{ "& .MuiInputBase-root": { p: 0 } }}
        onChange={handleForm}
        value={formData.message}
      />
      <Box
        sx={{
          button: {
            "&:disabled": {
              color: "#fff",
              opacity: 0.4,
            },
          },
        }}
      >
        <CustomButton
          endIcon={<IoIosSend />}
          style={{
            "&:hover": {
              bgcolor: primary,
            },
            borderRadius: 2,
          }}
          type="submit"
          disabled={isactive}
        >
          Send
        </CustomButton>
      </Box>
    </form>
  );
};

export default ContactForm;
