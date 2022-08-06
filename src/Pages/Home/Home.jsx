import { Button, Card, Typography, Row, Col, Layout, Image, Space, Divider } from "antd";
import avatar from "../../Assets/avatar.png";
import { useState } from "react";
import { CodeOutlined, DatabaseOutlined, ClusterOutlined } from "@ant-design/icons/lib/icons";

export const Home = () => {
    const { Title, Text } = Typography;
    const [focusEffect, setFocusEffect] = useState(true);

    setTimeout(() => {
        setFocusEffect(!focusEffect);
    }, 900);

    const skillsSection = [
        {
            icon: <CodeOutlined />,
            description: "Frontend is my main skill currently, is what I've studied and practiced the most in the last years.",
            title: "Frontend",
            languages: [
                "Javascript", 
                "CSS", 
                "Typescript",
                "Python",
                "C",
            ],
            tools: [
                "ReactJS",
                "React Native",
                "Bootstrap",
                "Material UI",
                "Ant Design",
            ]
        },
        {
            icon: <DatabaseOutlined />,
            description: "I've been working with databases and API development for more than a year now, and I'm always looking for new ways to improve my skills.",
            title: "Backend",
            languages: [
                "NodeJS",
                "Python",
                "MySQL",
                "MariaDB",
            ],
            tools: [
                "ExpressJS",
                "Mysql2",
                "Sequelize",
                "DBeaver",
                "Postman",
            ]
        },
        {
            icon: <ClusterOutlined />,
            description: "Frontend is my main skill currently, is what I've studied and practiced the most in the last years.",
            title: "Extra Skills",
            languages: [
                "Javascript", 
                "CSS", 
                "Typescript",
                "Python",
                "C",
            ],
            tools: [
                "ReactJS",
                "React Native",
                "Bootstrap",
                "Material UI",
                "Ant Design",
            ]
        }
    ]

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#fff', }}>
            <Row justify="center">
                <Title level={1} style={{fontFamily: 'Source Code Pro, monospace'}}>
                    FullStack Web developer
                </Title>
            </Row>   
            <Row justify="center" style={{marginBottom: '50px'}}>
                <Title level={4} style={{fontFamily: 'Source Code Pro, monospace'}}>
                    Coding is my passion, couldn't imagine my life without it<strong style={{color: focusEffect === true ? '#fff' : ''}}>_</strong>
                </Title>
            </Row>
            <Row justify="center" style={{marginBottom: '100px'}}>
                <Image src={avatar} preview={false}/>
            </Row>
            <Card style={{backgroundColor: '#9D2053', color: '#fff', padding: '70px', height: '350px'}}>
                <Row justify="center">
                    <Title level={3} style={{fontFamily: 'Source Code Pro, monospace', color: '#fff'}}>
                        Hey, my name is Juan, I'm glad you're here.
                    </Title>
                </Row>
                <Row justify="center">
                    <Col style={{textAlign: 'center'}} span={16}>
                        <Text style={{color: '#fff', fontFamily: 'Source Code Pro, monospace'}}>
                            I started my academic life as mechanical engineering student, but a few years later, I talked to a friend of mine who 
                            presented me a algorithm course and I decided to take it, since then, I started to love programming and solving problems,
                            which made me much more disciplined and self-motivated, so I decided to drop mechanical engineering and start 
                            to learn web development.
                        </Text>
                    </Col>
                </Row>
            </Card>
            <Row justify="center" style={{marginTop: '-50px'}} gutter={16}>
                {skillsSection.map((skill, index) => {
                    return(
                        <Col span={7} key={index}>
                            <Card style={{border: 'none', backgroundColor: '#111625', borderRadius: '15px', height: '550px'}}>
                                <Row justify="center">
                                    <Title level={1} style={{color: '#fff', backgroundColor: '#9D2053', clipPath: 'circle()', padding: '15px'}}>{skill.icon}</Title>
                                </Row>
                                <Row justify="center">
                                    <Title level={4} style={{color: '#fff'}}>{skill.title}</Title>
                                </Row>
                                <Row justify="center">
                                    <Col span={18} style={{textAlign: 'center'}}>
                                        <Text style={{color: '#fff'}}>{skill.description}</Text>
                                    </Col>
                                </Row>
                                <Row justify="center" style={{marginTop: '20px'}}>
                                    <Title level={4} style={{color: '#9D2053'}}>Main languages</Title>
                                </Row>
                                <Row justify="center">
                                    <Space split={<Divider type="vertical" style={{backgroundColor: '#fff'}} />} wrap>
                                            {skill.languages.map((language, index) => {
                                                return(
                                                    <Text style={{color: '#fff'}} key={index}>{language}</Text>
                                                );
                                            })} 
                                    </Space>
                                </Row>
                                <Row justify="center" style={{marginTop: '20px'}}>
                                    <Title level={4} style={{color: '#9D2053'}}>Main tools</Title>
                                </Row>
                                {skill.tools.map((tool, index) => {
                                    return(
                                        <Row justify="center" key={index}>
                                            <Text level={4} style={{color: '#fff'}}>{tool}</Text>
                                        </Row>
                                    );
                                })}
                            </Card>
                        </Col>    
                    )
                })}            
            </Row>
            <Row>
                complete
            </Row>
        </Layout>
    );
}