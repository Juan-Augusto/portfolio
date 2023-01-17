import {
  CodeOutlined,
  DatabaseOutlined,
  ClusterOutlined,
} from "@ant-design/icons/lib/icons";

export const skillsSection = [
  {
    icon: <CodeOutlined />,
    description:
      "Frontend is my main skill currently, is what I've studied and practiced the most in the last years.",
    title: "Frontend",
    languages: ["Javascript", "CSS", "Typescript", "Python", "C"],
    tools: [
      "ReactJS",
      "React Native",
      "Bootstrap",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    icon: <DatabaseOutlined />,
    description:
      "I've been working with databases and API development for more than a year now, and I'm always looking for new ways to improve my skills.",
    title: "Backend",
    languages: ["NodeJS", "Python", "MySQL", "MariaDB"],
    tools: ["ExpressJS", "Mysql2", "Sequelize", "DBeaver", "Postman"],
  },
  {
    icon: <ClusterOutlined />,
    description:
      "Throughout my experience, I've had several opportunities to work with cloud sevices, mainly with AWS, always learning from my colleagues and from the internet.",
    title: "Extra Skills",
    languages: ["Dedication", "Hard work", "Teamwork", "Scrum", "Agile"],
    tools: ["DynamoDB", "Cognito", "Lambda", "API Gateway", "S3"],
  },
];
