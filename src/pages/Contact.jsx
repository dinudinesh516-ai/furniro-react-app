import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { PiMapPinFill, PiPhoneFill, PiClockFill } from 'react-icons/pi';
import PageBanner from '../components/common/PageBanner';
import FeaturesBar from '../components/common/FeaturesBar';

const contactInfo = [
  { icon: PiMapPinFill, title: 'Address', lines: ['236 5th SE Avenue, New York NY10000, United States'] },
  { icon: PiPhoneFill, title: 'Phone', lines: ['Mobile: +(84) 546-6789', 'Hotline: +(84) 456-6789'] },
  { icon: PiClockFill, title: 'Working Time', lines: ['Monday-Friday: 9:00 - 22:00', 'Saturday-Sunday: 9:00 - 21:00'] },
];

const formFields = [
  { name: 'name', label: 'Your name', placeholder: 'Abc', required: true },
  { name: 'email', label: 'Email address', placeholder: 'Abc@def.com', type: 'email', required: true },
  { name: 'subject', label: 'Subject', placeholder: 'This is an optional' },
];

const emptyForm = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Please enter a valid email';
    if (!form.message.trim()) errs.message = 'Please write a message';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <>
      <PageBanner title="Contact" />

      <section className="contact-section">
        <div className="container">
          <div className="text-center contact-intro">
            <h2>Get In Touch With Us</h2>
            <p>
              For More Information About Our Product &amp; Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>

          <div className="row justify-content-center g-4 g-lg-5">
            <div className="col-md-5 col-lg-4">
              {contactInfo.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="info-item d-flex gap-4">
                  <Icon className="info-icon" />
                  <div>
                    <h3>{title}</h3>
                    {lines.map((line) => <p key={line}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-7 col-lg-5">
              {sent && (
                <Alert variant="success" onClose={() => setSent(false)} dismissible>
                  Thanks! Your message has been sent.
                </Alert>
              )}
              <form onSubmit={handleSubmit} noValidate>
                {formFields.map((f) => (
                  <div key={f.name} className="mb-4">
                    <label htmlFor={f.name} className="c-label">{f.label}</label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type || 'text'}
                      placeholder={f.placeholder}
                      className={`form-control c-input ${errors[f.name] ? 'is-invalid' : ''}`}
                      value={form[f.name]}
                      onChange={handleChange}
                    />
                    {errors[f.name] && <div className="invalid-feedback">{errors[f.name]}</div>}
                  </div>
                ))}
                <div className="mb-4">
                  <label htmlFor="message" className="c-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Hi! i'd like to ask about"
                    className={`form-control c-input ${errors.message ? 'is-invalid' : ''}`}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
                <button type="submit" className="btn-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FeaturesBar />
    </>
  );
}

export default Contact;
