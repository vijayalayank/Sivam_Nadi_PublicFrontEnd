import { useState } from "react";
import styles from "./FormPage.module.css";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AstrologyForm = () => {
  const domain = import.meta.env.VITE_DOMAIN;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    dob: "",
    appointment_date: "",
  });

  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.number ||
      !formData.dob ||
      !formData.appointment_date
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (!domain) {
      alert("Server configuration error.");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${domain}/api/users`, formData);

      alert("Appointment booked successfully!");

      setFormData({
        name: "",
        email: "",
        number: "",
        dob: "",
        appointment_date: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>✨ Astrology Appointment ✨</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />

        <PhoneInput
          country={"in"}
          value={formData.number}
          onChange={(phone) =>
            setFormData((prev) => ({
              ...prev,
              number: "+" + phone,
            }))
          }
          enableSearch={true}
          countryCodeEditable={false}
          prefix="+"
          containerStyle={{ width: "100%" }}
          inputProps={{
            required: true,
          }}
        />

          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
          />

          <label>Appointment Date</label>
          <input
            type="date"
            name="appointment_date"
            min={today}
            required
            value={formData.appointment_date}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={styles.button}
            disabled={loading}
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AstrologyForm;