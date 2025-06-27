import { App, Button, Card, Divider, Form, Input } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { FormProps } from 'antd';
import { loginAPI } from "services/api";
import './login.scss';
type FieldType = {
    username?: string;
    password?: string;
};
const LoginPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const { message, notification } = App.useApp();
    const navigate = useNavigate();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        setIsSubmit(true);
        const { username, password } = values;

        const res = await loginAPI(username, password);
        if (res.data) {
            localStorage.setItem('token', res.data.access_token);
            message.success("Đăng nhập thành công");
            navigate('/login');
        } else {
            notification.error({
                message: "Đăng nhập thất bại",
                description: res.message,
                duration: 5
            })
        }
        setIsSubmit(false);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login-page'>
            <main className="main">
                <div className="container">
                    <Card>
                        <section className="wrapper">
                            <div className="heading">
                                <h2 className="text text large">Đăng nhập</h2>
                            </div>
                            <Divider />
                            <Form
                                name="form-register"
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                requiredMark={true}
                            >
                                <Form.Item<FieldType>
                                    label="Email"
                                    name="username"
                                    rules={[{ required: true, message: 'Vui lòng nhập email!' },
                                    { type: 'email', message: 'Vui lòng nhập đúng cú pháp email!' }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Vui lòng nhập password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item label={null}>
                                    <Button type="primary" htmlType="submit" loading={isSubmit} style={{ width: '100%' }}>
                                        Đăng nhập
                                    </Button>
                                </Form.Item>
                                <Divider>Or</Divider>
                                <p className="text text-normal text-center">Chưa có tài khoản? <Link to="/register">Đăng ký</Link></p>
                            </Form>
                        </section>
                    </Card>
                </div>
            </main>
        </div>
    )
}

export default LoginPage