import { useState } from "react";
import StyledButton from "../StyledButton";
import StyledForm from "./StyledForm";
import StyledFieldset from "./StyledFieldset";

export default function Form({ name, onAddEntry }) {
  const [isVisaValid, setIsVisaValid] = useState(true);
  const [text, setText] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.allowedDays < 0 || data.allowedDays > 365) {
      alert("The allowed days must be between 0 and 365. Please try again.");
      return;
    }

    onAddEntry(data);
    setText("");
    setIsFormSubmitted(true);
  }

  return (
    <>
      {!isFormSubmitted && (
        <StyledForm onSubmit={handleSubmit} aria-label="Add own entries">
          <h2>Plan my trip</h2>
          <StyledFieldset>
            <legend>
              <h4>Travel Details</h4>
            </legend>
            <label htmlFor="name" hidden>
              Countryname:
            </label>
            <input id="name" name="name" value={name} readOnly hidden></input>
            <label htmlFor="date">When:</label>
            <input
              type="month"
              id="date"
              name="date"
              min="2023-04"
              aria-label="select travel date"
              required
            />
          </StyledFieldset>
          <h4>Required checks:</h4>
          <StyledFieldset>
            <legend>
              <span>Passport:</span>
            </legend>
            <label htmlFor="passport-required">
              <input
                type="radio"
                id="passport-required"
                name="passport"
                value="✅"
                required
              />
              YES
            </label>
            <label htmlFor="passport-notrequired">
              <input
                type="radio"
                id="passport-notrequired"
                name="passport"
                value="❌"
                required
              />
              NO
            </label>
          </StyledFieldset>
          <StyledFieldset>
            <legend>
              <span> Vaccination:</span>
            </legend>
            <label htmlFor="vaccination-required">
              <input
                type="radio"
                id="vaccination-required"
                name="vaccination"
                value="✅"
                required
              />
              YES
            </label>
            <label htmlFor="vaccination-notrequired">
              <input
                type="radio"
                id="vaccination-notrequired"
                name="vaccination"
                value="❌"
                required
              />
              NO
            </label>
          </StyledFieldset>
          <StyledFieldset>
            <legend>
              <span> Visa:</span>
            </legend>
            <label htmlFor="visa-required">
              <input
                type="radio"
                id="visa-required"
                name="visa"
                value="✅"
                required
              />
              YES
            </label>
            <label htmlFor="visa-notrequired">
              <input
                type="radio"
                id="visa-notrequired"
                name="visa"
                value="❌"
                required
              />
              NO
            </label>
          </StyledFieldset>
          <StyledFieldset>
            <legend>
              <h4>Additional checks:</h4>
            </legend>
            <label htmlFor="allowed-days">Allowed days to stay:</label>
            <input
              type="number"
              id="allowed-days"
              name="allowedDays"
              aria-label="enter allowed days for visa"
              pattern="[0-9]{1,3}"
              onChange={(event) => {
                event.target.value > 365
                  ? setIsVisaValid(false)
                  : setIsVisaValid(true);
              }}
            ></input>
            <i>
              {isVisaValid
                ? "Value must be between 1 and 365"
                : "You are above max-value of 365"}
            </i>
            <br />
            Notes:
            <label htmlFor="notes">
              <textarea
                id="notes"
                name="notes"
                rows="4"
                cols="20"
                maxLength={400}
                value={text}
                onChange={handleChange}
                aria-label="enter additional notes"
              ></textarea>
            </label>
            <i>Characters left: {400 - text.length}/400</i>
          </StyledFieldset>
          <StyledButton type="submit" aria-label="submit">
            Submit
          </StyledButton>
        </StyledForm>
      )}
    </>
  );
}
