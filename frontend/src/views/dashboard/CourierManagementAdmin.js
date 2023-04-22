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
  cilInbox,
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

  const refresh = () =>
  {
    handleUpload();
  }

  useEffect(() => {
    handleUpload();
  }, []);

  const handleUpload = () => {
    
    // Adding files to the formdata
    axios({
      // Endpoint to send files
      url: process.env.REACT_APP_BACKEND_API_URL+"getAllCouriers",
      method: "GET",
      headers: {
        // Add any auth token here
        // authorization: "your token comes here",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+JSON.parse(localStorage.getItem('details')).token
      },
    })
      // Handle the response from backend here
      .then((res) =>
      {
        const all = res.data;
        console.log(all);
        let data = [];
        for(let temp=0;temp<all.length;temp+=1)
        {
          console.log(all[temp].receiverName !== null);
          if(all[temp].receiverName === null)
          {
            data.push(all[temp]);
          }
        }
        console.log(data);
        
        const data_dis = data.sort((a, b) => {return b.courierID - a.courierID;});
        console.log("temp" + data_dis);
        
        setTableExample(data_dis)
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
                    <CTableHeaderCell>Owner</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Date
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Time
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
                          {item.ownerRollNo === null?"Roll Number Not Known":item.ownerRollNo}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.arrivalDate}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.arrivalTime}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.courierCompany}</div>
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
