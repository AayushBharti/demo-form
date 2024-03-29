import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return {
        ...prev, //copying remaining feilds as it is
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault(); //preventing its default behaviour
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={submitHandler}
        className="max-w-[800px] w-full mt-2 p-4 border-2 border-blue-400 
        rounded-lg space-y-1"
      >
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Aayush"
          value={formData.firstName}
          onChange={changeHandler}
          className="border border-black rounded-md w-full px-3 py-1"
        />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Bharti"
          value={formData.lastName}
          onChange={changeHandler}
          className="border border-black rounded-md w-full px-3 py-1"
        />

        <label htmlFor="email">E-mail</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="iaayushbharti@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="border border-black rounded-md w-full px-3 py-1"
        />

        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="border border-black rounded-md w-full px-3 py-1"
        >
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Indira Nagar"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="border border-black rounded-md w-full px-3 py-1"
        />

        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Patna"
          value={formData.city}
          onChange={changeHandler}
          className="border border-black rounded-md w-full px-3 py-1"
        />

        <label htmlFor="state">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="border border-black rounded-md w-full px-3 py-1"
        />

        <label htmlFor="postalCode">ZIP / Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="800001"
          value={formData.postalCode}
          onChange={changeHandler}
          className="border border-black rounded-md w-full px-3 py-1"
        />
      </form>
    </div>
  );
}

export default App;
