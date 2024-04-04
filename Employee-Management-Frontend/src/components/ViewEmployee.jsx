import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getEmployee } from "../services/EmployeeService";

const ViewEmployee = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobileNo, setMobileNo] = useState();

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
    <div className='ViewEmployee'>
      <h2>Employee Details - #{ id }</h2>
      <div className='form-group'>
        <label>First Name : </label><p> {firstName}</p>
      </div>
      <div className='form-group'>
        <label>Last Name : </label><p> {lastName}</p>
      </div>
      <div className='form-group'>
        <label>Email Address : </label><p> {email}</p>
      </div>
      <div className='form-group'>
        <label>Mobile Number : </label><p> {mobileNo}</p>
      </div>
    </div>
  )
}

export default ViewEmployee