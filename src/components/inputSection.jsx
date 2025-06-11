import { useState } from "react";
import Button from "./button";
import Input from "./input";
import "../styles/input.css";

export default function InputSection({
  setName, setLastName, setEmail, setTel, 
  setSchool, setProgram, setCompName, setPosition,
  setResp, setstartDate, setEndDate, setDescript
}) {
  // Local state for General Information
  const [tempName, setTempName] = useState("");
  const [tempLastName, setTempLastName] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [tempTel, setTempTel] = useState("");

  // Local state for Educational Experience
  const [tempSchool, setTempSchool] = useState("");
  const [tempProgram, setTempProgram] = useState("");

  // Local state for Practical Experience
  const [tempCompName, setTempCompName] = useState("");
  const [tempPosition, setTempPosition] = useState("");
  const [tempResp, setTempResp] = useState("");
  const [tempStartDate, setTempStartDate] = useState("");
  const [tempEndDate, setTempEndDate] = useState("");

  // Local state for Extra Description
  const [tempDescript, setTempDescript] = useState("");

  // Submit handlers
  function handleSubmitGeneral(e) {
    e.preventDefault();
    setName(tempName);
    setLastName(tempLastName);
    setEmail(tempEmail);
    setTel(tempTel);
  }

  function handleSubmitEducation(e) {
    e.preventDefault();
    setSchool(tempSchool);
    setProgram(tempProgram);
  }

  function handleSubmitExperience(e) {
    e.preventDefault();
    setCompName(tempCompName);
    setPosition(tempPosition);
    setResp(tempResp);
    setstartDate(tempStartDate);
    setEndDate(tempEndDate);
  }

  function handleSubmitDescription(e) {
    e.preventDefault();
    setDescript(tempDescript);
  }

  //reset handlers
  function resetGeneralForm() {
    setTempName("");
    setTempLastName("");
    setTempEmail("");
    setTempTel("");
  }
  
  function resetEducationForm() {
    setTempSchool("");
    setTempProgram("");
  }

  function resetExperienceForm() {
    setTempCompName("");
    setTempPosition("");
    setTempResp("");
    setTempStartDate("");
    setTempEndDate("");
  }

  function resetDescriptionForm() {
    setTempDescript("");
  }
  

  return (
    <div id="input-section">
      {/* General Information */}
      <section>
        <h2>General Information</h2>
        <form onSubmit={handleSubmitGeneral}>
          <Input
            type="text"
            placeholder="eg. John *"
            labeltext="First Name *"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="eg. Sambani *"
            labeltext="Last Name *"
            value={tempLastName}
            onChange={(e) => setTempLastName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="eg. user.@example.com *"
            labeltext="Email *"
            value={tempEmail}
            onChange={(e) => setTempEmail(e.target.value)}
          />
          <Input
            type="tel"
            placeholder="eg. 099...98 *"
            labeltext="Tel *"
            value={tempTel}
            onChange={(e) => setTempTel(e.target.value)}
          />
          <div>
            <Button text="Reset" type="button" onClick={resetGeneralForm} />
            <Button text="Submit" />
          </div>
        </form>
      </section>

      {/* Educational Experience */}
      <section>
        <h2>Educational Experience</h2>
        <form onSubmit={handleSubmitEducation}>
          <Input
            type="text"
            placeholder="eg. Mubas *"
            labeltext="School Name *"
            value={tempSchool}
            onChange={(e) => setTempSchool(e.target.value)}
          />
          <Input
            type="text"
            placeholder="eg. Civil Engineering *"
            labeltext="Program of Study *"
            value={tempProgram}
            onChange={(e) => setTempProgram(e.target.value)}
          />
          <div>
            <Button text="Reset" type="button" onClick={resetEducationForm} />
            <Button text="Submit" />
          </div>
        </form>
      </section>

      {/* Practical Experience */}
      <section>
        <h2>Practical Experience</h2>
        <form onSubmit={handleSubmitExperience}>
          <Input
            type="text"
            placeholder="eg. Malawi Eco. *"
            labeltext="Company Name *"
            value={tempCompName}
            onChange={(e) => setTempCompName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="eg. Secretary *"
            labeltext="Position Title *"
            value={tempPosition}
            onChange={(e) => setTempPosition(e.target.value)}
          />
          <Input
            type="text"
            placeholder="eg. Writing minutes *"
            labeltext="Main Responsibility *"
            value={tempResp}
            onChange={(e) => setTempResp(e.target.value)}
          />
          <Input
            type="date"
            labeltext="Start Date *"
            value={tempStartDate}
            onChange={(e) => setTempStartDate(e.target.value)}
          />
          <Input
            type="date"
            labeltext="End Date *"
            value={tempEndDate}
            onChange={(e) => setTempEndDate(e.target.value)}
          />
          <div>
            <Button text="Reset" type="button" onClick={resetExperienceForm} />
            <Button text="Submit" />
          </div>
        </form>
      </section>

      {/* Extra Description */}
      <section>
        <h2>Extra Details About Self</h2>
        <form onSubmit={handleSubmitDescription}>
          <textarea
            id="about-self"
            value={tempDescript}
            onChange={(e) => setTempDescript(e.target.value)}
            placeholder="e.g. Provide more details about yourself"
          ></textarea>
          <div>
            <Button text="Reset" type="button" onClick={resetDescriptionForm} />
            <Button text="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
}
