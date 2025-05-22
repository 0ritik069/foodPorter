import React from "react";
import { Form, Input, Button, Select } from "antd";
import "./RestaurantSupport.css";

const { TextArea } = Input;
const { Option } = Select;

const RestaurantSupport = () => {
  const handleSubmit = (values) => {
    console.log("Support Request Submitted:", values);
    // Handle backend API submission here
  };

  return (
    <div className="restaurant-support-container">
      <h2 className="page-heading">Support & Help</h2>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        className="support-form"
      >
        <Form.Item
          label="Issue Type"
          name="issueType"
          rules={[{ required: true, message: "Please select an issue type" }]}
        >
          <Select placeholder="Select issue type">
            <Option value="order">Order Issue</Option>
            <Option value="payment">Payment Problem</Option>
            <Option value="menu">Menu Update</Option>
            <Option value="account">Account Query</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: "Subject is required" }]}
        >
          <Input placeholder="Write subject here..." />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please describe your issue" }]}
        >
          <TextArea rows={4} placeholder="Explain your issue in detail..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-btn">
            Submit Request
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RestaurantSupport;
