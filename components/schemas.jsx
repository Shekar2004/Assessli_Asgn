import * as Yup from "yup";

export const contactSchema = Yup.object({
    Name: Yup.string().min(2).max(50).required("Please enter your name"),
    Email: Yup.string().email().required("Please enter valid email"),
    Phone: Yup.string().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Please enter your phone number"),
    Message: Yup.string().min(2).required("Please enter your message"),
});