import React, { useState } from "react";

const Form = () => {
  const [userName, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isStrongPassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const isValidPhone = (phone) => {
    const phonePattern = /^\+\d{1,3}\d{10}$/;
    return phonePattern.test(phone);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (userName && email && password && confirmPass && phoneNo) {
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
      }
      if (!isStrongPassword(password)) {
        alert(
          "Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character"
        );
        return;
      }
      if (!isValidPhone(phoneNo)) {
        alert(
          "Phone number must start with country code (+) and have exactly 10 digits after country code"
        );
        return;
      }
      if (password === confirmPass) {
        alert("Submitted Successfully");
      } else {
        alert("ERR : Password & ConfirmPassword Must be SAME !");
      }
    } else {
      alert("Required Fields are Mandatory");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-700 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl space-y-4">
        <h2 className="text-2xl font-bold text-center">Form Validation</h2>

        <div>
          <label className="block font-medium">Username</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={userName}
            onChange={(event) => setUser(event.target.value)}
          />
          <p
            className={
              submitted && !userName ? "text-red-500 text-sm" : "hidden"
            }
          >
            User name is required
          </p>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium">First Name</label>
            <input className="w-full p-2 border rounded" type="text" />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">Last Name</label>
            <input className="w-full p-2 border rounded" type="text" />
          </div>
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            className="w-full p-2 border rounded"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <p
            className={submitted && !email ? "text-red-500 text-sm" : "hidden"}
          >
            Email is required
          </p>
          <p
            className={
              submitted && email && !isValidEmail(email)
                ? "text-red-500 text-sm"
                : "hidden"
            }
          >
            Please enter a valid email address
          </p>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium">Password</label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p
              className={
                submitted && !password ? "text-red-500 text-sm" : "hidden"
              }
            >
              Password is required
            </p>
            <p
              className={
                submitted && password && !isStrongPassword(password)
                  ? "text-red-500 text-sm"
                  : "hidden"
              }
            >
              Password must be 8+ chars with uppercase, lowercase, number &
              special character
            </p>
          </div>
          <div className="w-1/2">
            <label className="block font-medium">Confirm Password</label>
            <input
              className="w-full p-2 border rounded"
              type="password"
              value={confirmPass}
              onChange={(event) => setConfirmPass(event.target.value)}
            />
            <p
              className={
                submitted && !confirmPass ? "text-red-500 text-sm" : "hidden"
              }
            >
              Confirm password is required
            </p>
          </div>
        </div>

        <div>
          <label className="block font-medium">
            Phone No. (with country code)
          </label>
          <input
            className="w-full p-2 border rounded"
            type="tel"
            value={phoneNo}
            placeholder="+911234567890"
            onChange={(event) => setPhoneNo(event.target.value)}
          />
          <p
            className={
              submitted && !phoneNo ? "text-red-500 text-sm" : "hidden"
            }
          >
            Phone number is required
          </p>
          <p
            className={
              submitted && phoneNo && !isValidPhone(phoneNo)
                ? "text-red-500 text-sm"
                : "hidden"
            }
          >
            Phone must start with country code (+) and have exactly 10 digits
            after country code
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-4">Address</h3>

        <div>
          <label className="block font-medium">Street Address</label>
          <input className="w-full p-2 border rounded" type="text" />
        </div>

        <div>
          <label className="block font-medium">Address Line 2</label>
          <input className="w-full p-2 border rounded" type="text" />
        </div>

        <div>
          <label className="block font-medium">City</label>
          <input className="w-full p-2 border rounded" type="text" />
        </div>

        <div>
          <label className="block font-medium">State</label>
          <input className="w-full p-2 border rounded" type="text" />
        </div>

        <div>
          <label className="block font-medium">Postal / Zip Code</label>
          <input className="w-full p-2 border rounded" type="text" />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <span>
            I accept the{" "}
            <a className="text-blue-500 underline" href="#">
              terms and conditions
            </a>
          </span>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
