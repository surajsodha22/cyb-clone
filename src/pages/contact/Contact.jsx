import ContactUs from "./sections/ContactUs";
import Map from "../../components/reusable/Map";

function Contact({container}) {
  return (
    <div className={`${container}`}>
      <ContactUs />
      <Map />
    </div>
  );
}

export default Contact;
