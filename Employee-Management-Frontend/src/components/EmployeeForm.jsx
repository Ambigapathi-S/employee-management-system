import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { updateEmployee, saveEmployee, getEmployee } from "../services/EmployeeService";
const EmployeeForm = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobileNo, setMobileNo] = useState();

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const pageTitle = () => {
    return id ? (
      <h2 className="text-center">Update Employee</h2>
    ) : (
      <h2 className="text-center">Add Employee</h2>
    );
  };

  const saveOrUpdateEmployee = async (e) => {
    e.preventDefault();
    setErrors(validateValues(firstName, lastName, email, mobileNo));
    const employee = { firstName, lastName, email, mobileNo };
    if (Object.keys(errors).length === 0) {
      try {
        if (id) {
          await updateEmployee(id, employee);
          navigate("/list");
        } else {
          const response = await saveEmployee(employee);
          console.log(response.data);
          navigate("/list");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("error")
    }
  };

  const validateValues = (firstName, lastName, email, mobileNo) => {
    let errors = {};
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await getEmployee(id);
          console.log(response.data);
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setMobileNo(response.data.mobileNo);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="formUI">
      <h2 className="fs-4 text-center mb-4">{pageTitle()}</h2>
      <div className="card-body">
        <form method="post" onSubmit={(e) => saveOrUpdateEmployee(e)}>
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstName"
              aria-describedby="firstName"
              placeholder="Enter First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastName"
              aria-describedby="lastName"
              placeholder="Enter Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="mobileNo">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id="mobileNo"
              placeholder="Mobile Number"
              required
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary" >Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeForm