import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return <>
  <div className='app-container'>
  
  
<Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
        <Header/>
          {selectedTab === "Home" && <Home/>}
          {selectedTab === "Payment Configurations" && <h1>Payment Configurations</h1>}
          {selectedTab === "Payment Sockets" && <h1>Payment Sockets</h1>}
          {selectedTab === "Transport Configurations" && <h1>Transport Configurations</h1>}
          {selectedTab === "Payment Services" && <h1>Payment Services</h1>}
          {selectedTab === "Configure Dynamic MCC" && <h1>Configure Dynamic MCC</h1>}
          {selectedTab === "Payment Method" && <h1>Payment Method</h1>}
          {selectedTab === "Payment Option Configuration" && <h1>Payment Option Configurations</h1>}
          {selectedTab === "Payment Rank Configuration" && <h1>Payment Rank Configurations</h1>}
          {selectedTab === "Expiration Date Configuration" && <h1>Expiration Date Configurations</h1>}
          {selectedTab === "Authentication Rule Configuration" && <h1>Authentication Rule Configurations</h1>}
          {selectedTab === "User Configuration" && <h1>User Configurations</h1>}
          {selectedTab === "Group Membership" && <h1>Group Membership</h1>}
          {selectedTab === "Refund Field Names" && <h1>Refund Field Names</h1>}
          {selectedTab === "Extra Refund Fields" && <h1>Extra Refund Fields</h1>}
          {selectedTab === "Cpg Jobs" && <h1>Cpg Jobs</h1>}
          {selectedTab === "Response Code Mapping" && <h1>Response Code Mapping</h1>}
          {selectedTab === "Payment Transactions" && <h1>Payment Transaction</h1>}
          {selectedTab === "Transport Files" && <h1>Transport Files</h1>}
          {selectedTab === "Payment Batches" && <h1>Payment Batches</h1>}
          {selectedTab === "Bank Info" && <h1>Bank Info</h1>}
          {selectedTab === "Configuration History" && <h1>Configuration History</h1>}
          <Footer/>
        </div>
        </div>
  </>
  
}

export default App
