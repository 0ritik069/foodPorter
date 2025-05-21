import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineBell,
  AiOutlineBarChart,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  MdOutlineRestaurant,
  MdOutlineReportProblem,
  MdRateReview,
} from "react-icons/md";
import {
  RiCoupon3Line,
  RiLockPasswordLine,
} from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { TbFileDescription } from "react-icons/tb";
import { Layout, Menu, Avatar, theme } from "antd";
import logo_png from "../Food_Porter_Logo__png.png";
import "./MainLayout.css";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getActiveKey = () => {
    const path = location.pathname.replace("/admin/", "");
    return path || "dashboard";
  };

  const signOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuItems = [
    { key: "dashboard", icon: AiOutlineDashboard, label: "Dashboard" },
    { key: "manage-customers", icon: AiOutlineUser, label: "Manage Customers" },
    { key: "manage-restaurants", icon: MdOutlineRestaurant, label: "Manage Restaurants" },
    { key: "manage-orders", icon: IoIosListBox, label: "Manage Orders" },
    { key: "payments", icon: FaRegCreditCard, label: "Payments & Earnings" },
    { key: "reports", icon: MdRateReview, label: "Reports" },
    { key: "analytics", icon: AiOutlineBarChart, label: "Analytics" },
    { key: "notifications", icon: AiOutlineBell, label: "Notifications" },
    { key: "complaints", icon: MdOutlineReportProblem, label: "Complaints & Contact" },
    {
      key: "policies",
      icon: TbFileDescription,
      label: "Policies",
      children: [
        { key: "terms", label: "Terms & Conditions" },
        { key: "privacy", label: "Privacy Policy" },
        { key: "contact-details", label: "Update Contact Details" },
      ],
    },
    { key: "admin-access", icon: RiLockPasswordLine, label: "Admin Access" },
    { key: "settings", icon: AiOutlineSetting, label: "Settings" },
    { key: "signout", icon: AiOutlineLogout, label: "Logout" },
  ];

  return (
    <Layout>
      <Sider collapsible collapsed={collapsed} trigger={null} style={{ background: "#fff" }}>
        <div style={{ padding: "2px", textAlign: "center" }}>
          <img
            src={logo_png}
            alt="Logo"
            style={{ width: collapsed ? "50px" : "120px", transition: "width 0.3s" }}
          />
        </div>
        <Menu
          mode="inline"
          selectedKeys={[getActiveKey()]}
          className="custom-sidebar-menu"
          onClick={({ key }) => {
            if (key === "signout") signOut();
            else navigate(`/admin/${key === "dashboard" ? "" : key}`);
          }}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: React.createElement(item.icon, {
              className: `custom-icon ${getActiveKey() === item.key ? "active-icon" : ""}`,
            }),
            label: item.label,
            className: `custom-menu-item ${getActiveKey() === item.key ? "active-item" : ""}`,
            children: item.children,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
            padding: "0 10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            onClick: () => setCollapsed(!collapsed),
            style: { fontSize: 20, color: "#ef4444", marginTop: "18px" },
          })}
          <div style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
            <span style={{ color: "#ef4444" }}>Ritik Mittal</span>
          </div>
        </Header>
        <Content
          style={{
            margin: "2px 1px",
            padding: 20,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
