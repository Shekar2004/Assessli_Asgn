"use client";

import React, { useState } from "react";
import styles from "./ContactCard.module.css";
import { useFormik } from "formik";
import { contactSchema } from "./schemas";

function ContactCard() {
    const initialValues = {
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
    }

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues,
        validationSchema: contactSchema,
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: (values, action) => {
            const formData = new FormData();
            formData.append("Name", values.Name);
            formData.append("Email", values.Email);
            formData.append("Phone",values.Phone);
            formData.append("Message", values.Message);
      
            fetch(
              "https://script.google.com/macros/s/AKfycbwNV9l4_fYFV6Tv9vKSl5eXzHbPgUYmw1q-3n2gj_TO5ADcrTRKVFFz8F_1Wi4FaZEJBw/exec",
              {
                method: "POST",
                body: formData
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                resetForm();
              })
              .catch((error) => {
                console.log(error);
              });

              action.resetForm();
          },
    });

    console.log(errors);

  return (
    <div className={styles.container}>
      <form className={styles.forms} onSubmit={handleSubmit}>
        <p className={styles.title}>
          <span className={styles.titleGet}>Get</span> in Touch.
        </p>
        <div className={styles.inputs}>
          <input
            value={values.Name}
            type="text"
            id="Name"
            placeholder="Name"
            name="Name"
            className={styles.inputOneField}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {
            touched.Name && errors.Name ? (
                <p className={styles.formError}>{errors.Name}</p>
            ): null
          }
          <input
            value={values.Email}
            type="text"
            id="Email"
            name="Email"
            placeholder="Email"
            className={styles.inputOneField}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {
            touched.Email && errors.Email ? (
                <p className={styles.formError}>{errors.Email}</p>
            ): null
          }
          <input
            value={values.Phone}
            type="tel"
            id="Phone"
            name="Phone"
            placeholder="Phone"
            className={styles.inputOneField}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {
            touched.Phone && errors.Phone ? (
                <p className={styles.formError}>{errors.Phone}</p>
            ): null
          }
          <textarea
            value={values.Message}
            id="Message"
            placeholder="Type your message here...."
            name="Message"
            className={styles.inputTwoField}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {
            touched.Message && errors.Message ? (
                <p className={styles.formError}>{errors.Message}</p>
            ): null
          }
        </div>
        <div className={styles.buttonBox}>
          <button type="submit" className={styles.button}>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default ContactCard;

// https://script.google.com/macros/s/AKfycbwNV9l4_fYFV6Tv9vKSl5eXzHbPgUYmw1q-3n2gj_TO5ADcrTRKVFFz8F_1Wi4FaZEJBw/exec