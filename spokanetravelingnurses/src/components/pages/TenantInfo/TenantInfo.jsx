import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import lease from "../../../assets/lease.pdf"
import payment from "../../../assets/payment.png"

const TenantInfo = () => {
  return (
    <div className="container">
      <section>
      <Title level={3}>Lease Agreement</Title>
      <Paragraph>
        Please download and read the lease. If you decide Spokane Traveling Nurses is the right home for you, please fill out
        the lease and e-mail it to host@spokanetravelingnurses.com.
      </Paragraph>
      </section>
      <Link to={lease} target="_blank" download>
        <Button type="default" icon={<DownloadOutlined />} size="large">
          Download
        </Button>
      </Link>
      <section className="resource_holder">
      <Title level={3}>Payment Information</Title>
      <Paragraph>
        The host tries to be as flexible as possible in regards to rent payment. Here are the types of payment they accept: 
      </Paragraph>
      <div className="payments">
        <img src={payment} className="payment-type" alt="payment types"/>
      </div>
      </section>
    </div>
  );
};

export default TenantInfo;
