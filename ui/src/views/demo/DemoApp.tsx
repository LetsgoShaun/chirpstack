import React, { useState } from "react";
import { Layout, Menu, Card, Row, Col, Statistic, Table, Button, Space, Typography, Divider } from "antd";
import { 
  DashboardOutlined, 
  UserOutlined, 
  TeamOutlined, 
  AppstoreOutlined,
  ApiOutlined,
  SettingOutlined,
  GatewayOutlined,
  MobileOutlined
} from "@ant-design/icons";
import { Line } from "react-chartjs-2";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const DemoApp: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");

  // 模拟数据
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Uplink Messages',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Downlink Messages',
        data: [8, 15, 2, 4, 1, 2],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Message Statistics'
      }
    }
  };

  const deviceColumns = [
    {
      title: 'Device EUI',
      dataIndex: 'devEui',
      key: 'devEui',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <span style={{ color: status === 'Active' ? 'green' : 'red' }}>
          {status}
        </span>
      ),
    },
    {
      title: 'Last Seen',
      dataIndex: 'lastSeen',
      key: 'lastSeen',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space size="middle">
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </Space>
      ),
    },
  ];

  const deviceData = [
    {
      key: '1',
      devEui: '0102030405060708',
      name: 'Temperature Sensor 1',
      status: 'Active',
      lastSeen: '2024-01-15 10:30:00',
    },
    {
      key: '2',
      devEui: '0807060504030201',
      name: 'Humidity Sensor 1',
      status: 'Active',
      lastSeen: '2024-01-15 10:25:00',
    },
    {
      key: '3',
      devEui: '1122334455667788',
      name: 'GPS Tracker 1',
      status: 'Inactive',
      lastSeen: '2024-01-14 15:45:00',
    },
  ];

  const gatewayColumns = [
    {
      title: 'Gateway ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <span style={{ color: status === 'Online' ? 'green' : 'red' }}>
          {status}
        </span>
      ),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
  ];

  const gatewayData = [
    {
      key: '1',
      id: '0102030405060708',
      name: 'Gateway Amsterdam',
      status: 'Online',
      location: 'Amsterdam, NL',
    },
    {
      key: '2',
      id: '0807060504030201',
      name: 'Gateway Rotterdam',
      status: 'Online',
      location: 'Rotterdam, NL',
    },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case "dashboard":
        return (
          <div>
            <Title level={2}>ChirpStack LoRaWAN Network Server - Demo</Title>
            <Paragraph>
              这是一个ChirpStack前端框架的演示版本，展示了UI组件和布局功能。
              所有数据都是模拟数据，用于演示前端框架的能力。
            </Paragraph>
            
            <Row gutter={16} style={{ marginBottom: 24 }}>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Active Devices"
                    value={1128}
                    prefix={<MobileOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Gateways"
                    value={24}
                    prefix={<GatewayOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Applications"
                    value={15}
                    prefix={<AppstoreOutlined />}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Statistic
                    title="Organizations"
                    value={8}
                    prefix={<TeamOutlined />}
                  />
                </Card>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Card title="Message Statistics" style={{ marginBottom: 16 }}>
                  <Line data={chartData} options={chartOptions} />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Recent Activity" style={{ marginBottom: 16 }}>
                  <div style={{ height: 300, overflow: 'auto' }}>
                    <p>• Device 0102030405060708 sent uplink message</p>
                    <p>• Gateway Amsterdam received 5 packets</p>
                    <p>• New device 1122334455667788 registered</p>
                    <p>• Application "Smart City" created</p>
                    <p>• Device 0807060504030201 went offline</p>
                    <p>• Gateway Rotterdam status changed to online</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        );
      
      case "devices":
        return (
          <div>
            <Title level={2}>Devices</Title>
            <Table 
              columns={deviceColumns} 
              dataSource={deviceData} 
              pagination={{ pageSize: 10 }}
            />
          </div>
        );
      
      case "gateways":
        return (
          <div>
            <Title level={2}>Gateways</Title>
            <Table 
              columns={gatewayColumns} 
              dataSource={gatewayData} 
              pagination={{ pageSize: 10 }}
            />
          </div>
        );
      
      case "applications":
        return (
          <div>
            <Title level={2}>Applications</Title>
            <Card>
              <p>This is a demo of the Applications page. In a real implementation, this would show application management features.</p>
            </Card>
          </div>
        );
      
      case "users":
        return (
          <div>
            <Title level={2}>Users</Title>
            <Card>
              <p>This is a demo of the Users page. In a real implementation, this would show user management features.</p>
            </Card>
          </div>
        );
      
      case "organizations":
        return (
          <div>
            <Title level={2}>Organizations</Title>
            <Card>
              <p>This is a demo of the Organizations page. In a real implementation, this would show organization management features.</p>
            </Card>
          </div>
        );
      
      case "api-keys":
        return (
          <div>
            <Title level={2}>API Keys</Title>
            <Card>
              <p>This is a demo of the API Keys page. In a real implementation, this would show API key management features.</p>
            </Card>
          </div>
        );
      
      case "settings":
        return (
          <div>
            <Title level={2}>Settings</Title>
            <Card>
              <p>This is a demo of the Settings page. In a real implementation, this would show system configuration options.</p>
            </Card>
          </div>
        );
      
      default:
        return <div>Select a menu item</div>;
    }
  };

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "devices",
      icon: <MobileOutlined />,
      label: "Devices",
    },
    {
      key: "gateways",
      icon: <GatewayOutlined />,
      label: "Gateways",
    },
    {
      key: "applications",
      icon: <AppstoreOutlined />,
      label: "Applications",
    },
    {
      key: "users",
      icon: <UserOutlined />,
      label: "Users",
    },
    {
      key: "organizations",
      icon: <TeamOutlined />,
      label: "Organizations",
    },
    {
      key: "api-keys",
      icon: <ApiOutlined />,
      label: "API Keys",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#fff", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Title level={3} style={{ margin: 0, color: "#1890ff" }}>
            ChirpStack Demo
          </Title>
        </div>
      </Header>
      <Layout>
        <Sider width={250} theme="light">
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            style={{ height: "100%", borderRight: 0 }}
            items={menuItems}
            onClick={({ key }) => setSelectedKey(key)}
          />
        </Sider>
        <Layout style={{ padding: "24px" }}>
          <Content style={{ background: "#fff", padding: 24, margin: 0, minHeight: 280 }}>
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DemoApp; 