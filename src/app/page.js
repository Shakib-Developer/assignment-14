"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MainNav from "./component/MainNav";

const Page = () => {
  const [formValue, SetFormValue] = useState({
    email: "ahmed@gmail.com",
  });
  const router = useRouter();

  const inputChange = (name, value) => {
    SetFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    if (formValue.email.length === 0) {
      alert("Email Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/login", config);
      const json = await response.json();
      if (json["status"] === true) {
        router.replace("/dashboard");
        router.refresh();
      } else {
        alert(json["Login Unsuccess"]);
      }
    }
  };

  return (
    <div className="bg-dark">
      <MainNav />
      <div className="container">
        <div className="row d-flex vh-100 align-content-center justify-content-center">
          <div className="card col-5 ">
            <h2 className="text-center fs-2 fw-bold text-danger my-4">
              Login Form
            </h2>
            <form onSubmit={Submit} className="p-5">
              <label className="form-label">User Email</label>
              <input
                className="form-control"
                value={formValue.email}
                onChange={(e) => inputChange("email", e.target.value)}
                type="email"
                placeholder="@example.com"
              />

              <input
                className="btn btn-primary log-btn"
                type="submit"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
