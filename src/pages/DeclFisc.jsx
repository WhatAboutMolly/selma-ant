import React from "react";
import DFCalendar from "../components/DFCalendar";
import { Row, Select, Space, Col } from "antd";

export default function DeclFisc() {
  return (
    <div className="home-container">
      <div>
        <Row gutter={16}>
          <Col>
            <Select
              defaultValue="Lina Benhammouda"
              style={{
                width: 200,
              }}
              options={[
                {
                  value: "Lina Benhammouda",
                  label: "Lina Benhammouda",
                },
                {
                  value: "Amine Zerine",
                  label: "Amine Zerine",
                },
              ]}
            />
          </Col>
          <Col>
            <Select
              defaultValue="HP"
              style={{
                width: 200,
              }}
              options={[
                {
                  value: "HP",
                  label: "HP",
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
