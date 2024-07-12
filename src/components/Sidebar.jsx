const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Home</span>
      </a>

      <ul className="nav nav-pills flex-column mb-auto">
      <hr/>
      <h6>Configurations</h6>
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Payment Configurations");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Payment Configurations" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Payment Configurations
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Payment Sockets");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Payment Sockets" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Payment Sockets
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Transport Configurations");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Transport Configurations" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Transport Configurations
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Payment Services");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Payment Services" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Payment Services
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Configure Dynamic MCC");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Configure Dynamic MCC" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Configure Dynamic MCC
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Payment Method");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Payment Method" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Payment Method
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Payment Option Configuration");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Payment Option Configuration" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Payment Option Configuration
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Payment Rank Configuration");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Payment Rank Configuration" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Payment Rank Configuration
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Expiration Date Configuration");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Expiration Date Configuration" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Expiration Date Configuration
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Authentication Rule Configuration");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Authentication Rule Configuration" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Authentication Rule Configuration
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("User Configuration");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "User Configuration" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            User Configuration
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Group Membership");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Group Membership" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Group Membership
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Refund Field Names");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Refund Field Names" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Refund Field Names
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Extra Refund Fields");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Extra Refund Fields" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Extra Refund Fields
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Cpg Jobs");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Cpg Jobs" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Cpg Jobs
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Response Code Mapping");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Response Code Mapping" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Response Code Mapping
          </a>
        </li>
        <hr/>
      <h5>Data</h5>
        
        <li
          onClick={() => {
            setSelectedTab("Payment Transactions");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Payment Transactions" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Payment Transactions
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Transport Files");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Transport Files" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Transport Files
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Payment Batches");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Payment Batches" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Payment Batches
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Bank Info");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Bank Info" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Bank Info
          </a>
        </li>
        <hr/>
      <h5>Log</h5>
        <li
          onClick={() => {
            setSelectedTab("Configuration History");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Configuration History" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Configuration History
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
