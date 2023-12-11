const ContactForm = () => {
  return (
    <section className="section-padded-md-top bg-background">
      <div className="container-md">
        <div className="center mb-1">
          <h2 className="heading-lg semi-bold mb-1/4">Contact Me</h2>
        </div>
        <p className="subtitulo form-auto-fill mb-3">
          Looking to expand your team? Or do you need a web developer for a
          specific project? If I can help you in any way dont hesitate to fill
          this form.
        </p>

        <form className="form-grid-contact">
          <article className="form-item mt-3 text-xs form-grid-item border-input">
            <label htmlFor="first-name">First name</label>
            <div className="input input--with-icon">
              <img
                src="./assets/images/icons/user-chettos.svg"
                alt="icono persona"
              />
              <input
                className="bewo-2 form-tipografy"
                type="text"
                placeholder="John"
                id="first-name"
                required
              />
            </div>
          </article>

          <article className="form-item mt-3 text-xs form-grid-item border-input">
            <label htmlFor="last-name">Last Name</label>
            <div className="input input--with-icon">
              <img
                src="./assets/images/icons/user-chettos.svg"
                alt="icono persona"
              />
              <input
                className="bewo-2 form-tipografy"
                type="text"
                placeholder="Doe"
                id="last-name"
                required
              />
            </div>
          </article>

          <article className="form-item mt-3 text-xs form-grid-item border-input">
            <label htmlFor="email">Email</label>
            <div className="input input--with-icon">
              <img src="./assets/images/icons/correo.svg" alt="icono email" />
              <input
                className="bewo-2 form-tipografy"
                type="email"
                placeholder="john@mail.com"
                id="email"
                required
              />
            </div>
          </article>

          <article className="form-item mt-3 text-xs form-grid-item border-input">
            <label htmlFor="company">COMPANY</label>
            <div className="input input--with-icon">
              <img
                src="./assets/images/icons/company.svg"
                alt="icono company"
              />
              <input
                className="bewo-2 form-tipografy"
                type="text"
                placeholder="Company SA"
                id="company"
              />
            </div>
          </article>

          <article className="form-item mt-3 text-xs form-grid-item border-input">
            <label htmlFor="telephone">Telephone</label>
            <div className="input input--with-icon">
              <img src="./assets/images/icons/cell.svg" alt="icono company" />
              <input
                className="bewo-2 form-tipografy"
                type="tel"
                placeholder="987654321"
                id="telephone"
              />
            </div>
          </article>

          <article className="form-item mt-3 text-xs form-grid-item border-input">
            <label className="overline text-xs regular">Country</label>
            <div>
              <select className="select">
                <option value="">Select one Option</option>
                <option value="1">Option one</option>
                <option value="2">Option two</option>
              </select>
            </div>
          </article>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
