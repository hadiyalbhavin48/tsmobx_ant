
import React, { useEffect } from 'react'
import '../../Style.css'
import Store, { IStore } from '../Stores/Store'
import { Breadcrumb, Layout, Menu, theme, Col, Divider, Row, Card, Space } from 'antd';

const { Header, Content, Footer } = Layout;

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
const Ant_userDetailsList: React.FC = () => {

    useEffect(() => {
        Store.fetchUser();
    }, [])


    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (


        <div>

            <Layout>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="demo-logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(3).fill(null).map((_, index) => ({
                            key: String(index + 1),
                            label: `nav ${index + 1}`,
                        }))}

                    />
                </Header>

                <Content>
                    <Row gutter={[16, 16]}>
                        {
                            Store.getuserDetials.map((albul: IStore, index: number) => {
                                return (
                                    // console.log("title",albul.titleData.label),

                                    <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                                        <Space direction="vertical" size="middle" style={{ display: 'flex' }} className='margin_top'>
                                            <Card title="" size="small" className='cardHeight'>
                                                {/* Show multiple image */}

                                                {/* {albul.images.map((image: any, imageIndex: number) => (
                                console.log("image" , image.label),

                                <img src={image[0].label} alt={`images not fond ${imageIndex}`} />
                            ))} */}

                                                {/* Show only for one image */}

                                                <div className='image_margin'>
                                                    <img src={albul.images[2].label} alt={`image not fond ${index}`}  />
                                                </div>

                                                <h6>{albul.titleData.label}</h6>
                                                <h6>{albul.priceData.label}</h6>
                                            </Card>
                                        </Space>
                                    </Col>


                                )
                            })
                        }
                    </Row>
                </Content>

            </Layout>
        </div>
    )
}

export default Ant_userDetailsList