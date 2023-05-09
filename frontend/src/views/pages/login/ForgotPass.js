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

const ForgotPass = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const [error, setError] = useState("");

  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertFail, setShowAlertFail] = useState(false);
  const [showAlertEmpty, setShowAlertEmpty] = useState(false);

  const clearAllEntries = () => {
    setEmail("");
  };

  const submitted = () => {
    if(email === "")
    {
      setShowAlertEmpty(true)
      setShowAlertFail(false)
      setShowAlertSuccess(false)
      return
    }
    axios.post(process.env.REACT_APP_BACKEND_API_URL+"forgotPasswordOTP?mailId="+email)
      .then((res) => {
        setShowAlertEmpty(false)
        setShowAlertFail(false)
        setShowAlertSuccess(true)
        localStorage.setItem('email', email)
        navigate('/forgotpassotp')
      })
      .catch((err) => {
        setShowAlertEmpty(false)
        setShowAlertFail(true)
        setShowAlertSuccess(false)
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
                        dismissible={false}
                        color="danger"
                        visible={showAlertEmpty}
                      >
                        Email Fields Below Can't Be Empty!
                      </CAlert>
                    </div>

                    <div className="mt-2">
                      <CAlert
                        dismissible={false}
                        color="success"
                        visible={showAlertSuccess}
                      >
                        OTP Sent Sucessfully!
                      </CAlert>
                    </div>

                    <div className="mt-2">
                      <CAlert
                        dismissible={false}
                        color="danger"
                        visible={showAlertFail}
                      >
                        Something Went Wrong!
                      </CAlert>
                    </div>

                    <h1>Change Password</h1>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleEmail}
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

export default ForgotPass;
