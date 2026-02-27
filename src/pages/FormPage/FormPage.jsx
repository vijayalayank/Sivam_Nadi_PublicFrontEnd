import { useState } from "react";
import styles from "./FormPage.module.css";
import axios from "axios";

const AstrologyForm = () => {
  const domain = import.meta.env.VITE_DOMAIN;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
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

    console.log(formData);

    if (!domain) {
      alert("Server configuration error. Please contact admin.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${domain}/api/users`,
        formData
      );

      console.log(response.data);
      alert("Appointment booked successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        dob: "",
        appointment_date: "",
      });

    } catch (error) {
      console.error("Submission error:", error);
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

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            value={formData.mobile}
            onChange={handleChange}
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