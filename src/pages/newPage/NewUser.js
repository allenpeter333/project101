import React from "react";
import "./newUser.css";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItems">
          <label className="newUserLabel">Username</label>
          <input type="text" placeholder="john" />
        </div>

        <div className="newUserItems">
          <label className="newUserLabel">Full Name</label>
          <input type="text" placeholder="John Snow" />
        </div>
        <div className="newUserItems">
          <label className="newUserLabel">Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItems">
          <label className="newUserLabel">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItems">
          <label className="newUserLabel">Phone</label>
          <input type="number" placeholder="+91 625682827" />
        </div>
        <div className="newUserItems">
          <label className="newUserLabel">Address</label>
          <input type="text" placeholder="Texas | USA" />
        </div>

        <div className="newUserItems">
          <label> Gender </label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="other" />
            <label for="other">Other</label>
          </div>
          <button className="newUserButton">Create</button>
        </div>
        <div className="newUserItems">
          <label> Active </label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default NewUser;
