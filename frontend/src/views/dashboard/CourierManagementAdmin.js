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
  CCol,
  CProgress,
  CRow,
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
  const [tableExample, setTableExample] = useState([
    {
      key: 1,
      user: {
        name: "Yiorgos Avraamu",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "USA", flag: cifUs },
      usage: {
        value: 50,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success",
      },
      payment: { name: "Mastercard", icon: cibCcMastercard },
      activity: "10 sec ago",
    },
    {
      key: 2,
      user: {
        name: "Avram Tarasios",
        new: false,
        registered: "Jan 1, 2021",
      },
      country: { name: "Brazil", flag: cifBr },
      usage: {
        value: 22,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "info",
      },
      payment: { name: "Visa", icon: cibCcVisa },
      activity: "5 minutes ago",
    },
    {
      key: 6,
      user: {
        name: "Friderik Dávid",
        new: true,
        registered: "Jan 1, 2021",
      },
      country: { name: "Poland", flag: cifPl },
      usage: {
        value: 43,
        period: "Jun 11, 2021 - Jul 10, 2021",
        color: "success",
      },
      payment: { name: "Amex", icon: cibCcAmex },
      activity: "Last week",
    },
  ]);

  const refresh = () =>
  {
    setTableExample(
      tableExample.concat({
        key: 1,
        user: {
          name: "Yiorgos Avraamu",
          new: true,
          registered: "Jan 1, 2021",
        },
        country: { name: "USA", flag: cifUs },
        usage: {
          value: 50,
          period: "Jun 11, 2021 - Jul 10, 2021",
          color: "success",
        },
        payment: { name: "Mastercard", icon: cibCcMastercard },
        activity: "10 sec ago",
      }));
      handleUpload();
  }

  useEffect(() => {
    handleUpload();
  }, []);

  const handleUpload = () => {
    let formData = new FormData();
    // Adding files to the formdata
    formData.append("userName","archit");
    formData.append("userFirstName","Archit");
    formData.append("userLastName", "Sangal");
    formData.append("userPassword", "1234");
    axios({
      // Endpoint to send files
      url: "http://localhost:9090/registerNewUser",
      method: "POST",
      headers: {
        // Add any auth token here
        // authorization: "your token comes here",
        'Accept': 'application/json', 'Content-Type': 'application/json'
      },
      // Attaching the form data
      data: formData,
    })
      // Handle the response from backend here
      .then((res) =>
      {
        console.log(res);
      })
      // Catch errors if any
      .catch((err) => { });
  };

  return (
    <>
      <CRow>
        <CCol xs>
          <div className="right-button">
            <CButton color="success">
              <CIcon size="xxl" icon={cilLoop} style={{ color: '#e9eaed' }} onClick={refresh}/>
              {"   "}
              {/* <p className="grey-text">Refresh</p> */}
            </CButton>
          </div>
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
                    <CTableHeaderCell>Packages</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Date
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Time
                    </CTableHeaderCell>
                    <CTableHeaderCell>Other Information</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <div>{item.key}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
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
