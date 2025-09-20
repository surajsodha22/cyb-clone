import ContactUs from "./sections/ContactUs";
import Map from "../../components/reusable/Map";

function Contact({container}) {
  return (
    <div className={`${container}  my-72`}>
      <ContactUs />
      <Map />
    </div>
  );
}

export default Contact;
