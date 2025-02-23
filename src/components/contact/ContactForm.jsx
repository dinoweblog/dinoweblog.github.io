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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForm = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Email validation regex
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      showErrorNotification("Name is required");
      return false;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      showErrorNotification("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      showErrorNotification("Message is required");
      return false;
    }
    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_fo1nohq",
        "template_nrid5vx",
        form.current,
        "FIBty7MTiwWaKgSmK"
      );

      console.log(result.text);
      showSuccessNotification("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error.text);
      showErrorNotification(error.text || "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isactive = !formData.name || !formData.email || !formData.message || isSubmitting;

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
        disabled={isSubmitting}
      />
      <Input
        placeholder="E-mail"
        name="email"
        type="email"
        onChange={handleForm}
        value={formData.email}
        disabled={isSubmitting}
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
        disabled={isSubmitting}
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
          {isSubmitting ? "Sending..." : "Send"}
        </CustomButton>
      </Box>
    </form>
  );
};

export default ContactForm;