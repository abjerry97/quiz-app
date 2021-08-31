import { Button } from "bootstrap";
import React from "react";
import "./Test.css";

function Test() {
  return (
    <div className="col-12">
      <div className="container  test-page">
        <div className="col-12">
        <ul>
          <li className="test-col-left">
            <a href="/#">View All Test </a>
          </li>
          <li>
            <a href="/#">Set Default Values</a>
          </li>
          <li>
            <a href="/#"> Help</a>
          </li>
        </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>Enter Test Information</li>
          <li>Specify Sections &amp; Number of Questions </li>
          <li>Specify who can take this Test</li>
          <li> Advance Setting</li>
        </ul>
      </div>

      <div>
        <form>
          Enter Test INformation
          <label>Test Name*</label>
          <input type="input"></input>
          <label>Total Marks*</label>
          <input type="input"></input>
          <label>
            Test Duration* in (HH:MM) <a href="/#">change</a>
          </label>
          <input type="input"></input>
          <label>Total Questions*</label>
          <input type="input"></input>
          <label>Difficulty Level*</label>
          <label>
            <input type="radio" name="difficulty-level" value="easy"></input>
            Easy
          </label>
          <label>
            <input type="radio" name="difficulty-level" value="Average"></input>
            Average
          </label>
          <label>
            <input
              type="radio"
              name="difficulty-level"
              value="Difficult"
            ></input>
            Difficult
          </label>
          <label>Shuffle*</label>
          <label>
            <input type="radio" name="shuffle" value="question-wise"></input>
            Question Wise
          </label>
          <label>
            <input
              type="radio"
              name="difficulty-level"
              value="option-wise"
            ></input>
            Option Wise
          </label>
          <label>Test Avalability* (You can schedule now or later)</label>
          <label>
            <input
              type="radio"
              name="test-avalability"
              value="Schedule"
            ></input>
            Easy
          </label>
          <label>
            <input type="radio" name="test-avalability" value="Always"></input>
            Average
          </label>
          <label>Select Instructions*</label>
          <select name="referrer" id="select-instructions">
            <option value="instruction1"> instruction</option>
            <option value="instruction1"> instruction</option>
            <option value="instruction1"> instruction</option>
            <option value="instruction1"> instruction</option>
          </select>
        </form>
      </div>

      <div>
        Specify Question &amp; Number of Questions if ypu want to create Test
        paper section wise click on <i>Add Section</i> otherwise click on{" "}
        <i>Add Questions</i>
        <div>
          <form>
          <label>
            <input type="radio" name="add-question" value="add-question"></input>
            Add Question from Question Bank (created already) <br/>
            or
          </label>
          <label>
            <input type="radio" name="upload-question" value="upload-question"></input>
            Upload Questions <br/>
          </label>
          <label>
            <input
              type="radio"
              name="add-new"
              value="addNew"
            ></input>
            Add New
          </label>
          <input type="submit"  value="Add Question"/>
          </form>
        </div>


        <div>
          <form>
          <label>
            <input type="radio" name="add-section" value="add-section"></input>
            Add Section already created <br/>
            or
          </label>
            <label>
            <input
              type="radio"
              name="add-new-section"
              value="addNew"
            ></input>
            Add New
          </label>
          <input type="submit"  value="Add Question"/>
          </form>
          <input type="submit" value="Save Test"/>
        </div>

        <div>
          <form>
          Specify who can take this Test 
          Want to specify now or later? <input type="button" value="Now"/>
          <input type="button" value="Later"/>

          <input type="button" value="Add Group"/>
          <input type="button" value="Add INdividual Candidate"/>

          <input type="submit" value="Save Test"/>
          </form>
        </div>

        <div>
          <ul>
            <li><a>Grading &amp; Accessibility</a></li>
            <li><a>Displar &amp; Order</a></li>
            <li><a>Time Setting</a></li>
          </ul>


        <label>Question Display  Example</label>
          <label>
            <input
              type="radio"
              name="one-question"
              value="one-question"
            ></input>
            One Question per page
          </label>
          <label>
            <input type="radio" name="test-avalability" value="Always"></input>
            All Questions on the same page
          </label>

          <select name="referrer" id="select-theme">
            <option value="instruction1"> instruction</option>
            <option value="instruction1"> instruction</option>
            <option value="instruction1"> instruction</option>
            <option value="instruction1"> instruction</option>
          </select>




          <label>
            <input type="checkbox" name="test-avalability" value="Always"></input>
            Allow candidate to provide feedback
          </label>
          <label>
            <input type="checkbox" name="test-avalability" value="Always"></input>
            Send result via email
          </label>
          <label>
            <input type="checkbox" name="test-avalability" value="Always"></input>
            Allow pause and resume
          </label>
        </div>
      </div>
    </div>
  );
}

export default Test;
