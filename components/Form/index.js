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
  margin-bottom: 1rem;
`;

export default function Form() {
  const [isVisaValid, setIsVisaValid] = useState(true);
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <StyledForm aria-label="Add own entries">
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
          />
        </StyledFieldset>
        <StyledFieldset>
          <legend>
            <h4>Required checks:</h4>
          </legend>
          <label htmlFor="passport">
            Passport:
            <input type="radio" id="passport" name="passport" />
            YES
            <input type="radio" id="passport" name="passport" />
            NO
          </label>
          <label htmlFor="vaccination">
            Vaccination:
            <input type="radio" id="vaccination" name="vaccination" />
            YES
            <input type="radio" id="vaccination" name="vaccination" />
            NO
          </label>
          <label htmlFor="visa">
            Visa:
            <input type="radio" id="visa" name="visa" />
            YES
            <input type="radio" id="visa" name="visa" />
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
        <StyledButton type="submit" aria-label="submit" disabled>
          Submit
        </StyledButton>
      </StyledForm>
    </>
  );
}
