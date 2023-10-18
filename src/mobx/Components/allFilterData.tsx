

// import React, { useEffect, useState } from 'react'
// import '../../Style.css'
// import Store, { IStore } from '../Stores/Store'
// import { Breadcrumb, Layout, Menu, theme, Col, Divider, Row, Card, Space, Input, Button, Popover } from 'antd';
// import { values } from 'mobx';

// const { Header, Content, Footer } = Layout;

// const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

// const AllFilterData: React.FC = () => {

//     const [open, setOpen] = useState(false);

//     // Allow the top 100 to be searchable.
//     const [searchText, setSearchText] = useState('');
//     //   console.log("searchText " , searchText);

//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]);
//     // console.log("filterSearch ", filterSearch);

//     // Category Filter

//     const [categoryFilter, setCategoryFilter] = useState('')
//     console.log("categoryFilter ", categoryFilter);

//     //  Allow the top 100 to be searchable.

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         // console.log(e.target.value);
//         setSearchText(searchData);

//         // const filterData = Store.getuserDetials.filter((album) =>
//         //     album.titleData.label.toLowerCase().includes(searchText.toLowerCase())
//         // )

//         // setFilterSearch(filterData);
//         // // console.log("filterData " , filterData);

//         applyFilter(searchData, categoryFilter);
//         // applyFilter(categoryFilter,searchData);

//     }


//     // Allow the user to apply category filter and date filter for release dates.

//     const category = (e: any) => {
//         const categorySearch = e.target.value.trim();
//         // console.log("categorySearch " , categorySearch);

//         setCategoryFilter(categorySearch)

//         // const categoryFilter = Store.getuserDetials.filter((album) =>
//         //    album.releasedateData.label.toLowerCase().includes(categorySearch.toLowerCase())
//         // )

//         // setFilterSearch(categoryFilter)

//         applyFilter(searchText, categorySearch)
//         // applyFilter(categorySearch,searchText)
//     }


//     // apply bothFilter

//     const applyFilter = (search: string, category: string) => {
//         console.log(`search : ${search} and category ${category}`);

//         const filtered = Store.getuserDetials.filter((album) => {
//             const searchMath = album.titleData.label.toLowerCase().includes(search.toLowerCase())

//             const categoryMath = album.releasedateData.label.toLowerCase().includes(category.toLowerCase())
//             console.log(`searchMath ${searchMath} and categoryMath ${categoryMath}`);

//             return searchMath && categoryMath
//         }
//         )
//         setFilterSearch(filtered)
//     }
//     useEffect(() => {
//         Store.fetchUser();
//     }, [])


//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();

//     // Open pop

//     const hide = () => {
//         setOpen(false);
//     };

//     const handleOpenChange = (newOpen: boolean) => {
//         setOpen(newOpen);
//     };

//     const content = (

//         <div>
//             {/* <a onClick={hide}>Close</a> */}
//             <p>Content</p>
//             <p>Content</p>

//             <button onClick={hide}>Close</button>
//         </div>
//     )
//     return (


//         <div>

//             <Popover
//                 content={content}
//                 title="Title"
//                 trigger="click"
//                 open={open}
//                 onOpenChange={handleOpenChange}
//             >
//                 <Button type="primary">Click me</Button>
//             </Popover>

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


//                     {/* <Input placeholder="Basic usage" /> */}
//                 </Header>

//                 <Content>
//                     <div className='mt-3 inputBox'>
//                         <span>Search Song Title : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Search Song Title "
//                             className='inputWidth ms-3 me-3' />

//                         <span>category filter : </span>

//                         <Input
//                             onChange={category}
//                             placeholder="Search Song Title "
//                             className='inputWidth ms-3' />
//                     </div>
//                     <Row gutter={[16, 16]}>
//                         {
//                             filterSearch.map((albul: IStore, index: number) => {
//                                 return (
//                                     // console.log("title", albul.titleData.label),

//                                     <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                         <Space direction="vertical" size="middle" style={{ display: 'flex' }} className='margin_top'>
//                                             <Card title="" size="small" className='cardHeight'>
//                                                 {/* Show multiple image */}

//                                                 {/* {albul.images.map((image: any, imageIndex: number) => (
//                                 console.log("image" , image.label),

//                                 <img src={image[0].label} alt={`images not fond ${imageIndex}`} />
//                             ))} */}

//                                                 {/* Show only for one image */}

//                                                 <div className='image_margin'>
//                                                     <img src={albul.images[2].label} alt={`image not fond ${index}`} />
//                                                 </div>

//                                                 <h6>{albul.titleData.label}</h6>
//                                                 <h6>{albul.priceData.label}</h6>
//                                             </Card>
//                                         </Space>
//                                     </Col>


//                                 )
//                             })
//                         }
//                     </Row>
//                 </Content>

//             </Layout>
//         </div>
//     )
// }

// export default AllFilterData



// -------------------------- Open pop ----------------------------------------





// import React, { useEffect, useState } from 'react'
// import '../../Style.css'
// import Store, { IStore } from '../Stores/Store'
// import { Breadcrumb, Layout, Menu, theme, Col, Divider, Row, Card, Space, Input, Button, Popover, Modal } from 'antd';
// import { values } from 'mobx';
// import Item from 'antd/es/list/Item';

// const { Header, Content, Footer } = Layout;

// const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

// const AllFilterData: React.FC = () => {

//     const [open, setOpen] = useState(false);

//     // Allow the top 100 to be searchable.
//     const [searchText, setSearchText] = useState('');
//     //   console.log("searchText " , searchText);

//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]);
//     // console.log("filterSearch ", filterSearch);

//     // Category Filter

//     const [categoryFilter, setCategoryFilter] = useState('')
//     console.log("categoryFilter ", categoryFilter);

//     //  Allow the top 100 to be searchable.

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         // console.log(e.target.value);
//         setSearchText(searchData);

//         // const filterData = Store.getuserDetials.filter((album) =>
//         //     album.titleData.label.toLowerCase().includes(searchText.toLowerCase())
//         // )

//         // setFilterSearch(filterData);
//         // // console.log("filterData " , filterData);

//         applyFilter(searchData, categoryFilter);
//         // applyFilter(categoryFilter,searchData);

//     }


//     // Allow the user to apply category filter and date filter for release dates.

//     const category = (e: any) => {
//         const categorySearch = e.target.value.trim();
//         // console.log("categorySearch " , categorySearch);

//         setCategoryFilter(categorySearch)

//         // const categoryFilter = Store.getuserDetials.filter((album) =>
//         //    album.releasedateData.label.toLowerCase().includes(categorySearch.toLowerCase())
//         // )

//         // setFilterSearch(categoryFilter)

//         applyFilter(searchText, categorySearch)
//         // applyFilter(categorySearch,searchText)
//     }


//     // apply bothFilter

//     const applyFilter = (search: string, category: string) => {
//         console.log(`search : ${search} and category ${category}`);

//         const filtered = Store.getuserDetials.filter((album) => {
//             const searchMath = album.titleData.label.toLowerCase().includes(search.toLowerCase())

//             const categoryMath = album.releasedateData.label.toLowerCase().includes(category.toLowerCase())
//             console.log(`searchMath ${searchMath} and categoryMath ${categoryMath}`);

//             return searchMath && categoryMath
//         }
//         )
//         setFilterSearch(filtered)
//     }
//     useEffect(() => {
//         // debugger
//         Store.fetchUser();
//     }, [])

//     // console.log("user " , Store.getuserDetials);


//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();

//     // Open pop

//     const hide = () => {
//         setOpen(false);
//     };

//     const handleOpenChange = (newOpen: boolean) => {
//         setOpen(newOpen);
//     };

//     const content = (

//         <div>
//             {/* <a onClick={hide}>Close</a> */}
//             <p>Content</p>
//             <p>Content</p>

//             <button onClick={hide}>Close</button>
//         </div>
//     )

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const [popData, setPopData] = useState<string | null>(null);

//     const showModal = (title: string) => {
//         setIsModalOpen(true);

//         setPopData(title)
//     };

//     const handleOk = () => {
//         setIsModalOpen(false);
//     };

//     const handleCancel = () => {
//         setIsModalOpen(false);
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


//                     {/* <Input placeholder="Basic usage" /> */}
//                 </Header>

//                 <Content>
//                     <div className='mt-3 inputBox'>
//                         <span>Search Song Title : </span>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Search Song Title "
//                             className='inputWidth ms-3 me-3' />

//                         <span>category filter : </span>

//                         <Input
//                             onChange={category}
//                             placeholder="Search Song Title "
//                             className='inputWidth ms-3' />
//                     </div>
//                     <Row gutter={[16, 16]}>
//                         {
//                             filterSearch?.map((albul: IStore, index: number) => {
//                                 return (
//                                     console.log("title", albul.titleData.label),

//                                     <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                         <Space direction="vertical" size="middle" style={{ display: 'flex' }} className='margin_top'>
//                                             <Card title="" size="small" className='cardHeight'>
//                                                 <div className='image_margin'>
//                                                     <img src={albul.images[2].label} alt={`image not fond ${index}`} />
//                                                 </div>

//                                                 <h6>{albul.titleData.label}</h6>
//                                                 <h6>{albul.priceData.label}</h6>

//                                                 {/*  */}
//                                                 {/* <Button type="primary" onClick={() => showModal(albul.titleData.label)}>
//                                                     Open Modal
//                                                 </Button> */}

//                                                 {/* funtion pass all data */}
//                                                 <Button type="primary" onClick={() => showModal(albul.titleData.label)}>
//                                                     Open Modal
//                                                 </Button>
//                                             </Card>
//                                         </Space>
//                                     </Col>


//                                 )
//                             })
//                         }
//                     </Row>
//                 </Content>

//             </Layout>

//             <Modal title={`Song Title : ${popData}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//                 {/* <p>Some contents...</p>
//                 <p>Some contents...</p>
//                 <p>Some contents...</p> */}
//                 <p>{popData}</p>
//             </Modal>

//         </div>
//     )
// }

// export default AllFilterData




// ----------------------------


// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Breadcrumb, Layout, Menu, theme, Col, Row, Card, Space, Input, Button, Modal , Spin } from 'antd';

// const { Header, Content } = Layout;

// const AllFilterData: React.FC = () => {
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

// export default AllFilterData;





// ----------------------- Add Fovirite List ----------------------------




// import React, { useEffect, useState } from 'react';
// import Store, { IStore } from '../Stores/Store';
// import { Breadcrumb, Layout, Menu, theme, Col, Row, Card, Space, Input, Button, Modal, Spin } from 'antd';

// const { Header, Content } = Layout;

// const AllFilterData: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState('');
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
//     const [categoryFilter, setCategoryFilter] = useState('');
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     const [filteredList, setFilteredList] = useState<IStore[]>(Store.favoriteItems);

//     // add to cart


//     const addToFavorites = (item: any) => {
//         Store.addToFavorites(item);
//     };

//     const removeFromFavorites = (item: any) => {
//         Store.removeFromFavorites(item);
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

//     console.log("Favorite Items:", Store.favoriteItems);

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
//                         <Row gutter={[16, 16]}>
//                             {filterSearch.map((album: IStore, index: number) => (
//                                 // console.log("title " , album.titleData.label),

//                                 <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                                     <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
//                                         <Card title="" size="small" className='cardHeight'>
//                                             <div className='image_margin'>
//                                                 <img src={album.images[2].label} alt={`image not found ${index}`} />
//                                             </div>
//                                             <h6>{album.titleData.label}</h6>
//                                             <h6>{album.priceData.label}</h6>
//                                             <Button type="primary" onClick={() => showModal(album)} className='mb-3'>
//                                                 See More..
//                                             </Button>  <br />
//                                             <Button type="primary" onClick={() => addToFavorites(album)}>Favorite</Button> {/* Add to Favorites */}

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
//                 <h2>Favorite Items</h2>
//                 <ul>
//                     {filteredList.map((item: IStore) => (
//                         <li key={item.titleData.label}>
//                         {item.titleData.label} - {item.priceData.label}
//                         <button onClick={() => removeFromFavorites(item)}>Remove from Favorites</button>
//                     </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default AllFilterData;






// ----------------------------------------------------------

// import React, { useEffect, useState } from "react";

// import Store  , { IStore } from "../Stores/Store";
// import { Layout, Row, Col, Card, Space, Input, Button, Modal, Spin } from "antd";

// const { Header, Content } = Layout;

// const AllFilterData: React.FC = () => {
//     const [open, setOpen] = useState(false);
//     const [searchText, setSearchText] = useState("");
//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]);
//     const [categoryFilter, setCategoryFilter] = useState("");
//     const [clickedItem, setClickedItem] = useState<IStore | null>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         Store.fetchUser().then(() => setLoading(false));
//     }, [loading]);

//     const addToFavorites = (item: IStore) => {
//         Store.addToFavorites(item);
//     };

//     const removeFromFavorites = (item: IStore) => {
//         Store.removeFromFavorites(item);
//     };

//     const searchData = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const searchData = e.target.value.trim();
//         setSearchText(searchData);
//         applyFilter(searchData, categoryFilter);
//     };

//     const category = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const categorySearch = e.target.value.trim();
//         setCategoryFilter(categorySearch);
//         applyFilter(searchText, categorySearch);
//     };

//     const applyFilter = (search: string, category: string) => {
//         const filtered = Store.getuserDetials.filter((album : IStore) => {
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

//     return (
//       <div>
//          <Layout>
//       <Header
//         style={{
//           position: "sticky",
//           top: 0,
//           zIndex: 1,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <div className="demo-logo" />
//       </Header>
//       <Content>
//         <div className="mt-3 inputBox">
//           <span>Search Song Title: </span>
//           <Input
//             type="text"
//             onChange={searchData}
//             placeholder="Search Song Title"
//             className="inputWidth ms-3 me-3"
//           />
//           <span>Category filter: </span>
//           <Input
//             type="text"
//             onChange={category}
//             placeholder="Category Filter"
//             className="inputWidth ms-3"
//           />
//         </div>
//         <Spin spinning={loading} tip="Loading...">
//           <Row gutter={[16, 16]}>
//             {filterSearch.map((album: IStore, index: number) => (
//               <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
//                 <Space direction="vertical" size="middle" style={{ display: "flex" }}>
//                   <Card title="" size="small" className="cardHeight">
//                     <div className="image_margin">
//                       <img src={album.images[2].label} alt={`image not found ${index}`} />
//                     </div>
//                     <h6>{album.titleData.label}</h6>
//                     <h6>{album.priceData.label}</h6>
//                     <Button type="primary" onClick={() => showModal(album)} className="mb-3">
//                       See More..
//                     </Button>
//                     <br />
//                     <Button type="primary" onClick={() => addToFavorites(album)}>
//                       Favorite
//                     </Button>
//                   </Card>
//                 </Space>
//               </Col>
//             ))}
//           </Row>
//         </Spin>
//       </Content>
//     </Layout>
//     <Modal title="Song Details" open={open} onOk={handleOk} onCancel={handleCancel}>
//       {clickedItem && (
//         <div>
//           <p>Title: {clickedItem.titleData.label}</p>
//           <p>Price: {clickedItem.priceData.label}</p>
//         </div>
//       )}
//     </Modal>
//       </div>
//     );
// };

// export default AllFilterData;




//  ---------------------------------------------------------------


import React, { useEffect, useState } from 'react';
import Store, { IStore } from '../Stores/Store';
import { Breadcrumb, Layout, Menu, theme, Col, Row, Card, Space, Input, Button, Modal , Spin } from 'antd';

const { Header, Content } = Layout;

const AllFilterData: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filterSearch, setFilterSearch] = useState<IStore[]>([]); // Initialize with the full list
    const [categoryFilter, setCategoryFilter] = useState('');
    const [clickedItem, setClickedItem] = useState<IStore | null>(null);
    const [loading, setLoading] = useState(true);

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
        Store.fetchUser().then(() => setLoading(false))
        setFilterSearch(Store.getuserDetials)

    }, [loading]);

    const { token: { colorBgContainer } } = theme.useToken();

    const content = (
        <div>
            <button onClick={handleCancel}>Close</button>
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
                    <div className='mt-3 inputBox'>
                        <span>Search Song Title : </span>
                        <Input
                            onChange={searchData}
                            placeholder="Search Song Title"
                            className='inputWidth ms-3 me-3'
                        />
                        <span>Category filter : </span>
                        <Input
                            onChange={category}
                            placeholder="Category Filter"
                            className='inputWidth ms-3'
                        />
                    </div>
                    <Spin spinning={loading} tip="Loading...">
                    <Row gutter={[16, 16]}>
                        {filterSearch.map((album: IStore, index: number) => (
                            // console.log("title " , album.titleData.label),

                            <Col key={index} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
                                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                    <Card title="" size="small" className='cardHeight'>
                                        <div className='image_margin'>
                                            <img src={album.images[2].label} alt={`image not found ${index}`} />
                                        </div>
                                        <h6>{album.titleData.label}</h6>
                                        <h6>{album.priceData.label}</h6>
                                        <Button type="primary" onClick={() => showModal(album)} className='mb-3'>
                                            See More..
                                        </Button>  <br />
                                        <Button type="primary">Add a "Favorite/Wishlist"</Button>
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
        </div>
    );
}

export default AllFilterData;
