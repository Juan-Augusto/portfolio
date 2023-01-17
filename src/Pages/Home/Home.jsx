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
import avatar from "../../Assets/avatar.png";
import { useState } from "react";
import { skillsSection } from "../../Constants/mainSkills";
import { projects } from "../../Constants/projects";
import { SkillSectionCard } from "../../Components/Cards.jsx/SkillSectionCard";
import { ExperienceSectionCard } from "../../Components/Cards.jsx/ExperienceSectionCard";
export const Home = () => {
  const { Title, Text } = Typography;
  const [focusEffect, setFocusEffect] = useState(true);
  setTimeout(() => {
    setFocusEffect(!focusEffect);
  }, 900);

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <Row justify="center">
        <Title level={1} style={{ fontFamily: "Source Code Pro, monospace" }}>
          FullStack Web developer
        </Title>
      </Row>
      <Row justify="center" style={{ marginBottom: "50px" }}>
        <Title level={4} style={{ fontFamily: "Source Code Pro, monospace" }}>
          Coding is my passion, couldn't imagine my life without it
          <strong style={{ color: focusEffect === true ? "#fff" : "" }}>
            _
          </strong>
        </Title>
      </Row>
      <Row justify="center" style={{ marginBottom: "100px" }}>
        <Image src={avatar} preview={false} />
      </Row>
      <Card
        style={{
          backgroundColor: "#9D2053",
          color: "#fff",
          padding: "70px",
          height: "350px",
        }}
      >
        <Row justify="center">
          <Title
            level={3}
            style={{ fontFamily: "Source Code Pro, monospace", color: "#fff" }}
          >
            Hey, my name is Juan, I'm glad you're here.
          </Title>
        </Row>
        <Row justify="center">
          <Col style={{ textAlign: "center" }} span={16}>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Source Code Pro, monospace",
              }}
            >
              I started my academic life as mechanical engineering student, but
              a few years later, I talked to a friend of mine who presented me a
              algorithm course and I decided to take it, since then, I started
              to love programming and solving problems, which made me much more
              disciplined and self-motivated, so I decided to drop mechanical
              engineering and start to learn web development.
            </Text>
          </Col>
        </Row>
      </Card>
      <Row justify="center" style={{ marginTop: "-50px" }}>
        {skillsSection.map((skill, index) => {
          return <SkillSectionCard key={index} skill={skill} index={index} />;
        })}
      </Row>
      <Row justify="center" style={{ marginTop: "50px" }}>
        <Col>
          <Title
            level={2}
            style={{
              fontFamily: "Source Code Pro, monospace",
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            My recent work
          </Title>
          <Text
            style={{
              fontFamily: "Source Code Pro, monospace",
              fontWeight: 400,
              fontSize: "24px",
            }}
          >
            Checkout which projects I've worked on
          </Text>
        </Col>
      </Row>
      <Row justify="space-evenly" gutter={[0, 16]}>
        {projects.map((project, index) => {
          return (
            <ExperienceSectionCard
              key={index}
              project={project}
              index={index}
            />
          );
        })}
      </Row>
    </Layout>
  );
};
