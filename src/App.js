import { Layout, Menu } from 'antd';
import "./App.css";
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
const { Header, Content, Sider,Footer } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <div className="app">
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
      <Sider>
        Sider
        <Avatar height={"16"} width={"16"}/>
      <Badge height={"16"}  />
      <Button>Home</Button>
      <Checkbox  height={"16"} width={"16"} />
      <Input />
      <Radio />
      <Select />
      <Switch />
      <Tag />
      <Pagination height={"16"}  />
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
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
      
     
    </div>
  );
}

export default App;
