import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const TenantInfo = () => {
  return (
    <div className="container">
      <Title level={3}>Thank you for your interest!</Title>
      <Paragraph>
        Please download and read the lease. If you decide Spokane Traveling Nurses is the right home for you, please fill out
        the lease and e-mail it to host@spokanetravelingnurses.com.
      </Paragraph>
      <Link to="/download/lease.pdf" target="_blank" download>
        <Button type="default" icon={<DownloadOutlined />} size="large">
          Download
        </Button>
      </Link>
    </div>
  );
};

export default TenantInfo;
