import { useState } from "react";

function Enquire() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [budget, setBudget] = useState(0);
  const [message, setMessage] = useState("");

  const handleWhatsAppButtonClick = () => {
    const phoneNumber = "8447488739";
    const whatsappMessage = `Hi, this is ${name}. My email is ${email},my phone number is ${number} and I/We have a budget of ${budget}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Open the WhatsApp URL
    if (name && email && number && budget && message) window.open(whatsappURL);
    else alert("enter all fields");
  };

  return (
    <section className="enquire">
      <div className="enquire-container">
        <form action="">
          <div className="form-container">
            <label className="label fullname">
              <h2>name</h2>
              <input
                type="text"
                placeholder="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="label email-id">
              <h2>email</h2>
              <input
                type="email"
                placeholder="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="label phone-number">
              <h2>number</h2>
              <input
                type="text"
                placeholder="phone number"
                id="phone-num"
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <label className="label budget">
              <h2>budget</h2>
              <select onChange={(e) => setBudget(e.target.value)}>
                <option value="fruit"> upto 10,000</option>

                <option value="vegetable">10,000 - 20,0000</option>

                <option value="meat">above 20,000</option>
              </select>
            </label>
            <label className="label msg">
              <h2>project details</h2>
              <textarea
                placeholder="detailed description of the project"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button
            type="button"
            onClick={handleWhatsAppButtonClick}
            id="whatsapp-btn"
            className="whatsapp"
          >
            Send on Whatsapp
          </button>
        </form>
        <div className="text">
          <h1>Get in touch</h1>
          <p>
            Prefer email? Sounds good. I’m over at{" "}
            <span>
              <a href="mailto:div.naudiyal@gmail.com">div.naudiyal@gmail.com</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Enquire;
