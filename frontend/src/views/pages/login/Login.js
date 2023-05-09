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
import { CAlert } from "@coreui/react";

const Login = () => {
  const navigate = useNavigate()

  const [username, setUserName] = useState("");
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const [error, setError] = useState("");


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
      url: process.env.REACT_APP_BACKEND_API_URL+"authenticate",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    })
      .then((res) => {
        
        localStorage.setItem('details', JSON.stringify({ username: username,token: res.data.jwtToken, role: res.data.user.role[0].roleName}))
        const details = JSON.parse(localStorage.getItem('details'))
        
        console.log(details.role);
        if(details.role === 'Admin')
          navigate('/dashboardAdmin')
        else
          navigate('/dashboard')

      })
      .catch((err) => {
        // console.log(err.response.status);
        setError("Some Thing Went Wrong");
        if(err.response.status == '401')
          setError("Error "+err.response.status + ":"  + " Incorrect Credentials");        
      });

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
                    
                  <div className="mt-2">
                  <CAlert
                    dismissible={true}
                    color="danger"
                    visible={error !== ''}
                  >
                    {error}
                  </CAlert>
                </div>

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
                      <CButton type="submit" color="primary" className="px-4 mb-3">
                        Login
                      </CButton>
                    </CCol>

                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Link to="/forgotpass">
                      <CButton color="link">
                        Forgot Password?
                      </CButton>
                      </Link>
                      <div
                        style={{
                          flex: "1 1 auto",
                        }}
                      ></div>
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
