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

const OTP = () => {
  const navigate = useNavigate();

  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  // const handleShowAlertSuccess = (event) => {
  //   setShowAlertSuccess(false);
  // };

  const [showAlertFail, setShowAlertFail] = useState(false);
  // const handleShowAlertFail = (event) => {
  //   setShowAlertFail(false);
  // };

  const [showAlertEmpty, setShowAlertEmpty] = useState(false);
  // const handleShowAlertEmpty = (event) => {
  //   setShowAlertEmpty(false);
  // };

  const [otp, setOtp] = useState("");
  const handleOtp = (event) => {
    setOtp(event.target.value);
  };


  const clearAllEntries = () => {
    setOtp("");
  };

  const submitted = (event) => {
    if(otp === "")
    {
      setShowAlertEmpty(true)
      setShowAlertFail(false)
      setShowAlertSuccess(false)
      return
    }
    // let formData = new FormData();

    // formData.append("mailId", JSON.parse(localStorage.getItem('register')).email);
    // formData.append("OTP", otp);

    axios.post(process.env.REACT_APP_BACKEND_API_URL+"verifyMail?"+"mailId="+ JSON.parse(localStorage.getItem('register')).email+"&"+"OTP="+ otp)
    .then((res) => {
      console.log(res);
      if (res.status == "200") {
        setShowAlertSuccess(true);
        setShowAlertEmpty(false)
        setShowAlertFail(false)
        navigate('/login');
      } else {
        setShowAlertFail(true);
        setShowAlertSuccess(false);
        setShowAlertEmpty(false)
      }
    })
    .catch((err) => {});

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
                    OTP Field Can't Be Empty!
                  </CAlert>
                </div>

                <div className="mt-2">
                  <CAlert
                    dismissible={false}
                    color="success"
                    visible={showAlertSuccess}
                  >
                    OTP Verified Sucessfully!
                  </CAlert>
                </div>

                <div className="mt-2">
                  <CAlert
                    dismissible={false}
                    color="danger"
                    visible={showAlertFail}
                  >
                    OTP Verification Failed!
                  </CAlert>
                </div>

                <CForm onSubmit={submitted}>
                  <h1>OTP Verification</h1>
                  <p className="text-medium-emphasis">We have sent a verification OTP on your email.</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="OTP"
                      // autoComplete="OTP"
                      value={otp}
                      onChange={handleOtp}
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton type="submit" color="success">
                      Verify OTP
                    </CButton>
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

export default OTP;
