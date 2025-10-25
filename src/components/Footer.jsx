import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About / Logo */}
        <div style={styles.section}>
          <h2 style={styles.logo}>Codevnium</h2>
          <p style={styles.text}>
            Transforming visions into lasting digital impact. We create modern, scalable, and user-focused digital products.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="#Home" style={styles.link}>Home</a></li>
            <li><a href="#About" style={styles.link}>About</a></li>
            <li><a href="#Services" style={styles.link}>Services</a></li>
            <li><a href="#Contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact</h3>
          <p style={styles.text}>Email: contact@wrstudio.com</p>
          <p style={styles.text}>Phone: +123 456 7890</p>
        </div>

        {/* Social Icons */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Follow Us</h3>
          <div style={styles.social}>
            <a href="#" style={styles.icon}><FaFacebookF /></a>
            <a href="#" style={styles.icon}><FaTwitter /></a>
            <a href="#" style={styles.icon}><FaLinkedinIn /></a>
            <a href="#" style={styles.icon}><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        &copy; {new Date().getFullYear()} Codevnium. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#0f0c29",
    color: "#ffffff",
    paddingTop: "60px",
    paddingBottom: "20px",
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
    padding: "0 10%",
  },
  section: {
    flex: "1 1 220px",
    minWidth: "220px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#00bfa6",
    marginBottom: "15px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#ffffff",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#d1d1d1",
    margin: "5px 0",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#d1d1d1",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
    transition: "color 0.3s",
  },
  social: {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  },
  icon: {
    color: "#00bfa6",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  bottom: {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "14px",
    color: "#a0a0a0",
  },
};

export default Footer;
