import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilLibraryAdd,
  cilMedicalCross,
  cilMinus,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSearch,
  cilSpeedometer,
  cilStar,
  cilSync,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'View',
  },

  {
    component: CNavItem,
    name: 'Available Courier',
    to: '/dashboardAdmin',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Couriers',
    to: '/dashboardAdminAll',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Searching',
  },

  {
    component: CNavItem,
    name: 'Search By Roll Number',
    to: '/AdminSearchRollNumber',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Search By Name',
    to: '/AdminSearchName',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Updating',
  },
  {
    component: CNavItem,
    name: 'Add A Courier',
    to: '/dashboardAdminAdd',
    icon: <CIcon icon={cilMedicalCross} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Receiving Courier',
    to: '/dashboardAdminRecieve',
    icon: <CIcon icon={cilSync} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Update A Courier Details',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilLibraryAdd} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Delete A Courier Details',
    to: '/dashboardAdminDelete',
    icon: <CIcon icon={cilMinus} customClassName="nav-icon" />,
  }
]

export default _nav
