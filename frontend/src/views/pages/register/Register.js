import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CAlert } from "@coreui/react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const handleShowAlertSuccess = (event) => {
    setShowAlertSuccess(false);
  };

  const [showAlertFail, setShowAlertFail] = useState(false);
  const handleShowAlertFail = (event) => {
    setShowAlertFail(false);
  };

  const [showAlertEmpty, setShowAlertEmpty] = useState(false);
  // const handleShowAlertEmpty = (event) => {
  //   setShowAlertEmpty(false);
  // };

  const [username, setUserName] = useState("");
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };


  const clearAllEntries = () => {
    setUserName("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
  };

  const submitted = (event) => {
    if(username === "" || firstName === "" || lastName === "" || password === "" || email === "")
    {
      setShowAlertEmpty(true)
      setShowAlertFail(false)
      setShowAlertSuccess(false)
      return
    }
    
    let formData = new FormData();
    formData.append("userName", username);
    formData.append("userFirstName", firstName);
    formData.append("userLastName", lastName);
    formData.append("userPassword", password);
    formData.append("mailID", email);

    axios({
      url: process.env.REACT_APP_BACKEND_API_URL+"registerNewUser",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);       
        if (res.status == "200") {
          localStorage.setItem('register', JSON.stringify({ username: username,email: email}))
          setShowAlertSuccess(true);
          setShowAlertEmpty(false)
          setShowAlertFail(false)
          navigate('/otp');
        } else {
          setShowAlertFail(true);
          setShowAlertSuccess(false);
          setShowAlertEmpty(false)
        }
      })
      .catch((err) => {
        setShowAlertFail(true);
        setShowAlertSuccess(false);
        setShowAlertEmpty(false)
    });

    clearAllEntries();
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <div className="mt-2">
                  <CAlert
                    dismissible={false}
                    color="danger"
                    visible={showAlertEmpty}
                  >
                    None of the Fields Below Can Be Empty!
                  </CAlert>
                </div>

                <div className="mt-2">
                  <CAlert
                    dismissible={false}
                    color="success"
                    visible={showAlertSuccess}
                  >
                    User Registered Sucessfully!
                  </CAlert>
                </div>

                <div className="mt-2">
                  <CAlert
                    dismissible={false}
                    color="danger"
                    visible={showAlertFail}
                  >
                    User Registration Failed!
                  </CAlert>
                </div>

                <CForm onSubmit={submitted}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Roll Number"
                      autoComplete="username"
                      value={username}
                      onChange={handleUserName}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    <CFormInput
                      placeholder="First Name"
                      value={firstName}
                      onChange={handleFirstName}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    <CFormInput
                      placeholder="Last Name"
                      value={lastName}
                      onChange={handleLastName}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      value={email}
                      onChange={handleEmail}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={password}
                      onChange={handlePassword}
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton type="submit" color="success">
                      Create Account
                    </CButton>
                  </div>
                  <div className="right-button">
                    <Link to="/login">
                      <CButton color="link" className="text-right px-0 ">
                        Login Instead?
                      </CButton>
                    </Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
