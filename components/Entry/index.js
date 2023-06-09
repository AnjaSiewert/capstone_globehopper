import StyledList from "../StyledList";
import StyledButton from "../StyledButton";
import StyledForm from "../Form/StyledForm";
import { useState } from "react";
import StyledFieldset from "../Form/StyledFieldset";
import styled from "styled-components";

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export default function Entry({
  entries,
  name,
  onEditEntry,
  country,
  onDeleteEntry,
}) {
  const [isVisaValid, setIsVisaValid] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [remainingCharacters, setRemainingCharacters] = useState(400);
  const selectedCountry = entries.find((entry) => entry.name === name);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.allowedDays < 0 || data.allowedDays > 365) {
      alert("The allowed days must be between 0 and 365. Please try again.");
      return;
    }

    onEditEntry(country, data);
    setIsEditing(!isEditing);
  }

  function handleCharacterLengthChange(event) {
    setRemainingCharacters(400 - event.target.value.length);
  }

  return (
    selectedCountry && (
      <>
        <StyledList isOnEntryList>
          {selectedCountry.date && (
            <li>
              <strong>When:</strong>{" "}
              {new Date(selectedCountry.date).toLocaleString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </li>
          )}
          {selectedCountry.passport && (
            <li>
              <strong>Passport required:</strong> {selectedCountry.passport}
            </li>
          )}
          {selectedCountry.vaccination && (
            <li>
              <strong>Vaccination required:</strong>
              {selectedCountry.vaccination}
            </li>
          )}
          {selectedCountry.visa && (
            <li>
              <strong>Visa required:</strong> {selectedCountry.visa}
            </li>
          )}
          {selectedCountry.allowedDays && (
            <li>
              <strong>Allowed days:</strong> {selectedCountry.allowedDays}
            </li>
          )}
          {selectedCountry.notes && (
            <li>
              <strong>Notes:</strong> {selectedCountry.notes}
            </li>
          )}

          <StyledButtonWrapper>
            <StyledButton onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Cancel" : "Edit"}
            </StyledButton>
            <StyledButton onClick={() => onDeleteEntry(country)}>
              Delete
            </StyledButton>
          </StyledButtonWrapper>
        </StyledList>
        {isEditing && (
          <>
            <StyledForm onSubmit={handleSubmit} aria-label="Add own entries">
              <h2>Edit my planned trip</h2>
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
                  defaultValue={selectedCountry.date}
                />
              </StyledFieldset>
              <h4>Required checks:</h4>
              <StyledFieldset isCheckbox>
                <legend>
                  <span>Passport:</span>
                </legend>
                <label htmlFor="passport-required">
                  <input
                    type="radio"
                    id="passport-required"
                    name="passport"
                    value="Yes"
                    required
                    defaultChecked={
                      selectedCountry.passport === "Yes" ? true : false
                    }
                  />
                  YES
                </label>
                <label htmlFor="passport-notrequired">
                  <input
                    type="radio"
                    id="passport-notrequired"
                    name="passport"
                    value="No"
                    required
                    defaultChecked={
                      selectedCountry.passport === "No" ? true : false
                    }
                  />
                  NO
                </label>
              </StyledFieldset>
              <StyledFieldset isCheckbox>
                <legend>
                  <span> Vaccination:</span>
                </legend>
                <label htmlFor="vaccination-required">
                  <input
                    type="radio"
                    id="vaccination-required"
                    name="vaccination"
                    value="Yes"
                    required
                    defaultChecked={
                      selectedCountry.vaccination === "Yes" ? true : false
                    }
                  />
                  YES
                </label>
                <label htmlFor="vaccination-notrequired">
                  <input
                    type="radio"
                    id="vaccination-notrequired"
                    name="vaccination"
                    value="No"
                    required
                    defaultChecked={
                      selectedCountry.vaccination === "No" ? true : false
                    }
                  />
                  NO
                </label>
              </StyledFieldset>
              <StyledFieldset isCheckbox>
                <legend>
                  <span> Visa:</span>
                </legend>
                <label htmlFor="visa-required">
                  <input
                    type="radio"
                    id="visa-required"
                    name="visa"
                    value="Yes"
                    required
                    defaultChecked={
                      selectedCountry.visa === "Yes" ? true : false
                    }
                  />
                  YES
                </label>
                <label htmlFor="visa-notrequired">
                  <input
                    type="radio"
                    id="visa-notrequired"
                    name="visa"
                    value="No"
                    required
                    defaultChecked={
                      selectedCountry.visa === "No" ? true : false
                    }
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
                  defaultValue={selectedCountry.allowedDays}
                />
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
                    aria-label="enter additional notes"
                    defaultValue={selectedCountry.notes}
                    onChange={handleCharacterLengthChange}
                  />
                  <br />
                  <i>Characters left: {remainingCharacters}/400</i>
                </label>
              </StyledFieldset>
              <StyledButton type="submit" aria-label="submit">
                Save your trip
              </StyledButton>
            </StyledForm>
          </>
        )}
      </>
    )
  );
}
