
// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Breadcrumb, Layout, Menu, theme, Col, Row, Card, Space, Input, Button, Modal , Spin } from 'antd';

// const { Header, Content } = Layout;

// const AddToCart: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         setSearchText(searchData);
//         applyFilter(searchData, categoryFilter);
//     };

//     const category = (e: any) => {
//         const categorySearch = e.target.value.trim();
//         setCategoryFilter(categorySearch);
//         applyFilter(searchText, categorySearch);
//     };

//     const applyFilter = (search: string, category: string) => {
//         const filtered = Store.getuserDetials.filter((album) => {
//             const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//             const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
//             return searchMatch && categoryMatch;
//         });
//         setFilterSearch(filtered);
//     };

//     const showModal = (item: IStore) => {
//         setClickedItem(item);
//         setOpen(true);
//     };

//     const handleOk = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     const handleCancel = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     useEffect(() => {
//         Store.fetchUser().then(() => setLoading(false))
//         setFilterSearch(Store.getuserDetials)

//     }, [loading]);

//     const { token: { colorBgContainer } } = theme.useToken();

//     const content = (
//         <div>
//             <button onClick={handleCancel}>Close</button>
//         </div>
//     );

//     return (
//         <div>
//             <Layout>
//                 <Header
//                     style={{
//                         position: 'sticky',
//                         top: 0,
//                         zIndex: 1,
//                         width: '100%',
//                         display: 'flex',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <div className="demo-logo" />
//                 </Header>
//                 <Content>
//                     <div className='mt-3 inputBox'>
//                         <span>Search Song Title : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Search Song Title"
//                             className='inputWidth ms-3 me-3'
//                         />
//                         <span>Category filter : </span>
//                         <Input
//                             onChange={category}
//                             placeholder="Category Filter"
//                             className='inputWidth ms-3'
//                         />
//                     </div>
//                     <Spin spinning={loading} tip="Loading...">
//                     <Row gutter={[16, 16]}>
//                         {filterSearch.map((album: IStore, index: number) => (
//                             // console.log("title " , album.titleData.label),

//                             <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                 <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                                     <Card title="" size="small" className='cardHeight'>
//                                         <div className='image_margin'>
//                                             <img src={album.images[2].label} alt={`image not found ${index}`} />
//                                         </div>
//                                         <h6>{album.titleData.label}</h6>
//                                         <h6>{album.priceData.label}</h6>
//                                         <Button type="primary" onClick={() => showModal(album)} className='mb-3'>
//                                             See More..
//                                         </Button>  <br />
//                                         <Button type="primary">Add a "Favorite/Wishlist"</Button>
//                                     </Card>
//                                 </Space>
//                             </Col>
//                         ))}
//                     </Row>
//                     </Spin>
//                 </Content>
//             </Layout>
//             <Modal title="Song Details" open={open} onOk={handleOk} onCancel={handleCancel}>
//                 {clickedItem && (
//                     <div>
//                         <p>Title: {clickedItem.titleData.label}</p>
//                         <p>Price: {clickedItem.priceData.label}</p>
//                     </div>
//                 )}
//             </Modal>
//         </div>
//     );
// }

// export default AddToCart;





// --------------------------------------------------------add to cart Done -----------------



// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin } from 'antd';

// const { Header, Content } = Layout;

// const AddToCart: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//   const [categoryFilter, setCategoryFilter] = useState('');
//   const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//   const [loading, setLoading] = useState(true);

//   const [partialList, setPartialList] = useState<IStore[]>([]);

//   const searchData = (e: any) => {
//     const searchData = e.target.value.trim();
//     setSearchText(searchData);
//     applyFilter(searchData, categoryFilter);
//   };

//   const category = (e: any) => {
//     const categorySearch = e.target.value.trim();
//     setCategoryFilter(categorySearch);
//     applyFilter(searchText, categorySearch);
//   };

//   const applyFilter = (search: string, category: string) => {
//     const filtered = Store.getuserDetials.filter((album) => {
//       const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//       const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
//       return searchMatch && categoryMatch;
//     });
//     setFilterSearch(filtered);
//   };

//   const addToPartialList = (item: IStore) => {
//     setPartialList([...partialList, item]);
//   };

//   const removeFromPartialList = (item: IStore) => {
//     setPartialList(partialList.filter((i) => i.titleData.label !== item.titleData.label));
//   };

//   const showModal = (item: IStore) => {
//     setClickedItem(item);
//     setOpen(true);
//   };

//   const handleOk = () => {
//     setClickedItem(null);
//     setOpen(false);
//   };

//   const handleCancel = () => {
//     setClickedItem(null);
//     setOpen(false);
//   };

//   useEffect(() => {
//     Store.fetchUser().then(() => setLoading(false));
//     setFilterSearch(Store.getuserDetials);
//   }, [loading]);

//   return (
//     <div>
//       <Layout>
//         <Header
//           style={{
//             position: 'sticky',
//             top: 0,
//             zIndex: 1,
//             width: '100%',
//             display: 'flex',
//             alignItems: 'center',
//           }}
//         >
//           <div className="demo-logo" />
//         </Header>
//         <Content>
//           <div className="mt-3 inputBox">
//             <span>Search Song Title : </span>
//             <Input
//               onChange={searchData}
//               placeholder="Search Song Title"
//               className="inputWidth ms-3 me-3"
//             />
//             <span>Category filter : </span>
//             <Input
//               onChange={category}
//               placeholder="Category Filter"
//               className="inputWidth ms-3"
//             />
//           </div>
//           <Spin spinning={loading} tip="Loading...">
//             <Row gutter={[16, 16]}>
//               {filterSearch.map((album: IStore, index: number) => (
//                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                   <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                     <Card title="" size="small" className="cardHeight">
//                       <div className="image_margin">
//                         <img src={album.images[2].label} alt={`image not found ${index}`} />
//                       </div>
//                       <h6>{album.titleData.label}</h6>
//                       <h6>{album.priceData.label}</h6>
//                       <Button type="primary" onClick={() => showModal(album)} className="mb-3">
//                         See More..
//                       </Button>
//                       <br />
//                       <Button type="primary" onClick={() => addToPartialList(album)}>
//                         Add to Favorites
//                       </Button>
//                     </Card>
//                   </Space>
//                 </Col>
//               ))}
//             </Row>
//           </Spin>
//         </Content>
//       </Layout>
//       <Modal title="Song Details" open={open} onOk={handleOk} onCancel={handleCancel}>
//         {clickedItem && (
//           <div>
//             <p>Title: {clickedItem.titleData.label}</p>
//             <p>Price: {clickedItem.priceData.label}</p>
//           </div>
//         )}
//       </Modal>
//       <div>
//         <h2>Favorites</h2>
//         <ul>
//           {partialList.map((item: IStore) => (
//             <li key={item.titleData.label}>
//               {item.titleData.label} - {item.priceData.label}
//               <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;




// ---------------------------------------------------------  new cart pop ------------



// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover } from 'antd';

// const { Header, Content } = Layout;

// const AddToCart: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     const [partialList, setPartialList] = useState<IStore[]>([]);

//     // Pop
//     const [popopen, setPopOpen] = useState(false);


//     //   pop

//     const hide = () => {
//         setPopOpen(false);
//     };

//     const handleOpenChange = (newOpen: boolean) => {
//         setPopOpen(newOpen);
//     };

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         setSearchText(searchData);
//         applyFilter(searchData, categoryFilter);
//     };

//     const category = (e: any) => {
//         const categorySearch = e.target.value.trim();
//         setCategoryFilter(categorySearch);
//         applyFilter(searchText, categorySearch);
//     };

//     const applyFilter = (search: string, category: string) => {
//         const filtered = Store.getuserDetials.filter((album) => {
//             const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//             const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
//             return searchMatch && categoryMatch;
//         });
//         setFilterSearch(filtered);
//     };

//     const addToPartialList = (item: IStore) => {
//         setPartialList([...partialList, item]);
//     };

//     const removeFromPartialList = (item: IStore) => {
//         setPartialList(partialList.filter((i) => i.titleData.label !== item.titleData.label));
//     };

//     const showModal = (item: IStore) => {
//         setClickedItem(item);
//         setOpen(true);
//     };

//     const handleOk = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     const handleCancel = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     useEffect(() => {
//         Store.fetchUser().then(() => setLoading(false));
//         setFilterSearch(Store.getuserDetials);
//     }, [loading]);

//     // pop

//     const content = (
//         <div>
//             {/* <p>Content</p>
//           <p>Content</p> */}

//             {/* <a onClick={hide}>Close</a> */}

//             <div>
//                 <h2>Favorites</h2>
//                 <ul>
//                     {partialList.map((item: IStore) => (
//                         <li key={item.titleData.label}>
//                             {item.titleData.label} - {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <button onClick={hide}>Close</button>
//         </div>
//     );
//     return (
//         <div>
//             <Layout>
//                 <Header
//                     style={{
//                         position: 'sticky',
//                         top: 0,
//                         zIndex: 1,
//                         width: '100%',
//                         display: 'flex',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <div className="demo-logo" />
//                 </Header>
//                 <Content>
//                     <div className="mt-3 inputBox">
//                         <span>Search Song Title : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Search Song Title"
//                             className="inputWidth ms-3 me-3"
//                         />
//                         <span>Category filter : </span>
//                         <Input
//                             onChange={category}
//                             placeholder="Category Filter"
//                             className="inputWidth ms-3"
//                         />
//                         {/* Pop */}

//                         <Popover
//                             content={content}
//                             title="Title"
//                             trigger="click"
//                             open={popopen}
//                             onOpenChange={handleOpenChange}
//                         >
//                             <Button type="primary">Click me</Button>
//                         </Popover>
//                     </div>
//                     <Spin spinning={loading} tip="Loading...">
//                         <Row gutter={[16, 16]}>
//                             {filterSearch.map((album: IStore, index: number) => (
//                                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                     <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                                         <Card title="" size="small" className="cardHeight">
//                                             <div className="image_margin">
//                                                 <img src={album.images[2].label} alt={`image not found ${index}`} />
//                                             </div>
//                                             <h6>{album.titleData.label}</h6>
//                                             <h6>{album.priceData.label}</h6>
//                                             <Button type="primary" onClick={() => showModal(album)} className="mb-3">
//                                                 See More..
//                                             </Button>
//                                             <br />
//                                             <Button type="primary" onClick={() => addToPartialList(album)}>
//                                                 Add to Favorites
//                                             </Button>
//                                         </Card>
//                                     </Space>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Spin>
//                 </Content>
//             </Layout>
//             <Modal title="Song Details" open={open} onOk={handleOk} onCancel={handleCancel}>
//                 {clickedItem && (
//                     <div>
//                         <p>Title: {clickedItem.titleData.label}</p>
//                         <p>Price: {clickedItem.priceData.label}</p>
//                     </div>
//                 )}
//             </Modal>
//             <div>
//                 <h2>Favorites</h2>
//                 <ul>
//                     {partialList.map((item: IStore) => (
//                         <li key={item.titleData.label}>
//                             {item.titleData.label} - {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default AddToCart;





// -----------------------------------------------------------------------------




// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover, Table } from 'antd';
// import {
//     ShoppingCartOutlined,
// } from '@ant-design/icons';
// import { observer } from 'mobx-react-lite';
// const { Header, Content } = Layout;


// // table

// const columns = [
//     {
//         title: 'Title',
//         dataIndex: 'titleData.label',
//         key: 'titleData.label',
//         render: (text: any) => {
//             if (text && text.label) {
//                 return text.label;
//             } else {
//                 return 'N/A';
//             }
//         },
//     },
//     {
//         title: 'Price',
//         dataIndex: 'priceData.label',
//         key: 'priceData.label',
//         render: (text: any) => text?.label || 'N/A',
//     },
//     {
//         title: 'Action',
//         key: 'action',
//         render: (text: any, record: any) => (
//             <Button type="primary" onClick={() => Store.removeFromPartialList(record)}>
//                 Remove
//             </Button>
//         ),
//     },
// ];
// const AddToCart: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     const [partialList, setPartialList] = useState<IStore[]>([]);

//     // Pop
//     const [popopen, setPopOpen] = useState(false);


//     //   pop

//     const hide = () => {
//         setPopOpen(false);
//     };

//     const handleOpenChange = (newOpen: boolean) => {
//         setPopOpen(newOpen);
//     };

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         setSearchText(searchData);
//         applyFilter(searchData, categoryFilter);
//     };

//     const category = (e: any) => {
//         const categorySearch = e.target.value.trim();
//         setCategoryFilter(categorySearch);
//         applyFilter(searchText, categorySearch);
//     };

//     const applyFilter = (search: string, category: string) => {
//         const filtered = Store.getuserDetials.filter((album) => {
//             const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//             const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
//             return searchMatch && categoryMatch;
//         });
//         setFilterSearch(filtered);
//     };

//     const addToPartialList = (item: IStore) => {
//         Store.addToPartialList(item);
//     };

//     const removeFromPartialList = (item: IStore) => {
//         Store.removeFromPartialList(item);
//     };

//     const showModal = (item: IStore) => {
//         setClickedItem(item);
//         setOpen(true);
//     };

//     const handleOk = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     const handleCancel = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     useEffect(() => {
//         Store.fetchUser().then(() => setLoading(false));
//         setFilterSearch(Store.getuserDetials);
//     }, [loading]);

//     // pop

//     // const content = (
//     //     <div>
//     //         {/* <p>Content</p>
//     //       <p>Content</p> */}

//     //         {/* <a onClick={hide}>Close</a> */}

//     //         <div>
//     //             <h2>Favorites</h2>
//     //             <ul>

//     //                 {Store.getPartialList.map((item: IStore) => (

//     //                     <li key={item.titleData.label}>
//     //                         {item.titleData.label} - {item.priceData.label}
//     //                         <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//     //                     </li>
//     //                 ))}


//     //             </ul>


//     //             {/* <Table columns={columns} dataSource={Store.getPartialList} rowKey={(record) => record.titleData.label} />
//     //                 <Button type="primary" onClick={hide}>
//     //                     Close
//     //                 </Button> */}

//     //             <div>
//     //                 <Table
//     //                     columns={columns}
//     //                     dataSource={Store.getPartialList || []} // Use an empty array if data is undefined
//     //                     rowKey={(record) => record.titleData.label}
//     //                 />
//     //                 <Button type="primary" onClick={hide}>
//     //                     Close
//     //                 </Button>
//     //             </div>

//     //         </div>

//     //     </div>
//     // );


//     const content = (
//         <div>
//             <h2>Favorites</h2>
//             <Table
//                 columns={columns}
//                 dataSource={Store.getPartialList || []} // Use an empty array if data is undefined
//                 rowKey={(record) => record.titleData.label}
//             />
//             <Button type="primary" onClick={hide}>
//                 Close
//             </Button>
//         </div>
//     );

//     return (
//         <div>


//             <Layout>
//                 <Header
//                     style={{
//                         position: 'sticky',
//                         top: 0,
//                         zIndex: 1,
//                         width: '100%',
//                         display: 'flex',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <div className="demo-logo" />
//                 </Header>
//                 <Content>
//                     <div className="mt-3 inputBox mb-3">
//                         <span>Search Song Title : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Search Song Title"
//                             className="inputWidth ms-3 me-3"
//                         />
//                         <span>Category filter : </span>
//                         <Input
//                             onChange={category}
//                             placeholder="Category Filter"
//                             className="inputWidth ms-3"
//                         />
//                         {/* Pop */}

//                         <Popover
//                             content={content}
//                             title="Title"
//                             trigger="click"
//                             open={popopen}
//                             onOpenChange={handleOpenChange}
//                         >
//                             <ShoppingCartOutlined className='cart ms-3' />
//                         </Popover>
//                     </div>
//                     <Spin spinning={loading} tip="Loading...">
//                         <Row gutter={[16, 16]}>
//                             {filterSearch.map((album: IStore, index: number) => (
//                                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                     <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                                         <Card title="" size="small" className="cardHeight">
//                                             <div className="image_margin">
//                                                 <img src={album.images[2].label} alt={`image not found ${index}`} />
//                                             </div>
//                                             <h6>{album.titleData.label}</h6>
//                                             <h6>{album.priceData.label}</h6>
//                                             <Button type="primary" onClick={() => showModal(album)} className="mb-3">
//                                                 See More..
//                                             </Button>
//                                             <br />
//                                             <Button type="primary" onClick={() => addToPartialList(album)}>
//                                                 Add to Favorites
//                                             </Button>

//                                         </Card>
//                                     </Space>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Spin>
//                 </Content>
//             </Layout>
//             <Modal title="Song Details" open={open} onOk={handleOk} onCancel={handleCancel}>
//                 {clickedItem && (
//                     <div>
//                         <p>Title: {clickedItem.titleData.label}</p>
//                         <p>Price: {clickedItem.priceData.label}</p>
//                     </div>
//                 )}
//             </Modal>
//             <div>
//                 <h2>Favorites</h2>
//                 <ul>
//                     {partialList.map((item: IStore) => (
//                         <li key={item.titleData.label}>
//                             {item.titleData.label} - {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default observer(AddToCart);





// -------------------------------------------------




// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover, Table } from 'antd';
// import {
//     ShoppingCartOutlined,
// } from '@ant-design/icons';
// import { observer } from 'mobx-react-lite';
// const { Header, Content } = Layout;


// // table
// const columns = [
//     {
//         title: 'Title',
//         dataIndex: 'titleData.label',
//         key: 'titleData.label',
//         render: (text: any) => {
//             return text?.label || 'N/A';
//           },
//     },
//     {
//         title: 'Price',
//         dataIndex: 'priceData.label',
//         key: 'priceData.label',
//         render: (text: any) => {
//           return text?.label || 'N/A';
//         },
//       },
//     {
//         title: 'Action',
//         key: 'action',
//         render: (text: any, record: any) => (
//             <Button type="primary" onClick={() => Store.removeFromPartialList(record)}>
//                 Remove
//             </Button>
//         ),
//     },
// ];
// const AddToCart: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     const [partialList, setPartialList] = useState<IStore[]>([]);

//     // Pop
//     const [popopen, setPopOpen] = useState(false);


//     //   pop

//     const hide = () => {
//         setPopOpen(false);
//     };

//     const handleOpenChange = (newOpen: boolean) => {
//         setPopOpen(newOpen);
//     };

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         setSearchText(searchData);
//         applyFilter(searchData, categoryFilter);
//     };

//     const category = (e: any) => {
//         const categorySearch = e.target.value.trim();
//         setCategoryFilter(categorySearch);
//         applyFilter(searchText, categorySearch);
//     };

//     const applyFilter = (search: string, category: string) => {
//         const filtered = Store.getuserDetials.filter((album) => {
//             const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//             const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
//             return searchMatch && categoryMatch;
//         });
//         setFilterSearch(filtered);
//     };

//     const addToPartialList = (item: IStore) => {
//         Store.addToPartialList(item);
//     };

//     const removeFromPartialList = (item: IStore) => {
//         Store.removeFromPartialList(item);
//     };

//     const showModal = (item: IStore) => {
//         setClickedItem(item);
//         setOpen(true);
//     };

//     const handleOk = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     const handleCancel = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     useEffect(() => {
//         Store.fetchUser().then(() => setLoading(false));
//         setFilterSearch(Store.getuserDetials);
//     }, [loading]);

//     // pop

//     // const content = (
//     //     <div>
//     //         {/* <p>Content</p>
//     //       <p>Content</p> */}

//     //         {/* <a onClick={hide}>Close</a> */}

//     //         <div>
//     //             <h2>Favorites</h2>
//     //             <ul>

//     //                 {Store.getPartialList.map((item: IStore) => (

//     //                     <li key={item.titleData.label}>
//     //                         {item.titleData.label} - {item.priceData.label}
//     //                         <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//     //                     </li>
//     //                 ))}


//     //             </ul>


//     //             {/* <Table columns={columns} dataSource={Store.getPartialList} rowKey={(record) => record.titleData.label} />
//     //                 <Button type="primary" onClick={hide}>
//     //                     Close
//     //                 </Button> */}

//     //             <div>
//     //                 <Table
//     //                     columns={columns}
//     //                     dataSource={Store.getPartialList || []} // Use an empty array if data is undefined
//     //                     rowKey={(record) => record.titleData.label}
//     //                 />
//     //                 <Button type="primary" onClick={hide}>
//     //                     Close
//     //                 </Button>
//     //             </div>

//     //         </div>

//     //     </div>
//     // );


//     // const content = (
//     //     <div>
//     //         <h2>Favorites</h2>
//     //         <Table
//     //             columns={columns}
//     //             dataSource={Store.getPartialList || []} // Use an empty array if data is undefined
//     //             rowKey={(record) => record.titleData.label}
//     //         />
//     //         <Button type="primary" onClick={hide}>
//     //             Close
//     //         </Button>
//     //     </div>
//     // );

//     return (
//         <div>


//             <Layout>
//                 <Header
//                     style={{
//                         position: 'sticky',
//                         top: 0,
//                         zIndex: 1,
//                         width: '100%',
//                         display: 'flex',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <div className="demo-logo" />
//                 </Header>
//                 <Content>
//                     <div className="mt-3 inputBox mb-3">
//                         <span>Search Song Title : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Search Song Title"
//                             className="inputWidth ms-3 me-3"
//                         />
//                         <span>Category filter : </span>
//                         <Input
//                             onChange={category}
//                             placeholder="Category Filter"
//                             className="inputWidth ms-3"
//                         />
//                         {/* Pop */}

//                         {/* <Popover
//                             content={content}
//                             title="Title"
//                             trigger="click"
//                             open={popopen}
//                             onOpenChange={handleOpenChange}
//                         >
//                             <ShoppingCartOutlined className='cart ms-3' />
//                         </Popover> */}


//                         <Popover
//                             content={
//                                 <div>
//                                     <h2>Favorites</h2>
//                                     <Table
//                                         columns={columns}
//                                         dataSource={Store.getPartialList}
//                                         rowKey={(record) => record.titleData.label}
//                                     />
//                                     <Button type="primary" onClick={hide}>
//                                         Close
//                                     </Button>
//                                 </div>
//                             }
//                             title="Title"
//                             trigger="click"
//                             open={popopen}
//                             onOpenChange={handleOpenChange}
//                         >
//                             <ShoppingCartOutlined className='cart ms-3' />
//                         </Popover>
//                     </div>
//                     <Spin spinning={loading} tip="Loading...">
//                         <Row gutter={[16, 16]}>
//                             {filterSearch.map((album: IStore, index: number) => (
//                                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                     <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                                         <Card title="" size="small" className="cardHeight">
//                                             <div className="image_margin">
//                                                 <img src={album.images[2].label} alt={`image not found ${index}`} />
//                                             </div>
//                                             <h6>{album.titleData.label}</h6>
//                                             <h6>{album.priceData.label}</h6>
//                                             <Button type="primary" onClick={() => showModal(album)} className="mb-3">
//                                                 See More..
//                                             </Button>
//                                             <br />
//                                             <Button type="primary" onClick={() => addToPartialList(album)}>
//                                                 Add to Favorites
//                                             </Button>

//                                         </Card>
//                                     </Space>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Spin>
//                 </Content>
//             </Layout>
//             <Modal title="Song Details" open={open} onOk={handleOk} onCancel={handleCancel}>
//                 {clickedItem && (
//                     <div>
//                         <p>Title: {clickedItem.titleData.label}</p>
//                         <p>Price: {clickedItem.priceData.label}</p>
//                     </div>
//                 )}
//             </Modal>
//             <div>
//                 <h2>Favorites</h2>
//                 <ul>
//                     {partialList.map((item: IStore) => (
//                         <li key={item.titleData.label}>
//                             {item.titleData.label} - {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default observer(AddToCart);




// -----------------------------------------


// import React, { useEffect, useState } from 'react';
// import { HeartTwoTone } from '@ant-design/icons';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover } from 'antd';

// const { Header, Content } = Layout;

// const AddToCart: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     const [partialList, setPartialList] = useState<IStore[]>([]);

//     // Pop
//     const [popopen, setPopOpen] = useState(false);


//     //   pop

//     const hide = () => {
//         setPopOpen(false);
//     };

//     const handleOpenChange = (newOpen: boolean) => {
//         setPopOpen(newOpen);
//     };

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         setSearchText(searchData);
//         applyFilter(searchData, categoryFilter);
//     };

//     const category = (e: any) => {
//         const categorySearch = e.target.value.trim();
//         setCategoryFilter(categorySearch);
//         applyFilter(searchText, categorySearch);
//     };

//     const applyFilter = (search: string, category: string) => {
//         const filtered = Store.getuserDetials.filter((album) => {
//             const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//             const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
//             return searchMatch && categoryMatch;
//         });
//         setFilterSearch(filtered);
//     };

//     const addToPartialList = (item: IStore) => {
//         setPartialList([...partialList, item]);
//     };

//     const removeFromPartialList = (item: IStore) => {
//         setPartialList(partialList.filter((i) => i.titleData.label !== item.titleData.label));
//     };

//     const showModal = (item: IStore) => {
//         setClickedItem(item);
//         setOpen(true);
//     };

//     const handleOk = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     const handleCancel = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     useEffect(() => {
//         Store.fetchUser().then(() => setLoading(false));
//         setFilterSearch(Store.getuserDetials);
//     }, [loading]);

//     const toggleFavorite = (item: IStore) => {
//         const updatedItem = { ...item, isFavorite: !item.isFavorite };
//         setPartialList((prevList) => {
//             if (updatedItem.isFavorite) {
//                 return [...prevList, updatedItem];
//             } else {
//                 return prevList.filter((i) => i.titleData.label !== updatedItem.titleData.label);
//             }
//         });
//     };

//     return (
//         <div>
//             <Layout>
//                 <Header
//                     style={{
//                         position: 'sticky',
//                         top: 0,
//                         zIndex: 1,
//                         width: '100%',
//                         display: 'flex',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <div className="demo-logo" />
//                 </Header>
//                 <Content>
//                     <div className="mt-3 inputBox">
//                         <span>Search Song Title : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Search Song Title"
//                             className="inputWidth ms-3 me-3"
//                         />
//                         <span>Category filter : </span>
//                         <Input
//                             onChange={category}
//                             placeholder="Category Filter"
//                             className="inputWidth ms-3"
//                         />
//                         {/* Pop */}

                        
//                     </div>
//                     <Spin spinning={loading} tip="Loading...">
//                         <Row gutter={[16, 16]}>
//                             {filterSearch.map((album: IStore, index: number) => (
//                                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                     <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                                         <Card title="" size="small" className="cardHeight">
//                                             <div className="image_margin">
//                                                 <img src={album.images[2].label} alt={`image not found ${index}`} />
//                                             </div>
//                                             <h6>{album.titleData.label}</h6>
//                                             <h6>{album.priceData.label}</h6>
//                                             <Button type="primary" onClick={() => showModal(album)} className="mb-3">
//                                                 See More..
//                                             </Button>
//                                             <br />
//                                             {/* <Button type="primary" onClick={() => addToPartialList(album)}>
//                                                 Add to Favorites
//                                             </Button> */}
//                                             {/* <HeartTwoTone /> */}
//                                             <HeartTwoTone
//                                                 twoToneColor={album.isFavorite ? '#eb2f96' : ''}
//                                                 onClick={() => toggleFavorite(album)}
//                                             />
//                                         </Card>
//                                     </Space>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Spin>
//                 </Content>
//             </Layout>
//             <Modal title="Song Details" open={open} onOk={handleOk} onCancel={handleCancel}>
//                 {clickedItem && (
//                     <div>
//                         <p>Title: {clickedItem.titleData.label}</p>
//                         <p>Price: {clickedItem.priceData.label}</p>
//                     </div>
//                 )}
//             </Modal>
//             {/* <div>
//                 <h2>Favorites</h2>
//                 <ul>
//                     {partialList.map((item: IStore) => (
//                         <li key={item.titleData.label}>
//                             {item.titleData.label} - {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div> */}
//         </div>
//     );
// };

// export default AddToCart;




// ------------------------------------------------



// import React, { useEffect, useState } from 'react';
// import { HeartTwoTone } from '@ant-design/icons';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover } from 'antd';

// const { Header, Content } = Layout;

// const AddToCart: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     const [partialList, setPartialList] = useState<IStore[]>([]);

//     const [popopen, setPopOpen] = useState(false);

//     const hide = () => {
//         setPopOpen(false);
//     };

//     const handleOpenChange = (newOpen: boolean) => {
//         setPopOpen(newOpen);
//     };

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         setSearchText(searchData);
//         applyFilter(searchData, categoryFilter);
//     };

//     const category = (e: any) => {
//         const categorySearch = e.target.value.trim();
//         setCategoryFilter(categorySearch);
//         applyFilter(searchText, categorySearch);
//     };

//     const applyFilter = (search: string, category: string) => {
//         const filtered = Store.getuserDetials.filter((album) => {
//             const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//             const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
//             return searchMatch && categoryMatch;
//         });
//         setFilterSearch(filtered);
//     };

//     const addToPartialList = (item: IStore) => {
//         setPartialList([...partialList, item]);
//     };

//     const removeFromPartialList = (item: IStore) => {
//         setPartialList(partialList.filter((i) => i.titleData.label !== item.titleData.label));
//     };

//     const showModal = (item: IStore) => {
//         setClickedItem(item);
//         setOpen(true);
//     };

//     const handleOk = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     const handleCancel = () => {
//         setClickedItem(null);
//         setOpen(false);
//     };

//     useEffect(() => {
//         Store.fetchUser().then(() => setLoading(false));
//         setFilterSearch(Store.getuserDetials);
//     }, [loading]);

//     const toggleFavorite = (item: IStore) => {
//         const updatedItem = { ...item, isFavorite: !item.isFavorite };
//         setPartialList((prevList) => {
//             if (updatedItem.isFavorite) {
//                 return [...prevList, updatedItem];
//             } else {
//                 return prevList.filter((i) => i.titleData.label !== updatedItem.titleData.label);
//             }
//         });
//     };

//     return (
//         <div>
//             <Layout>
//                 <Header
//                     style={{
//                         position: 'sticky',
//                         top: 0,
//                         zIndex: 1,
//                         width: '100%',
//                         display: 'flex',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <div className="demo-logo" />
//                 </Header>
//                 <Content>
//                     <div className="mt-3 inputBox">
//                         <span>Search Song Title : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Search Song Title"
//                             className="inputWidth ms-3 me-3"
//                         />
//                         <span>Category filter : </span>
//                         <Input
//                             onChange={category}
//                             placeholder="Category Filter"
//                             className="inputWidth ms-3"
//                         />
//                     </div>
//                     <Spin spinning={loading} tip="Loading...">
//                         <Row gutter={[16, 16]}>
//                             {filterSearch.map((album: IStore, index: number) => (
//                                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                     <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                                         <Card title="" size="small" className="cardHeight">
//                                             <div className="image_margin">
//                                                 <img src={album.images[2].label} alt={`image not found ${index}`} />
//                                             </div>
//                                             <h6>{album.titleData.label}</h6>
//                                             <h6>{album.priceData.label}</h6>
//                                             <Button type="primary" onClick={() => showModal(album)} className="mb-3">
//                                                 See More..
//                                             </Button><br />
//                                             <HeartTwoTone
//                                                 twoToneColor={album.isFavorite ? '#eb2f96' : ''}
//                                                 onClick={() => toggleFavorite(album)}
//                                             />
//                                         </Card>
//                                     </Space>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Spin>
//                 </Content>
//             </Layout>
//             <Modal title="Song Details" open={open} onOk={handleOk} onCancel={handleCancel}>
//                 {clickedItem && (
//                     <div>
//                         <p>Title: {clickedItem.titleData.label}</p>
//                         <p>Price: {clickedItem.priceData.label}</p>
//                     </div>
//                 )}
//             </Modal>
//         </div>
//     );
// };

// export default AddToCart;


// ----------------------------------   Icon Favorite -----------------------------



import React, { useEffect, useState } from 'react';
import Store, { IStore } from '../Stores/Store';
import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover } from 'antd';

const { Header, Content } = Layout;

const AddToCart: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
    const [categoryFilter, setCategoryFilter] = useState('');
    const [clickedItem, setClickedItem] = useState<IStore | null>(null);
    const [loading, setLoading] = useState(true);

    const [partialList, setPartialList] = useState<IStore[]>([]);

    // Pop
    const [popopen, setPopOpen] = useState(false);


    //   pop

    const hide = () => {
        setPopOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setPopOpen(newOpen);
    };

    const searchData = (e: any) => {
        const searchData = e.target.value.trim();
        setSearchText(searchData);
        applyFilter(searchData, categoryFilter);
    };

    const category = (e: any) => {
        const categorySearch = e.target.value.trim();
        setCategoryFilter(categorySearch);
        applyFilter(searchText, categorySearch);
    };

    const applyFilter = (search: string, category: string) => {
        const filtered = Store.getuserDetials.filter((album) => {
            const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
            const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
            return searchMatch && categoryMatch;
        });
        setFilterSearch(filtered);
    };

    const addToPartialList = (item: IStore) => {
        setPartialList([...partialList, item]);
    };

    const removeFromPartialList = (item: IStore) => {
        setPartialList(partialList.filter((i) => i.titleData.label !== item.titleData.label));
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
        Store.fetchUser().then(() => setLoading(false));
        setFilterSearch(Store.getuserDetials);
    }, [loading]);

    // pop

    const content = (
        <div>
            {/* <p>Content</p>
          <p>Content</p> */}

            {/* <a onClick={hide}>Close</a> */}

            <div>
                <h2>Favorites</h2>
                <ul>
                    {partialList.map((item: IStore) => (
                        <li key={item.titleData.label}>
                            {item.titleData.label} - {item.priceData.label}
                            <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
                        </li>
                    ))}
                </ul>
            </div>

            <button onClick={hide}>Close</button>
        </div>
    );
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
                </Header>
                <Content>
                    <div className="mt-3 inputBox">
                        <span>Search Song Title : </span>
                        <Input
                            onChange={searchData}
                            placeholder="Search Song Title"
                            className="inputWidth ms-3 me-3"
                        />
                        <span>Category filter : </span>
                        <Input
                            onChange={category}
                            placeholder="Category Filter"
                            className="inputWidth ms-3"
                        />
                        {/* Pop */}

                        <Popover
                            content={content}
                            title="Title"
                            trigger="click"
                            open={popopen}
                            onOpenChange={handleOpenChange}
                        >
                            <Button type="primary">Click me</Button>
                        </Popover>
                    </div>
                    <Spin spinning={loading} tip="Loading...">
                        <Row gutter={[16, 16]}>
                            {filterSearch.map((album: IStore, index: number) => (
                                <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                        <Card title="" size="small" className="cardHeight">
                                            <div className="image_margin">
                                                <img src={album.images[2].label} alt={`image not found ${index}`} />
                                            </div>
                                            <h6>{album.titleData.label}</h6>
                                            <h6>{album.priceData.label}</h6>
                                            <Button type="primary" onClick={() => showModal(album)} className="mb-3">
                                                See More..
                                            </Button>
                                            <br />
                                            <Button type="primary" onClick={() => addToPartialList(album)}>
                                                Add to Favorites
                                            </Button>
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
                        <p>Title: {clickedItem.titleData.label}</p>
                        <p>Price: {clickedItem.priceData.label}</p>
                    </div>
                )}
            </Modal>
            <div>
                <h2>Favorites</h2>
                <ul>
                    {partialList.map((item: IStore) => (
                        <li key={item.titleData.label}>
                            {item.titleData.label} - {item.priceData.label}
                            <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AddToCart;
