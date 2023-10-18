
// import React, { useEffect, useState } from 'react'
// import '../../Style.css'
// import Store, { IStore } from '../Stores/Store'
// import { Breadcrumb, Layout, Menu, theme, Col, Divider, Row, Card, Space, Input, Button, Popover } from 'antd';

// const { Header, Content, Footer } = Layout;

// const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

// const FilterTitile: React.FC = () => {

//     const [open, setOpen] = useState(false);

//     // Allow the top 100 to be searchable.
//     const [searchText, setSearchText] = useState('');
//     //   console.log("searchText " , searchText);

//     const [filterSearch, setFilterSearch] = useState<IStore[]>([]);
// //   console.log("filterSearch ", filterSearch);

//     //  Allow the top 100 to be searchable.

//     const searchData = (e: any) => {
//         const searchData = e.target.value.trim();
//         // console.log(e.target.value);
//         setSearchText(searchData);

//         const filterData = Store.getuserDetials.filter((album) =>
//             album.titleData.label.toLowerCase().includes(searchText.toLowerCase())
//         )

//         setFilterSearch(filterData);
//         // console.log("filterData " , filterData);

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
//                     <div className='mt-3'>
//                         <Input
//                             onChange={searchData}
//                             placeholder="Search Song Title " />
//                     </div>
//                     <Row gutter={[16, 16]}>
//                         {
//                             filterSearch.map((albul: IStore, index: number) => {
//                                 return (
//                                     console.log("title", albul.titleData.label),

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

// export default FilterTitile






// ------------------------------- Date Filter -----------------------------------



import React, { useEffect, useState } from 'react'
import '../../Style.css'
import Store, { IStore } from '../Stores/Store'
import { Breadcrumb, Layout, Menu, theme, Col, Divider, Row, Card, Space, Input, Button, Popover } from 'antd';

const { Header, Content, Footer } = Layout;

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const FilterTitile: React.FC = () => {

    const [open, setOpen] = useState(false);

    // Allow the top 100 to be searchable.
    const [searchText, setSearchText] = useState('');
    //   console.log("searchText " , searchText);

    const [filterSearch, setFilterSearch] = useState<IStore[]>([]);
      console.log("filterSearch ", filterSearch);

    // Category Filter

    const [categoryFilter , setCategoryFilter] = useState('')
    console.log("categoryFilter " , categoryFilter);

    //  Allow the top 100 to be searchable.

    const searchData = (e: any) => {
        const searchData = e.target.value.trim();
        // console.log(e.target.value);
        setSearchText(searchData);

        const filterData = Store.getuserDetials.filter((album) =>
            album.titleData.label.toLowerCase().includes(searchText.toLowerCase())
        )

        setFilterSearch(filterData);
        // console.log("filterData " , filterData);

    }


    // Allow the user to apply category filter and date filter for release dates.

    const category = (e : any) =>{
        const categorySearch = e.target.value.trim();
        // console.log("categorySearch " , categorySearch);

        setCategoryFilter(categorySearch)

        const categoryFilter = Store.getuserDetials.filter((album) =>
           album.releasedateData.label.toLowerCase().includes(categorySearch.toLowerCase())
        )

        setFilterSearch(categoryFilter)

    }
    useEffect(() => {
        Store.fetchUser();
    }, [])


    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // Open pop

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const content = (

        <div>
            {/* <a onClick={hide}>Close</a> */}
            <p>Content</p>
            <p>Content</p>

            <button onClick={hide}>Close</button>
        </div>
    )
    return (


        <div>

            <Popover
                content={content}
                title="Title"
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
            >
                <Button type="primary">Click me</Button>
            </Popover>

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


                    {/* <Input placeholder="Basic usage" /> */}
                </Header>

                <Content>
                    <div className='mt-3 inputBox'>
                        <span>Search Song Title : </span>
                        <Input
                            onChange={searchData}
                            placeholder="Search Song Title "
                            className='inputWidth ms-3 me-3' />

                            <span>category filter : </span>

                         <Input
                            onChange={category}
                            placeholder="Search Song Title "
                            className='inputWidth ms-3' />
                    </div>
                    <Row gutter={[16, 16]}>
                        {
                            filterSearch.map((albul: IStore, index: number) => {
                                return (
                                    console.log("title", albul.titleData.label),

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
                                                    <img src={albul.images[2].label} alt={`image not fond ${index}`} />
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

export default FilterTitile






// ---------------------------------------------------------------






