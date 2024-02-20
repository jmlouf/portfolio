import "./Form.css";

export function Form() {
  return (
    <form action="https://formspree.io/f/mleqbkve" method="POST">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" required name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" required name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          cols="30"
          rows="10"
          id="message"
          type="text"
          required
          name="message"
        />
      </div>
      <button type="submit">Submit</button>
      <button type="reset">Clear</button>
    </form>
  );
}
