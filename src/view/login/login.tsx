import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, message } from "antd";
import { YoLink } from "@/components";

function Login() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const href = "https://github.com/yozica/Yo-React-Admin";

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const login = () => {
    const { username, password } = loginForm;
    if (username.trim() == "" || password.trim() == "") {
      messageApi.warning("请将用户名或密码填写完整");
      return;
    }
    console.log(loginForm);
    navigate("/");
  };

  return (
    <div
      id="loginContainer"
      className="relative flex justify-evenly items-center gap-[100px] w-[100vw] h-[100vh] px-[10vw] [@media(max-width:800px)]:flex-col [@media(max-width:800px)]:justify-center [@media(max-width:800px)]:gap-[10vh]"
    >
      {contextHolder}
      <div id="logoArea">
        <h1
          id="title"
          className="relative font-bold text-[80px] before:absolute before:left-0 before:top-0 before:w-[80%] before:h-[100%] before:bg-gradient-to-r before:from-purple-500 before:to-pink-500 before:z-[-1] before:blur-[70px] [@media(max-width:800px)]:before:w-full"
        >
          Yozica Admin
        </h1>
        <p id="else" className="text-[20px]">
          If you want to know more information, please visit my&nbsp;
          <YoLink href={href}>github</YoLink>.
        </p>
      </div>
      <div
        id="loginArea"
        className="flex flex-col gap-[20px] min-w-[300px] max-w-[400px]"
      >
        <Input
          className="w-full h-[40px] px-[20px] shadow"
          value={loginForm.username}
          onChange={(e) =>
            setLoginForm({ ...loginForm, username: e.target.value })
          }
          placeholder="请输入用户名"
        ></Input>
        <Input
          className="w-full h-[40px] px-[20px] shadow"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
          placeholder="请输入密码"
        ></Input>
        <Button
          className="w-full h-[40px] shadow"
          type="primary"
          onClick={login}
        >
          登录
        </Button>
      </div>
    </div>
  );
}

export default Login;
