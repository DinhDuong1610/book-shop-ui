import type { FormProps } from 'antd';
import { Button, Card, Divider, Form, Input } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

type FieldType = {
    fullName?: string;
    email?: string;
    password?: string;
    phone?: string;
};
const RegisterPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        setIsSubmit(true);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='register-page'>
            <main className="main">
                <div className="container">
                    <Card>
                        <section className="wrapper">
                            <div className="heading">
                                <h2 className="text text large">Đăng ký tài khoản</h2>
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
                                    label="Họ và tên"
                                    name="fullName"
                                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    label="Email"
                                    name="email"
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

                                <Form.Item<FieldType>
                                    label="Số điện thoại"
                                    name="phone"
                                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' },
                                    { type: 'number', message: 'Vui lòng nhập số điện thoại!' }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item label={null}>
                                    <Button type="primary" htmlType="submit" loading={isSubmit} style={{ width: '100%' }}>
                                        Đăng ký
                                    </Button>
                                </Form.Item>
                                <Divider>Or</Divider>
                                <p className="text text-normal text-center">Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
                            </Form>
                        </section>
                    </Card>
                </div>
            </main>
        </div>
    )
}

export default RegisterPage