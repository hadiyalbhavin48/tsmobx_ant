
import React, { useEffect } from 'react'
import Store, { IStore } from '../Stores/Store'

const UserDataList = () => {

    // get data from mobx

    useEffect(() => {
        Store.fetchUser();
    }, [])
    return (
        <div>
            {
                Store.getuserDetials.map((albul: IStore, index: number) => {                   
                    return (
                        // console.log("title",albul.titleData.label),
                        <div key={index}>

                            {/* Show multiple image */}
                      
                            {/* {albul.images.map((image: any, imageIndex: number) => (
                                console.log("image" , image.label),

                                <img src={image[0].label} alt={`images not fond ${imageIndex}`} />
                            ))} */}

                            {/* Show only for one image */}

                            <div>
                                <img src={albul.images[2].label} alt={`image not fond ${index}`} />
                            </div>
                           
                            <h6>{albul.titleData.label}</h6>
                            <h6>{albul.priceData.label}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserDataList