import React, { useEffect, useState } from "react";
import { Table, Avatar, Tag, Input, Spin, message, Switch, Button, Space, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
import "./ManageCustomers.css";

const ManageCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://192.168.1.68:5000/api/getAllUsers");
      setCustomers(response.data.data || []);
      console.log(response);
    } catch (error) {
      message.error("Failed to fetch customers");
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusToggle = async (checked, record) => {
    try {
      // Backend call to update status
      await axios.put(`http://192.168.1.68:5000/api/updateUserStatus/${record._id}`, {
        status: checked ? "Active" : "Inactive"
      });
      message.success(`User status updated to ${checked ? "Active" : "Inactive"}`);
      fetchCustomers(); // Refresh list
    } catch (error) {
      message.error("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.1.68:5000/api/deleteUser/${id}`);
      message.success("Customer deleted");
      fetchCustomers();
    } catch (error) {
      message.error("Failed to delete customer");
    }
  };

  const columns = [
    {
      title: "Avatar",
      dataIndex: "name",
      key: "avatar",
      render: (text) => <Avatar>{text?.charAt(0).toUpperCase()}</Avatar>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="customer-name">{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Registered On",
      dataIndex: "date",
      key: "date",
      render: (date) => moment(date).format("DD MMM YYYY, hh:mm A"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <Switch
          checked={status === "Active"}
          onChange={(checked) => handleStatusToggle(checked, record)}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} type="primary" size="small">Edit</Button>
          <Popconfirm
            title="Are you sure to delete this customer?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} type="primary" danger size="small">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="manage-customers-container">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <h2 className="page">Manage <span>Customers</span></h2>
        <div style={{ display: "flex", gap: 10 }}>
          <Input placeholder="Search Customers..." style={{ width: 200 }} />
          <Button type="primary" icon={<PlusOutlined />}>
            Add Customer
          </Button>
        </div>
      </div>

      {loading ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={customers.map((item, index) => ({ ...item, key: item._id || index }))}
          pagination={{ pageSize: 10 }}
          bordered
        />
      )}
    </div>
  );
};

export default ManageCustomer;
