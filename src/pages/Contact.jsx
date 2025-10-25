import { FaPhone, FaGlobe, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div id="Contact">


        <div className="contact-text">
                        <h2 className="about-main-title">Contact</h2>

          <div className="contact-phone">
            <FaPhone />
            <span>Phone Number</span>
            <p>+213 501 234 56 / +90 512 345 67 89 </p>
          </div>
          <div className="contact-email">
            <CiMail />
            <span>Email</span>
            <p>wrstudio@gmail.com</p>
          </div>
          <div className="contact-web">
            <FaGlobe />
            <span>WebSite</span>
            <p>wrstudio.com</p>
          </div>
          <div className="contact-web">
            <FaInstagram />
            <span>Instagram</span>
            <p>@wrstudio</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" name="name" required />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />

            <select name="service" required>
              <option value="" disabled selected>
                Select a Service
              </option>
              <option value="web">Web Development</option>
              <option value="uiux">UI/UX Design</option>
              <option value="branding">Branding</option>
              <option value="seo">SEO & Marketing</option>
            </select>

            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
