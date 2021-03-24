import { Anchor, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Alert from "./components/Alert";
import Avatar from "./components/Avatar.js";
import BackToTop from "./components/BackToTop";
import Badge from "./components/Badge.js";
import Button from "./components/Button.js";
import Checkbox from "./components/Checkbox.js";
import DangerButton from "./components/DangerButton";
import DashedButton from "./components/DashedButton";
import DatePicker from "./components/DatePicker";
import DisableButton from "./components/DisableButton";
import DropDown from "./components/DropDown";
import GhostButton from "./components/GhostButton";
import Input from "./components/Input.js";
import Message from "./components/Message";
import Model from "./components/Model";
import Notification from "./components/Notification";
import PageHeader from "./components/PageHeader";
import Pagination from "./components/Pagination";
import PopupConfirm from "./components/PopupConfirm";
import Progress from "./components/Progress";
import Radio from "./components/Radio.js";
import Rating from "./components/Rating";
import SecondaryButton from "./components/SecondaryButton";
import Select from "./components/Select.js";
import Slider from "./components/Slider";
import Steps from "./components/Steps";
import Switch from "./components/Switch.js";
import Tabs from "./components/Tabs";
import Tag from "./components/Tag.js";
import TextButton from "./components/TextButton";
import TimePicker from "./components/TimePicker";
import Tooltip from "./components/Tooltip";
import Upload from "./components/Upload";
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import "./index.css";
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <div className="app">
      <Layout>
        <Sider
          width="200"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{  overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0, }}
        >
          <Menu theme="dark" mode="inline">
            <Menu.Item key="8">
              
              <SecondaryButton height="16px"/>
            </Menu.Item>
            <Menu.Item key="9">
              <DashedButton height="16px"/>
            </Menu.Item>
            <Menu.Item key="10">
              <TextButton height="16px" />
            </Menu.Item>
            <Menu.Item key="11">
              <GhostButton height="16px" />
            </Menu.Item>
            <Menu.Item key="12">
              <DangerButton height="16px" />
            </Menu.Item>
            <Menu.Item key="13">
              <PageHeader height="16px" />
            </Menu.Item>
            <Menu.Item key="14">
            
              <Anchor height="16px" />
            </Menu.Item>
          </Menu>

          
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
