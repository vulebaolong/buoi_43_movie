import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../redux/slices/userSlice";
import { lcStorage } from "../../helpers/localStorage";
import { USER_LOGIN } from "../../contants/contants";
import Lottie from "lottie-react";
import bgAnimation from "./bgAnimation.json" 

function LoginPage() {
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mes = (type, content) => {
        messageApi.open({
            type,
            content,
        });
    };

    const onFinish = (values) => {
        console.log("Success:", values);
        axios
            .post("/QuanLyNguoiDung/DangNhap", values)
            .then((result) => {
                const { data, status } = result;
                mes("success", "Đăng nhập thành công");
                dispatch(setLogin(data.content));
                lcStorage.set(USER_LOGIN, data.content);
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
                mes("error", "Đăng nhập thất bại");
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            {contextHolder}
            <div className="h-screen flex items-center justify-center">
                <div className="container p-10 rounded dark:bg-slate-700 flex">
                    <div className="w-1/2 h-full">
                    <Lottie animationData={bgAnimation} loop={true} />
                    </div>
                    <div className="w-1/2 flex items-center">
                        <Form
                            className="mx-auto"
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="taiKhoan"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="matKhau"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button className="bg-blue-500 hover:bg-blue-900" type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
