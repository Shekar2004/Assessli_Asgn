// Importing Yup for schema validation
import * as Yup from "yup";

// Defining the contact form schema using Yup
export const contactSchema = Yup.object({
    // Validation for Name field
    Name: Yup.string().min(2).max(50).required("Please enter your name"),

    // Validation for Email field
    Email: Yup.string().email().required("Please enter valid email"),

    // Validation for Phone field
    Phone: Yup.string().matches(/^\d{10}$/,"Phone number must be 10 digits").required("Please enter your phone number"),

    // Validation for Message field
    Message: Yup.string().min(2).required("Please enter your message"),
});
