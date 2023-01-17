import {
  Button,
  Card,
  Typography,
  Row,
  Col,
  Layout,
  Image,
  Space,
  Divider,
} from "antd";

export const SkillSectionCard = ({ skill, index }) => {
  const { Title, Text } = Typography;

  return (
    <Col span={8} index={index}>
      <Card
        style={{
          border: "none",
          backgroundColor: "#111625",
          borderRadius: "15px",
          height: "550px",
          margin: "0 10%",
        }}
      >
        <Row justify="center">
          <Title
            level={1}
            style={{
              color: "#fff",
              backgroundColor: "#9D2053",
              clipPath: "circle()",
              padding: "15px",
            }}
          >
            {skill.icon}
          </Title>
        </Row>
        <Row justify="center">
          <Title level={4} style={{ color: "#fff" }}>
            {skill.title}
          </Title>
        </Row>
        <Row justify="center">
          <Col span={18} style={{ textAlign: "center" }}>
            <Text style={{ color: "#fff" }}>{skill.description}</Text>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Title level={4} style={{ color: "#9D2053" }}>
            Main languages
          </Title>
        </Row>
        <Row justify="center">
          <Space
            split={
              <Divider type="vertical" style={{ backgroundColor: "#fff" }} />
            }
            wrap
          >
            {skill.languages.map((language, index) => {
              return (
                <Text style={{ color: "#fff" }} key={index}>
                  {language}
                </Text>
              );
            })}
          </Space>
        </Row>
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Title level={4} style={{ color: "#9D2053" }}>
            Main tools
          </Title>
        </Row>
        {skill.tools.map((tool, index) => {
          return (
            <Row justify="center" key={index}>
              <Text level={4} style={{ color: "#fff" }}>
                {tool}
              </Text>
            </Row>
          );
        })}
      </Card>
    </Col>
  );
};
