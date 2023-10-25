
import React, { useEffect, useState } from "react";
import Store, { IStore } from "../Stores/Store";
import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover, Select } from "antd";
import {
    ShoppingCartOutlined,
    HeartTwoTone,
    SearchOutlined,
} from "@ant-design/icons";
import { observer } from "mobx-react-lite";

const { Header, Content } = Layout;
const { Option } = Select;

const Favorite: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
    const [categoryFilter, setCategoryFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [clickedItem, setClickedItem] = useState<IStore | null>(null);
    const [loading, setLoading] = useState(true);

    const [popopen, setPopOpen] = useState(false);
    const [favorites, setFavorites] = useState<string[]>([]);

    const handleOpenChange = (newOpen: boolean) => {
        setPopOpen(newOpen);
    };

    const searchData = (e: any) => {
        const searchData = e.target.value.trim();
        setSearchText(searchData);
        applyFilter(searchData, dateFilter, categoryFilter);
    };

    const category = (value: string) => {
        if (value === "all") {
            setCategoryFilter("");
        } else {
            setCategoryFilter(value);
        }
        applyFilter(searchText, dateFilter, value);
    };

    const date = (e: any) => {
        const dateSearch = e.target.value;
        setDateFilter(dateSearch);
        applyFilter(searchText, dateSearch, categoryFilter);
    };

    const applyFilter = (search: string, date: string, category: string) => {
        const filtered = Store.getuserDetials.filter((album) => {
            const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
            const dateMatch = album.releasedateData.label.includes(date);

            if (category === "all") {
                return searchMatch && dateMatch;
            } else {
                const categoryMatch = album.categoryData.label.toLowerCase().includes(category.toLowerCase());
                return searchMatch && dateMatch && categoryMatch;
            }
        });
        setFilterSearch(filtered);
    };

    const addToPartialList = (item: IStore) => {
        Store.addToPartialList(item);
    };


    const removeFromPartialList = (item: IStore) => {
        Store.removeFromPartialList(item);
    };

    const showModal = (item: IStore) => {
        setClickedItem(item);
        setOpen(true);
    };

    const handleOk = () => {
        setClickedItem(null);
        setOpen(false);
    };

    const handleCancel = () => {
        setClickedItem(null);
        setOpen(false);
    };

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favoriteList");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }

        Store.fetchUser().then(() => {
            setLoading(false);
            setFilterSearch(Store.getuserDetials);
        });
    }, [loading]);

    const content = (
        <div>
            <ul>
                {Store.getPartialList.map((item: IStore) => (
                    <li key={item.titleData.label}>
                        {item.titleData.label} - {item.priceData.label}
                        <button onClick={() => removeFromPartialList(item)} className="btn btn-primary ms-2">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

    const toggleFavorite = (item: IStore) => {
        const itemLabel = item.titleData.label;   // current title

        let updateFaviorite = [...favorites]
        if (isFavorite(item)) {
            // removeFromPartialList(item);
            // setFavorites(favorites.filter((favorite) => favorite !== itemLabel));
            updateFaviorite = favorites.filter((item) => item!== itemLabel)
        } else {
            // addToPartialList(item);
            // setFavorites([...favorites, itemLabel]);
            updateFaviorite.push(itemLabel)
        }

        setFavorites(updateFaviorite)
        localStorage.setItem("favoriteList" , JSON.stringify(updateFaviorite))
    };

 
    const isFavorite = (item: IStore) => {
        return favorites.includes(item.titleData.label);
    };

    const uniqueCategories = [...new Set(Store.getuserDetials.map((item) => item.categoryData.label))];
    return (
        <div>
            <Layout>
                <Header
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div className="demo-logo" />
                </Header>
                <Content style={{ background: "#DDDDDD" }}>
                    <div className="mt-3 inputBox mb-3">
                        <span className="searchtxt mt-2">Search : </span>
                        <Input
                            onChange={searchData}
                            placeholder="Enter Song Title"
                            className="inputWidth ms-2 me-2"
                            prefix={<SearchOutlined />}
                        />

                        <span className="searchtxt mt-2">Release Dates : </span>
                        <Input
                            type="date"
                            onChange={date}
                            placeholder="Select Release Date"
                            className="inputWidth ms-2"
                        />

                        <Select
                            defaultValue="all"
                            style={{ width: 120 }}
                            onChange={category}
                            className="ms-2 mt-2"
                        >
                            <Option key="all" value="all">
                                All
                            </Option>
                            {uniqueCategories.map((category, index) => (
                                <Option key={index} value={category}>
                                    {category}
                                </Option>
                            ))}
                        </Select>
                        <Popover
                            content={content}
                            title="Favorites Songs"
                            trigger="click"
                            open={popopen}
                            onOpenChange={handleOpenChange}
                        >
                            <ShoppingCartOutlined className="cart ms-3 mt-2" />
                        </Popover>
                    </div>
                    <Spin spinning={loading} tip="Loading...">
                        <Row gutter={[16, 16]}>
                            {filterSearch.map((album: IStore, index: number) => (
                                <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
                                        <Card
                                            title=""
                                            size="small"
                                            className="cardHeight"
                                            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)", margin: "20px" }}
                                            cover={<img src={album.images[2].label} alt="" />}
                                        >
                                            <div className="image_margin"></div>
                                            <Card.Meta
                                                title={album.titleData.label}
                                                description={album.priceData.label}
                                            />
                                            <Button type="primary" onClick={() => showModal(album)} className="mb-3 mt-2">
                                                See More..
                                            </Button>
                                            <br />
                                            <Button type="primary" onClick={() => addToPartialList(album)} className="mb-2">
                                                Add to Favorites
                                            </Button>{" "}
                                            <br />
                                            <HeartTwoTone
                                                twoToneColor={isFavorite(album) ? "red" : ""}
                                                onClick={() => toggleFavorite(album)}
                                            />
                                        </Card>
                                    </Space>
                                </Col>
                            ))}
                        </Row>
                    </Spin>
                </Content>
            </Layout>
            <Modal title="Song Details" open={open} onOk={handleOk} onCancel={handleCancel}>
                {clickedItem && (
                    <div>
                        <p>
                            <strong>Title: </strong> {clickedItem.titleData.label}
                        </p>
                        <p>
                            <strong>Price: </strong> {clickedItem.priceData.label}
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default observer(Favorite);
