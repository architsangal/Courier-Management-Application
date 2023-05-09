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

const ForgotPassOTP = () => {
  const navigate = useNavigate()

  const [otp, setOTP] = useState("");
  const handleOTP = (event) => {
    setOTP(event.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertFail, setShowAlertFail] = useState(false);
  const [showAlertEmpty, setShowAlertEmpty] = useState(false);

  const clearAllEntries = () => {
    setOTP("");
    setPassword("");
  };

  const submitted = () => {
    if(otp === "" || password === "")
    {
      setShowAlertEmpty(true)
      setShowAlertFail(false)
      setShowAlertSuccess(false)
      return
    }

    let formData = new FormData();
    formData.append("mailID", localStorage.getItem('email'));
    formData.append("userPassword", password);
    formData.append("otp", otp);
    
    axios({
      url: process.env.REACT_APP_BACKEND_API_URL+"resetPassword",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    })
      .then((res) => {
        setShowAlertEmpty(false)
        setShowAlertFail(false)
        setShowAlertSuccess(true)
        navigate('/login')
      })
      .catch((err) => {
        setShowAlertEmpty(false)
        setShowAlertFail(true)
        setShowAlertSuccess(false)
      });

    clearAllEntries();
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
                        Password Changed Sucessfully!
                      </CAlert>
                    </div>

                    <div className="mt-2">
                      <CAlert
                        dismissible={false}
                        color="danger"
                        visible={showAlertFail}
                      >
                        Couldn't Change Password!
                      </CAlert>
                    </div>

                    <h1>Change Password</h1>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="OTP"
                        value={otp}
                        onChange={handleOTP}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="New Password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                      />
                    </CInputGroup>

                    <CCol xs={6}>
                      <CButton type="submit" color="primary" className="px-4 mb-3">
                        Send OTP
                      </CButton>
                    </CCol>

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

export default ForgotPassOTP;
