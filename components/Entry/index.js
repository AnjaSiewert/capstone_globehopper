import StyledList from "../StyledList";
import StyledButton from "../StyledButton";
import StyledForm from "../Form/StyledForm";
import { useState } from "react";
import StyledFieldset from "../Form/StyledFieldset";

export default function Entry({ entries, name, onEditEntry, country }) {
  const [isVisaValid, setIsVisaValid] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
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
    event.target.reset();
    event.target.date.focus();
    setIsEditing(!isEditing);
  }

  return (
    selectedCountry && (
      <>
        <StyledList isOnEntryList>
          {selectedCountry.name && (
            <li>
              <strong>{selectedCountry.name.toUpperCase()}</strong>
            </li>
          )}
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

          <StyledButton onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit"}
          </StyledButton>
        </StyledList>

        {isEditing && (
          <>
            <StyledForm onSubmit={handleSubmit} aria-label="Add own entries">
              <h2>Edit my planed trip</h2>
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
                  <input
                    type="radio"
                    id="passport-required"
                    name="passport"
                    value="✅"
                    required
                    defaultChecked={
                      selectedCountry.passport === "✅" ? true : false
                    }
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
                    defaultChecked={
                      selectedCountry.passport === "❌" ? true : false
                    }
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
                    defaultChecked={
                      selectedCountry.vaccination === "✅" ? true : false
                    }
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
                    defaultChecked={
                      selectedCountry.vaccination === "❌" ? true : false
                    }
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
                    defaultChecked={
                      selectedCountry.visa === "✅" ? true : false
                    }
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
                    defaultChecked={
                      selectedCountry.visa === "❌" ? true : false
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
                  />
                </label>
              </StyledFieldset>
              <StyledButton type="submit" aria-label="submit">
                save your trip
              </StyledButton>
            </StyledForm>
          </>
        )}
      </>
    )
  );
}
