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

export const ExperienceSectionCard = ({ project, index }) => {
  const { Title, Text } = Typography;

  return (
    <Col span={10} key={index}>
      <Card
        title={project.title}
        hoverable
        cover={<img alt={project.altTag} src={project.image} />}
      >
        {project.contentModal}
      </Card>
    </Col>
  );
};
