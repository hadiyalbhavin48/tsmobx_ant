

// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover, Table } from 'antd';
// import {
//     ShoppingCartOutlined,
// } from '@ant-design/icons';
// import { observer } from 'mobx-react-lite';
// const { Header, Content } = Layout;


// // table

// const ListItem: React.FC = () => {
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

//     const content = (
//         <div>

//             <div>
//                 <h2>Favorites</h2>
//                 <ul>

//                     {Store.getPartialList.map((item: IStore) => (

//                         <li key={item.titleData.label}>
//                             {item.titleData.label} - {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//                         </li>
//                     ))}
//                 </ul>    
//             </div>

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
//                             // title="Title"
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

// export default observer(ListItem);





// ------------------------------------------- hart Icon ---------------------


// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover, Table } from 'antd';
// import {
//     ShoppingCartOutlined, HeartTwoTone
// } from '@ant-design/icons';
// import { observer } from 'mobx-react-lite';
// const { Header, Content } = Layout;


// // table

// const ListItem: React.FC = () => {
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

//     const content = (
//         <div>

//             <div>
//                 <h2>Favorites</h2>
//                 <ul>

//                     {Store.getPartialList.map((item: IStore) => (

//                         <li key={item.titleData.label}>
//                             {item.titleData.label} - {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//                         </li>
//                     ))}
//                 </ul>    
//             </div>

//         </div>
//     );


//     // const 

//     const toggleFavorite = (item: IStore) =>{
//             //  console.log("item " , item);

//     }

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
//                             // title="Title"
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
//                                             </Button>  <br />

//                                             <HeartTwoTone
//                                                 // twoToneColor={album.isFavorite ? '#eb2f96' : ''}
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

// export default observer(ListItem);



// -------------------------------  Done Favoit list ------------------------------------


// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover, Table } from 'antd';
// import {
//     ShoppingCartOutlined, HeartTwoTone
// } from '@ant-design/icons';
// import { observer } from 'mobx-react-lite';
// const { Header, Content } = Layout;


// // table

// const ListItem: React.FC = () => {
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

//     const content = (
//         <div>

//             <div>
//                 <h2>Favorites</h2>
//                 <ul>

//                     {Store.getPartialList.map((item: IStore) => (

//                         <li key={item.titleData.label}>
//                             {item.titleData.label} - {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)}>Remove from Favorites</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//         </div>
//     );


//     // const 

//     const toggleFavorite = (item: IStore) => {
//         if (isFavorite(item)) {
//             removeFromPartialList(item);
//         } else {
//             addToPartialList(item);
//         }
//     };

//     // Function to check if a song is in the Favorites list
//     const isFavorite = (item: IStore) => {
//         return Store.getPartialList.some((i) => i.titleData.label === item.titleData.label);
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
//                             // title="Title"
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
//                                             </Button>  <br />

//                                             <HeartTwoTone
//                                                 twoToneColor={isFavorite(album) ? 'red' : ''}
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

// export default observer(ListItem);






// ------------------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover } from 'antd';
// import {
//     ShoppingCartOutlined, HeartTwoTone , SearchOutlined
// } from '@ant-design/icons';
// import { observer } from 'mobx-react-lite';
// const { Header, Content } = Layout;



// const ListItem: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     // const [partialList, setPartialList] = useState<IStore[]>([]);

//     // Pop
//     const [popopen, setPopOpen] = useState(false);

//     //   pop

//     // const hide = () => {
//     //     setPopOpen(false);
//     // };

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
//         // console.log(`search ${search} and category ${category}`);

//         const filtered = Store.getuserDetials.filter((album) => {
//             // console.log("album " , album);

//             const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//             // console.log("searchMatch " , searchMatch);

//             const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
//             // console.log("categoryMatch " , categoryMatch);

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
//         Store.fetchUser().then(() => {
//             setLoading(false)
//             setFilterSearch(Store.getuserDetials);
//         });
//         // setFilterSearch(Store.getuserDetials);
//     }, [loading]);

//     // pop

//     const content = (
//         <div>

//             <div>
//                 {/* <h2>Favorites</h2> */}
//                 <ul>

//                     {Store.getPartialList.map((item: IStore) => (

//                         <li key={item.titleData.label}>
//                             {item.titleData.label} -  {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)} className='btn btn-primary ms-2'>Remove</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//         </div>
//     );


//     // Favorite

//     const toggleFavorite = (item: IStore) => {
//         // console.log("isFavorite " , isFavorite(item));

//         if (isFavorite(item)) {
//             // console.log("isFavorite if" , isFavorite(item));
//             removeFromPartialList(item);
//         } else {
//             // console.log("isFavorite else" , isFavorite(item));
//             addToPartialList(item);
//         }
//     };

//     // Function to check if a song is in the Favorites list
//     const isFavorite = (item: IStore) => {
//         return Store.getPartialList.some((i) => {
//             return i.titleData.label === item.titleData.label

//         });
//         // debugger;
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
//                 <Content style={{background : "#DDDDDD"}}>
//                     <div className="mt-3 inputBox mb-3">
//                         <span className='searchtxt mt-2'>Search Song Title : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Enter Song Title"
//                             className="inputWidth ms-3 me-3"
//                             prefix = {<SearchOutlined />}    // search Icon
//                         />
//                         <span className='searchtxt mt-2'>Category filter : </span>
//                         <Input
//                             
//                             onChange={category}
//                             placeholder="Enter Release Dates"
//                             className="inputWidth ms-3"
//                             prefix = {<SearchOutlined />}
//                         />
//                         {/* Pop */}

//                         <Popover
//                             content={content}
//                             title="Favorites Songs"
//                             trigger="click"
//                             open={popopen}
//                             onOpenChange={handleOpenChange}
//                         >
//                             <ShoppingCartOutlined className='cart ms-3 mt-2' />
//                         </Popover>
//                     </div>
//                     <Spin spinning={loading} tip="Loading...">
//                         <Row gutter={[16, 16]}>
//                             {filterSearch.map((album: IStore, index: number) => (
//                                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                     <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                                         <Card title="" size="small" className="cardHeight" 
//                                         // hoverable
//                                         style={{boxShadow : "0 4px 8px 0 rgba(0 ,0 ,0 ,0.5)" ,margin : "20px"} }
//                                         cover = {<img src={album.images[2].label} alt="" />}
//                                         >
//                                             <div className="image_margin">
//                                                 {/* <img src={album.images[2].label} alt="" /> */}

//                                             </div>

//                                             <Card.Meta 
//                                               title ={album.titleData.label}
//                                               description = {album.priceData.label}

//                                             />
//                                             {/* <h6>{album.titleData.label}</h6> */}
//                                             {/* <h6>{album.priceData.label}</h6> */}
//                                             <Button type="primary" onClick={() => showModal(album)} className="mb-3 mt-2">
//                                                 See More..
//                                             </Button>
//                                             <br />
//                                             <Button type="primary" onClick={() => addToPartialList(album)} className='mb-2'>
//                                                 Add to Favorites
//                                             </Button>  <br />

//                                             <HeartTwoTone
//                                                 twoToneColor={isFavorite(album) ? 'red' : ''}   // isFavorite funtion call   funtion is return true icon color red and funtion return false icon color default color
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
//                         <p><strong>Title: </strong> {clickedItem.titleData.label}</p>
//                         <p><strong>Price: </strong> {clickedItem.priceData.label}</p>
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

// export default observer(ListItem);



// ---------------------------------------- Date Filter --------------------------





// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover } from 'antd';
// import {
//     ShoppingCartOutlined, HeartTwoTone, SearchOutlined
// } from '@ant-design/icons';
// import { observer } from 'mobx-react-lite';
// const { Header, Content } = Layout;



// const ListItem: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     const [dateFilter, setDateFilter] = useState('');
//     // const [partialList, setPartialList] = useState<IStore[]>([]);

//     // Pop
//     const [popopen, setPopOpen] = useState(false);

//     //   pop

//     // const hide = () => {
//     //     setPopOpen(false);
//     // };

//     const handleOpenChange = (newOpen: boolean) => {
//         setPopOpen(newOpen);
//     };

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         setSearchText(searchData);
//         applyFilter(searchData, dateFilter ,categoryFilter);
//     };

//     const category = (e: any) => {
//         const categorySearch = e.target.value.trim();
//         setCategoryFilter(categorySearch);
//         applyFilter(searchText,dateFilter, categorySearch);
//     };

//     const applyFilter = (search: string,date: string, category: string) => {
//         console.log(`search ${search} and category ${category}`);

//         const filtered = Store.getuserDetials.filter((album) => {
//             // console.log("album " , album);

//             const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//             // console.log("searchMatch " , searchMatch);

//             const categoryMatch = album.releasedateData.label.toLowerCase().includes(category.toLowerCase());
//             // console.log("categoryMatch " , categoryMatch);

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
//         Store.fetchUser().then(() => {
//             setLoading(false)
//             setFilterSearch(Store.getuserDetials);
//         });
//         // setFilterSearch(Store.getuserDetials);
//     }, [loading]);

//     // pop

//     const content = (
//         <div>

//             <div>
//                 {/* <h2>Favorites</h2> */}
//                 <ul>

//                     {Store.getPartialList.map((item: IStore) => (

//                         <li key={item.titleData.label}>
//                             {item.titleData.label} -  {item.priceData.label}
//                             <button onClick={() => removeFromPartialList(item)} className='btn btn-primary ms-2'>Remove</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//         </div>
//     );


//     // Favorite

//     const toggleFavorite = (item: IStore) => {
//         // console.log("isFavorite " , isFavorite(item));

//         if (isFavorite(item)) {
//             // console.log("isFavorite if" , isFavorite(item));
//             removeFromPartialList(item);
//         } else {
//             // console.log("isFavorite else" , isFavorite(item));
//             addToPartialList(item);
//         }
//     };

//     // Function to check if a song is in the Favorites list
//     const isFavorite = (item: IStore) => {
//         return Store.getPartialList.some((i) => {
//             return i.titleData.label === item.titleData.label

//         });
//         // debugger;
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
//                 <Content style={{ background: "#DDDDDD" }}>
//                     <div className="mt-3 inputBox mb-3">
//                         <span className='searchtxt mt-2'>Search : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Enter Song Title"
//                             className="inputWidth ms-3 me-3"
//                             prefix={<SearchOutlined />}    // search Icon
//                         />
//                         <span className='searchtxt mt-2'>Release Dates : </span>
//                         <Input
//                             type='date'
//                             onChange={category}
//                             placeholder="Enter Release Dates"
//                             className="inputWidth ms-3"

//                         />
//                         {/* Pop */}

//                         <Popover
//                             content={content}
//                             title="Favorites Songs"
//                             trigger="click"
//                             open={popopen}
//                             onOpenChange={handleOpenChange}
//                         >
//                             <ShoppingCartOutlined className='cart ms-3 mt-2' />
//                         </Popover>
//                     </div>
//                     <Spin spinning={loading} tip="Loading...">
//                         <Row gutter={[16, 16]}>
//                             {filterSearch.map((album: IStore, index: number) => (
//                                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                     <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                                         <Card title="" size="small" className="cardHeight"
//                                             // hoverable
//                                             style={{ boxShadow: "0 4px 8px 0 rgba(0 ,0 ,0 ,0.5)", margin: "20px" }}
//                                             cover={<img src={album.images[2].label} alt="" />}
//                                         >
//                                             <div className="image_margin">
//                                                 {/* <img src={album.images[2].label} alt="" /> */}

//                                             </div>

//                                             <Card.Meta
//                                                 title={album.titleData.label}
//                                                 description={album.priceData.label}

//                                             />
//                                             {/* <h6>{album.titleData.label}</h6> */}
//                                             {/* <h6>{album.priceData.label}</h6> */}
//                                             <Button type="primary" onClick={() => showModal(album)} className="mb-3 mt-2">
//                                                 See More..
//                                             </Button>
//                                             <br />
//                                             <Button type="primary" onClick={() => addToPartialList(album)} className='mb-2'>
//                                                 Add to Favorites
//                                             </Button>  <br />

//                                             <HeartTwoTone
//                                                 twoToneColor={isFavorite(album) ? 'red' : ''}   // isFavorite funtion call   funtion is return true icon color red and funtion return false icon color default color
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
//                         <p><strong>Title: </strong> {clickedItem.titleData.label}</p>
//                         <p><strong>Price: </strong> {clickedItem.priceData.label}</p>
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

// export default observer(ListItem);




// -------------------------------- Category Pop ---------------------------------



// import React, { useEffect, useState } from "react";
// import Store, { IStore } from "../Stores/Store";
// import { Layout, Col, Row, Card, Space, Input, Button, Modal, Spin, Popover } from "antd";
// import {
//   ShoppingCartOutlined,
//   HeartTwoTone,
//   SearchOutlined,
// } from "@ant-design/icons";
// import { observer } from "mobx-react-lite";
// const { Header, Content } = Layout;

// const ListItem: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [searchText, setSearchText] = useState("");
//   const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [dateFilter, setDateFilter] = useState("");
//   const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//   const [loading, setLoading] = useState(true);

//   const [popopen, setPopOpen] = useState(false);

//   const handleOpenChange = (newOpen: boolean) => {
//     setPopOpen(newOpen);
//   };

//   const searchData = (e: any) => {
//     const searchData = e.target.value.trim();
//     setSearchText(searchData);
//     applyFilter(searchData, dateFilter, categoryFilter);
//   };

//   const category = (e: any) => {
//     const categorySearch = e.target.value.trim();
//     setCategoryFilter(categorySearch);
//     applyFilter(searchText, dateFilter, categorySearch);
//   };

//   const date = (e: any) => {
//     const dateSearch = e.target.value;
//     setDateFilter(dateSearch);
//     applyFilter(searchText, dateSearch, categoryFilter);
//   };

//   const applyFilter = (search: string, date: string, category: string) => {
//     const filtered = Store.getuserDetials.filter((album) => {
//       const searchMatch = album.titleData.label.toLowerCase().includes(search.toLowerCase());
//       const dateMatch = date === "" || album.releasedateData.label.includes(date);
//       const categoryMatch = album.categoryData.label.toLowerCase().includes(category.toLowerCase());

//       return searchMatch && dateMatch && categoryMatch;
//     });
//     setFilterSearch(filtered);
//   };

//   const addToPartialList = (item: IStore) => {
//     Store.addToPartialList(item);
//   };

//   const removeFromPartialList = (item: IStore) => {
//     Store.removeFromPartialList(item);
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
//     Store.fetchUser().then(() => {
//       setLoading(false);
//       setFilterSearch(Store.getuserDetials);
//     });
//   }, [loading]);

//   const content = (
//     <div>
//       <ul>
//         {Store.getPartialList.map((item: IStore) => (
//           <li key={item.titleData.label}>
//             {item.titleData.label} - {item.priceData.label}
//             <button onClick={() => removeFromPartialList(item)} className="btn btn-primary ms-2">
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

//   const toggleFavorite = (item: IStore) => {
//     if (isFavorite(item)) {
//       removeFromPartialList(item);
//     } else {
//       addToPartialList(item);
//     }
//   };

//   const isFavorite = (item: IStore) => {
//     return Store.getPartialList.some((i) => i.titleData.label === item.titleData.label);
//   };

//   return (
//     <div>
//       <Layout>
//         <Header
//           style={{
//             position: "sticky",
//             top: 0,
//             zIndex: 1,
//             width: "100%",
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <div className="demo-logo" />
//         </Header>
//         <Content style={{ background: "#DDDDDD" }}>
//           <div className="mt-3 inputBox mb-3">
//             <span className="searchtxt mt-2">Search : </span>
//             <Input
//               onChange={searchData}
//               placeholder="Enter Song Title"
//               className="inputWidth ms-3 me-3"
//               prefix={<SearchOutlined />}
//             />

//            <Input
//               onChange={category}
//               placeholder="Enter Category"
//               className="inputWidth ms-3"
//             />

//             <span className="searchtxt mt-2">Release Dates : </span>
//             <Input
//               type="date"
//               onChange={date}
//               placeholder="Select Release Date"
//               className="inputWidth ms-3"
//             />
//             <Popover
//               content={content}
//               title="Favorites Songs"
//               trigger="click"
//               open={popopen}
//               onOpenChange={handleOpenChange}
//             >
//               <ShoppingCartOutlined className="cart ms-3 mt-2" />
//             </Popover>
//           </div>
//           <Spin spinning={loading} tip="Loading...">
//             <Row gutter={[16, 16]}>
//               {filterSearch.map((album: IStore, index: number) => (
//                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                   <Space direction="vertical" size="middle" style={{ display: "flex" }}>
//                     <Card
//                       title=""
//                       size="small"
//                       className="cardHeight"
//                       style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)", margin: "20px" }}
//                       cover={<img src={album.images[2].label} alt="" />}
//                     >
//                       <div className="image_margin"></div>
//                       <Card.Meta
//                         title={album.titleData.label}
//                         description={album.priceData.label}
//                       />
//                       <Button type="primary" onClick={() => showModal(album)} className="mb-3 mt-2">
//                         See More..
//                       </Button>
//                       <br />
//                       <Button type="primary" onClick={() => addToPartialList(album)} className="mb-2">
//                         Add to Favorites
//                       </Button>{" "}
//                       <br />
//                       <HeartTwoTone
//                         twoToneColor={isFavorite(album) ? "red" : ""}
//                         onClick={() => toggleFavorite(album)}
//                       />
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
//             <p>
//               <strong>Title: </strong> {clickedItem.titleData.label}
//             </p>
//             <p>
//               <strong>Price: </strong> {clickedItem.priceData.label}
//             </p>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default observer(ListItem);




// ------------------------------------ Final Catagory Select ----------------------



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

const ListItem: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
    const [categoryFilter, setCategoryFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [clickedItem, setClickedItem] = useState<IStore | null>(null);
    const [loading, setLoading] = useState(true);

    const [popopen, setPopOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setPopOpen(newOpen);
    };

    const searchData = (e: any) => {
        const searchData = e.target.value.trim();
        setSearchText(searchData);
        applyFilter(searchData, dateFilter, categoryFilter);
    };

    // const category = (e: any) => {
    //     const categorySearch = e.target.value.trim();
    //     setCategoryFilter(categorySearch);
    //     applyFilter(searchText, dateFilter, categorySearch);
    // };

    const category = (value: string) => {
        setCategoryFilter(value); // Update the categoryFilter state
        applyFilter(searchText, dateFilter, value); // Apply the filter
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
            console.log("dateMatch " , dateMatch);
            
            const categoryMatch = album.categoryData.label.toLowerCase().includes(category.toLowerCase());

            return searchMatch && dateMatch && categoryMatch;
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
        if (isFavorite(item)) {
            removeFromPartialList(item);
        } else {
            addToPartialList(item);
        }
    };

    const isFavorite = (item: IStore) => {
        return Store.getPartialList.some((i) => i.titleData.label === item.titleData.label);
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
                            className="inputWidth ms-3 me-3"
                            prefix={<SearchOutlined />}
                        />

                        {/* <Input
                            onChange={category}
                            placeholder="Enter Category"
                            className="inputWidth ms-3"
                        /> */}

                        <span className="searchtxt mt-2">Release Dates : </span>
                        <Input
                            type="date"
                            onChange={date}
                            placeholder="Select Release Date"
                            className="inputWidth ms-3"
                        />


                        <Select
                            defaultValue={categoryFilter} // Set the default value
                            style={{ width: 120 }}
                            onChange={category}
                        >
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

export default observer(ListItem);



