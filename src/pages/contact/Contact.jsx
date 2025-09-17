import ContactUs from "./sections/ContactUs";
import Map from "../../components/reusable/Map";

function Contact({container}) {
  return (
    <div className={`${container}  my-16`}>
      <ContactUs />
      <Map />
    </div>
  );
}

export default Contact;
