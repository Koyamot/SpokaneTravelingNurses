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
        To speed up the application process, please download and read the lease.
      </Paragraph>
      <Paragraph>
        If you decide Spokane Traveling Nurses is for you, please fill it out
        the lease, then e-mail to host@spokanetravelingnurses.com
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
