import React from 'react'
import Sidebar from '../../Components/Admin/SideBar'
import MainContent from '../../Components/Admin/MainContent'
import './adminDashboars.css'

const AdminDashboard = () => {
  return (
    <div>
        <div className="app">
            <Sidebar />
            <MainContent />
        </div>
    </div>
  )
}

export default AdminDashboard