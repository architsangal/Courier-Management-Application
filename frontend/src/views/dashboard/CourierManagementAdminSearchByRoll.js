import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CCol,
  CProgress,
  CRow,
  CForm,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilBowling,
  cilBorderAll,
  cilLoop,
  cilInbox,
  cilSearch,
} from "@coreui/icons";

import avatar1 from "src/assets/images/avatars/1.jpg";
import avatar2 from "src/assets/images/avatars/2.jpg";
import avatar3 from "src/assets/images/avatars/3.jpg";
import avatar4 from "src/assets/images/avatars/4.jpg";
import avatar5 from "src/assets/images/avatars/5.jpg";
import avatar6 from "src/assets/images/avatars/6.jpg";

import WidgetsBrand from "../widgets/WidgetsBrand";
import WidgetsDropdown from "../widgets/WidgetsDropdown";

const Dashboard = () => {
  const [tableExample, setTableExample] = useState([]);
  const [rollNumber, setRollNumber] = useState("");

  const handleRollNumber = (event) => {
  setRollNumber(event.target.value);
  };

  const submitted = () => {

    // Adding files to the formdata
    axios.get(process.env.REACT_APP_BACKEND_API_URL+"getCouriersByRollNo/", 
    {
      params: { ownerRollNo: rollNumber },
      headers : {
        "Authorization" : "Bearer "+JSON.parse(localStorage.getItem('details')).token
      },
    })
      .then((res) => {
        const data = res.data.sort((a, b) => {
          return b.courierID - a.courierID;
        });
        console.log(data);
        setTableExample(data);
      })
      // Catch errors if any
      .catch((err) => {});
  };

  return (
    <>
      <CRow>
        <CCol xs>
          <CForm onSubmit={submitted}>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilUser} />
              </CInputGroupText>

              <CFormInput
                placeholder="Enter the Roll Numer"
                value={rollNumber}
                onChange={handleRollNumber}
              />
            </CInputGroup>
            <div className="right-button">
              <CButton type="submit" color="info">
                <span className="padding-around">Search </span>
                
                <CIcon
                  size="sm"
                  icon={cilSearch}
                  style={{ color: "#e9eaed" }}
                />
                {"   "}
                {/* <p className="grey-text">Refresh</p> */}
              </CButton>
            </div>{" "}
          </CForm>

          <CCard className="mb-4">
            <CCardHeader>Available Recieved Packages</CCardHeader>
            <CCardBody>
              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      {" "}
                      #{" "}
                    </CTableHeaderCell>
                    <CTableHeaderCell>Owner</CTableHeaderCell>
                    <CTableHeaderCell>Reciever</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Take In Time
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Relieving Time
                    </CTableHeaderCell>
                    <CTableHeaderCell>Delivering Company</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <div>{item.courierID}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.owner}</div>
                        <div className="small text-medium-emphasis">
                          {item.ownerRollNo === null
                            ? "Roll Number Not Known"
                            : item.ownerRollNo}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>
                          {item.receiverName === null
                            ? "Name Not Known"
                            : item.receiverName}
                        </div>
                        <div className="small text-medium-emphasis">
                          {item.receiverRollNo === null
                            ? "Roll Number Not Known"
                            : item.receiverRollNo}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.arrivalDate}</div>
                        <div className="small text-medium-emphasis">
                          <div>{item.arrivalTime}</div>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>
                          {item.deliverDate === null
                            ? "Not Taken Yet"
                            : item.deliverDate}
                        </div>
                        <div className="small text-medium-emphasis">
                          <div>
                            {item.deliverTime === null ? "" : item.deliverTime}
                          </div>
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="text-center">{item.courierCompany}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
