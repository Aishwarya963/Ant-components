import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import Alert from "./components/Alert";
import Avatar from "./components/Avatar.js";
import BackToTop from "./components/BackToTop";
import Badge from "./components/Badge.js";
import Button from "./components/Button.js";
import Checkbox from "./components/Checkbox.js";
import DatePicker from "./components/DatePicker";
import DropDown from "./components/DropDown";
import Input from "./components/Input.js";
import Message from "./components/Message";
import Model from "./components/Model";
import Notification from "./components/Notification";
import Pagination from "./components/Pagination";
import PopupConfirm from "./components/PopupConfirm";
import Progress from "./components/Progress";
import Radio from "./components/Radio.js";
import Rating from "./components/Rating";
import Select from "./components/Select.js";
import Slider from "./components/Slider";
import Steps from "./components/Steps";
import Switch from "./components/Switch.js";
import Tabs from "./components/Tabs";
import Tag from "./components/Tag.js";
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
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ overflow: "hidden" }}
        >
          <Menu theme="light" mode="inline">
            <Menu.Item key="1" >
              <Avatar height={"16"} width={"16"} />
            </Menu.Item>
            <Menu.Item key="2" >
              <Badge height={"16"} />
            </Menu.Item>
            <Menu.Item key="3" >
              <Button>Home</Button>
            </Menu.Item>
            <Menu.Item key="4" >
              <Checkbox height={"16"} width={"16"} />
            </Menu.Item>
            <Menu.Item key="5" >
              <Input />
            </Menu.Item>
            <Menu.Item key="6" >
              <Radio />
            </Menu.Item>
            <Menu.Item key="7" >
              <Select />
            </Menu.Item>
            <Menu.Item key="8" >
              <Switch />
            </Menu.Item>
          </Menu>




         
        
          
          
          <Tag />
          <Pagination height={"16"} />
          <Tabs />
          <DropDown />
          <Steps />
          <BackToTop />
          <DatePicker />
          <TimePicker />
          <Slider />
          <Upload />
          <Rating />
          <Tooltip />
          <Notification />
          <Progress />
          <Message />
          <Alert />
          <PopupConfirm />
          <Model />
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              content
        </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    </div>
  );
}

export default App;

