import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [username, setUserName] = useState("");
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const clearAllEntries = () => {
    setUserName("");
    setPassword("");
  };

  const submitted = () => {
    let formData = new FormData();
    formData.append("userName", username);
    formData.append("userPassword", password);
    axios({
      url: "http://localhost:9090/authenticate",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    })
      .then((res) => {
        // console.log();
        localStorage.setItem('details', JSON.stringify({ username: username,token: res.data.jwtToken, role: res.data.user.role[0].roleName}))
        const details = JSON.parse(localStorage.getItem('details'))
        // console.log(details.username);
        // console.log(details.token);
        console.log(details.role);
        const navigate = useNavigate()
        navigate('/dashboard')
      })
      .catch((err) => {});

    // clearAllEntries();
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8} lg={7} xl={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={submitted}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        value={username}
                        onChange={handleUserName}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePassword}
  
                      />
                    </CInputGroup>

                    <CCol xs={6}>
                      <CButton type="submit" color="primary" className="px-4">
                        Login
                      </CButton>
                    </CCol>
                  
                    <div className="right-button">
                    <Link to="/register">
                      <CButton color="link">
                        New Registration?
                      </CButton>
                      </Link>
                    </div>
                  
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
