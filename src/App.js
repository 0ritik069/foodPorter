import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Public pages
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import ResetPassword from "./pages/ResetPassword";

// Admin Layout & Pages
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageCustomer from "./pages/ManageCustomer/ManageCustomer";
import CustomerDetails from "./pages/ManageCustomer/CustomerDetails";
import ManageRestaurants from "./pages/ManageRestaurants/ManageRestaurants";
import ManageOrders from "./pages/ManageOrder/ManageOrders";
import Payments from "./pages/Payments/Payments";
import Reports from "./pages/report/Reports";
import Analytics from "./pages/Analytics/Analytics";
import Notifications from "./pages/Notification/Notifications";
import ComplaintsContact from "./pages/Complaints/ComplaintsContact";
import TearmandCondition from "./pages/TearmAndConditions/TearmandCondition";
import UpdateContactDetails from "./pages/UpdateContactDetails/UpdateContactDetails";
import AdminAccess from "./pages/AdminAccess/AdminAccess";
import Settings from "./pages/Setting/Settings";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

// Restaurant Layout & Pages
import RestaurantLayout from "./components/RestaurantLayout";
import RestaurantDashboard from "./pages/Dashboard/RestaurantDashboard";
import RestaurantOrders from "./pages/RestaurantOrders/RestaurantOrders";
import RestaurantMenu from "./pages/RestaurantMenu/RestaurantMenu";
import Earnings from "./pages/RestaurantEarnings/Earnings";
import Transactions from "./pages/RestaurantTransactions/Transactions";
import Reviews from "./pages/RestaurantReviews/Reviews";
import Offers from "./pages/RestaurantOffers/Offers";
import RestaurantProfile from "./pages/RestaurantProfile/RestaurantProfile";
import RestaurantSupport from "./pages/RestaurantSupport/RestaurantSupport";
import RestaurantAbout from "./pages/RestaurantAbout/RestaurantAbout";
import RestaurantContact from "./pages/RestaurantContact/RestaurantContact";
import RestaurantNotifications from "./pages/RestaurantNotifications.js/RestaurantNotifications";
// import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* 🛠️ Admin Routes */}
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-customers" element={<ManageCustomer />} />
          <Route path="manage-customer/customer-detail" element={<CustomerDetails />} />
          <Route path="manage-restaurants" element={<ManageRestaurants />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reports" element={<Reports />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="complaints" element={<ComplaintsContact />} />
          <Route path="terms" element={<TearmandCondition />} />
          <Route path="contact-details" element={<UpdateContactDetails />} />
          <Route path="admin-access" element={<AdminAccess />} />
          <Route path="settings" element={<Settings />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Route>

        {/* 🍽️ Restaurant Routes */}
        <Route path="/restaurant" element={<RestaurantLayout />}>
          <Route index element={<RestaurantDashboard />} />
          <Route path="orders" element={<RestaurantOrders />} />
          <Route path="menu" element={<RestaurantMenu />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="offers" element={<Offers />} />
          <Route path="notifications" element={<RestaurantNotifications />} />
          <Route path="profile" element={<RestaurantProfile />} />
          <Route path="support" element={<RestaurantSupport />} />
          <Route path="about" element={<RestaurantAbout />} />
          <Route path="contact" element={<RestaurantContact />} />
        </Route>
      </Routes>

      {/* 🛎️ Global Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </Router>
  );
}

export default App;
