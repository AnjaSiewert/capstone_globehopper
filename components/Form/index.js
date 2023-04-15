import styled from "styled-components";
import { useState } from "react";
import StyledButton from "../StyledButton";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Form() {
  const [isVisaValid, setIsVisaValid] = useState(true);
  const [text, setText] = useState("");
  const [formData, setFormData] = useState([]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setFormData(data);
    //console.log(data);
    event.target.reset();
    event.target.date.focus();
    setText("");

    if (!isVisaValid) {
      alert("You are above max-value of 365");
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit} aria-label="Add own entries">
        <h2>Plan my trip</h2>
        <StyledFieldset>
          <legend>
            <h4>Travel Details</h4>
          </legend>
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
            <input type="radio" id="passport-required" name="passport" />
            YES
          </label>
          <label htmlFor="passport-notrequired">
            <input type="radio" id="passport-notrequired" name="passport" />
            NO
          </label>
        </StyledFieldset>
        <StyledFieldset>
          <legend>
            <span> Vaccination:</span>
          </legend>
          <label htmlFor="vaccination-required">
            <input type="radio" id="vaccination-required" name="vaccination" />
            YES
          </label>
          <label htmlFor="vaccination-notrequired">
            <input
              type="radio"
              id="vaccination-notrequired"
              name="vaccination"
            />
            NO
          </label>
        </StyledFieldset>
        <StyledFieldset>
          <legend>
            <span> Visa:</span>
          </legend>
          <label htmlFor="visa-required">
            <input type="radio" id="visa-required" name="visa" />
            YES
          </label>
          <label htmlFor="visa-notrequired">
            <input type="radio" id="visa-notrequired" name="visa" />
            NO
          </label>
        </StyledFieldset>
        <StyledFieldset>
          <legend>
            <h4>Additional checks:</h4>
          </legend>
          <label htmlFor="allowed-days">Allowed days(Visa):</label>
          <input
            type="number"
            id="allowed-days"
            name="allowed-days"
            aria-label="enter allowed days for visa"
            pattern="[0-9]{1,3}"
            onChange={(event) => {
              event.target.value > 365
                ? setIsVisaValid(false)
                : setIsVisaValid(true);
            }}
          ></input>
          <i>
            {isVisaValid ? "Max-value: 365" : "You are above max-value of 365"}
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
    </>
  );
}
