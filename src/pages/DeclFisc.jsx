import React from "react";
import DFCalendar from "../components/DFCalendar";
import { Row, Select, Space, Col } from "antd/dist/antd";

export default function DeclFisc() {
  return (
    <div className="home-container">
      <div>
        <Row gutter={16}>
          <Col>
            <Select
              defaultValue="Ould Ahmed Islam"
              style={{
                width: 200,
              }}
              options={[
                {
                  value: "Ould Ahmed Islam",
                  label: "Ould Ahmed Islam",
                },
                {
                  value: "Medjaled Hind",
                  label: "Medjaled Hind",
                },
              ]}
            />
          </Col>
          <Col>
            <Select
              defaultValue="Superette les frères Belkacemi"
              style={{
                width: 300,
              }}
              options={[
                {
                  value: "Superette les frères Belkacemi",
                  label: "Superette les frères Belkacemi",
                },
              ]}
            />
          </Col>
        </Row>
        <DFCalendar />
      </div>
    </div>
  );
}
