import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

export default function Form() {
  return (
    <>
      <StyledForm>
        <h2>Plan my trip</h2>
        <StyledFieldset>
          <legend>
            <strong>Travel Details</strong>
          </legend>
          <label htmlFor="date">When</label>
          <input type="date" id="date" name="date" />
          <label htmlFor="budjet">approx. budget</label>
          <input type="number" id="budjet" name="budjet" />
        </StyledFieldset>
        <StyledFieldset>
          <legend>
            <strong>Required checks</strong>
          </legend>
          <label htmlFor="passport">
            Passport
            <input type="radio" id="passport" name="passport" />
            YES
            <input type="radio" id="passport" name="passport" />
            NO
            <br />
          </label>
          <label htmlFor="vaccination">
            Vaccination
            <input type="radio" id="vaccination" name="vaccination" />
            YES
            <input type="radio" id="vaccination" name="vaccination" />
            NO
            <br />
          </label>
          <label htmlFor="visa">
            Visa
            <input type="radio" id="visa" name="visa" />
            YES
            <input type="radio" id="visa" name="visa" />
            NO
          </label>
        </StyledFieldset>
        <StyledFieldset>
          <legend>
            <strong>Additional checks</strong>
          </legend>
          <label htmlFor="allowed-days">Allowed days(Visa)</label>
          <input type="number" id="allowed-days"></input>
          {/*     <br />
          <label htmlFor="notes">
            Notes
            <br />
            <textarea id="notes" name="notes" rows="4" cols="20"></textarea>
          </label> */}
        </StyledFieldset>
        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
}
