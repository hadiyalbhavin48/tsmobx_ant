
// import Item from "antd/es/list/Item";
// import axios from "axios";
// import { action, computed, makeObservable, observable } from "mobx";
// import React from "react";

// export interface IStore{
//     images :{label : string}[],    //    {label: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/…181-80993b8116c9/19UMGIM53909.rgb.jpg/55x55bb.png', attributes: {…}}
//     titleData : {label : string},   //     {label: 'Lover - Taylor Swift'}
//     priceData : {label : string},
//     releasedateData : {label : string}
// }

// class Store{
//     userDetails : IStore[] = [];

//     constructor(){
//         makeObservable(this , {
//             userDetails : observable,
//             getuserDetials : computed,
//             fetchUser : action
//         })


//     }

//     async fetchUser(){
//         const userList = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")

//         // console.log("userList" , userList.data.feed.entry);
//         // debugger;

//         const resData = userList.data.feed.entry;

//         const allData = resData.map((entry : any) => {
//             // image 
//             const images = entry['im:image'].map((Item : any) => ({label : Item.label}))
//             // console.log("images" , images);

//             // Title

//             const titleData = ({label : entry.title.label});
//             // console.log("titleData" , titleData);

//             // price

//             const priceData = ({label : entry['im:price'].label})
//             // console.log("priceData " , priceData);

//             // Filter Release Date

//             const releasedateData = ({label : entry['im:releaseDate'].attributes.label})
//             // console.log("releasedateData" , releasedateData);


//             return {images , titleData , priceData , releasedateData}

//         })
//        this.userDetails = allData;

//     }

//     get getuserDetials(){
//         return this.userDetails
//     }

// }

// export default new Store();



// -------------------------------------------------






// // import Item from "antd/es/list/Item";
// import axios from "axios";
// import { action, computed, makeObservable, observable } from "mobx";
// import React from "react";

// export interface IStore {
//     images: { label: string }[],    //    {label: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/…181-80993b8116c9/19UMGIM53909.rgb.jpg/55x55bb.png', attributes: {…}}
//     titleData: { label: string },   //     {label: 'Lover - Taylor Swift'}
//     priceData: { label: string },
//     releasedateData: { label: string }
// }

// class Store {
//     userDetails: IStore[] = [];
//     favoriteItems: IStore[] = [];

//     constructor() {
//         makeObservable(this, {
//             userDetails: observable,
//             getuserDetials: computed,
//             fetchUser: action,
//             favoriteItems: observable, // Add the favoriteItems as observable
//             addToFavorites: action,
//             removeFromFavorites: action,
//         })


//     }

//     async fetchUser() {
//         const userList = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")

//         // console.log("userList" , userList.data.feed.entry);
//         // debugger;

//         const resData = userList.data.feed.entry;

//         const allData = resData.map((entry: any) => {
//             // image 
//             const images = entry['im:image'].map((Item: any) => ({ label: Item.label }))
//             // console.log("images" , images);

//             // Title

//             const titleData = ({ label: entry.title.label });
//             // console.log("titleData" , titleData);

//             // price

//             const priceData = ({ label: entry['im:price'].label })
//             // console.log("priceData " , priceData);

//             // Filter Release Date

//             const releasedateData = ({ label: entry['im:releaseDate'].attributes.label })
//             // console.log("releasedateData" , releasedateData);


//             return { images, titleData, priceData, releasedateData }

//         })
//         this.userDetails = allData;

//     }

//      // Add a method to add an item to the favorite list
//   addToFavorites(item: IStore) {

//     if (!this.favoriteItems.some((favorite) => favorite.titleData.label === item.titleData.label)) {
//       this.favoriteItems.push(item);
//     }
//   }

//   // Add a method to remove an item from the favorite list
//   removeFromFavorites(item: IStore) {
//     const index = this.favoriteItems.findIndex((favorite) => favorite.titleData.label === item.titleData.label);

//     if (index !== -1) {
//         this.favoriteItems.splice(index, 1);
//       }
//   }


//     get getuserDetials() {
//         return this.userDetails
//     }



// }

// export default new Store();





// ----------------------------------------------



// import axios from "axios";
// import { action, computed, makeObservable, observable } from "mobx";
// import React from "react";

// export interface IStore {
//   images: { label: string }[],    //    {label: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/…181-80993b8116c9/19UMGIM53909.rgb.jpg/55x55bb.png', attributes: {…}}
//   titleData: { label: string },   //     {label: 'Lover - Taylor Swift'}
//   priceData: { label: string },
//   releasedateData: { label: string }
// }

// class Store {
//   userDetails: IStore[] = [];
//   favoriteItems : IStore[] = [];

//   constructor() {
//     makeObservable(this, {
//       userDetails: observable,
//       favoriteItems: observable, // Add the favoriteItems as observable
//       getuserDetials: computed,
//       fetchUser: action,

//       addToFavorites: action,
//       removeFromFavorites: action,
//     })


//   }

//   async fetchUser() {
//     const userList = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")

//     // console.log("userList" , userList.data.feed.entry);
//     // debugger;

//     const resData = userList.data.feed.entry;

//     const allData = resData.map((entry: any) => {
//       // image 
//       const images = entry['im:image'].map((Item: any) => ({ label: Item.label }))
//       // console.log("images" , images);

//       // Title

//       const titleData = ({ label: entry.title.label });
//       // console.log("titleData" , titleData);

//       // price

//       const priceData = ({ label: entry['im:price'].label })
//       // console.log("priceData " , priceData);

//       // Filter Release Date

//       const releasedateData = ({ label: entry['im:releaseDate'].attributes.label })
//       // console.log("releasedateData" , releasedateData);


//       return { images, titleData, priceData, releasedateData }

//     })
//     this.userDetails = allData;

//   }

//   // Add a method to add an item to the favorite list
//   addToFavorites(item: IStore) {
//     this.favoriteItems.push(item);
//   }

//   // Add a method to remove an item from the favorite list
//   removeFromFavorites(item: IStore[]) {
//     // this.favoriteItems = this.favoriteItems.filter((favItem) => favItem !== item);
//   }


//   get getuserDetials() {
//     return this.userDetails
//   }



// }

// export default new Store();




// -----------------------------------------------------------------------------


// import { action, computed, makeObservable, observable } from "mobx";
// import axios from "axios";

// export interface IStore {
//   images: { label: string }[];
//   titleData: { label: string };
//   priceData: { label: string };
//   releasedateData: { label: string };
// }

// class Store {
//   userDetails: IStore[] = [];
//   partialList: IStore[] = [];

//   constructor() {
//     makeObservable(this, {
//       userDetails: observable,
//       partialList: observable,
//       getuserDetials: computed,
//       fetchUser: action,
//       addToPartialList: action,
//       removeFromPartialList: action,
//     });
//   }

//   async fetchUser() {
//     try {
//       const userList = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
//       const resData = userList.data.feed.entry;

//       const allData = resData.map((entry: any) => {
//         const images = entry["im:image"].map((item: any) => ({ label: item.label }));
//         const titleData = { label: entry.title.label };
//         const priceData = { label: entry["im:price"].label };
//         const releasedateData = { label: entry["im:releaseDate"].attributes.label };

//         return { images, titleData, priceData, releasedateData };
//       });

//       this.userDetails = allData;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   addToPartialList(item: IStore) {
//     if (!this.partialList.some((partialItem) => partialItem.titleData.label === item.titleData.label)) {
//       this.partialList.push(item);
//     }
//   }

//   removeFromPartialList(item: IStore) {
//     this.partialList = this.partialList.filter(
//       (partialItem) => partialItem.titleData.label !== item.titleData.label
//     );
//   }


//   get getuserDetials() {
//     return this.userDetails;
//   }
// }

// export default new Store();



// ----------------------------- addto cart click me button --------------




// import { action, computed, makeObservable, observable } from "mobx";
// import axios from "axios";

// export interface IStore {
//   images: { label: string }[];
//   titleData: { label: string };
//   priceData: { label: string };
//   releasedateData: { label: string };
//   isFavorite: boolean;
// }

// class Store {
//   userDetails: IStore[] = [];
//   partialList: IStore[] = [];

//   constructor() {
//     makeObservable(this, {
//       userDetails: observable,
//       partialList: observable,
//       getuserDetials: computed,
//       getPartialList: computed,
//       fetchUser: action,
//       addToPartialList: action,
//       removeFromPartialList: action,
//     });
//   }

//   async fetchUser() {
//     try {
//       const userList = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
//       const resData = userList.data.feed.entry;

//       const allData = resData.map((entry: any) => {
//         const images = entry["im:image"].map((item: any) => ({ label: item.label }));
//         const titleData = { label: entry.title.label };
//         const priceData = { label: entry["im:price"].label };
//         const releasedateData = { label: entry["im:releaseDate"].attributes.label };

//         return { images, titleData, priceData, releasedateData };
//       });

//       this.userDetails = allData;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   // Add a new action to add an item to the partialList
//   addToPartialList(item: IStore) {
//     this.partialList.push(item);
//   }

//   // Add a new action to remove an item from the partialList
//   removeFromPartialList(item: IStore) {
//     this.partialList = this.partialList.filter((i) => i.titleData.label !== item.titleData.label);
//   }


//   get getuserDetials() {
//     return this.userDetails;
//   }

//   // Add a computed property to get the partialList
//   get getPartialList() {
//     return this.partialList;
//   }
// }

// export default new Store();




// --------------------------------------------  task Done ----------------------------



// import { action, computed, makeObservable, observable } from "mobx";
// import axios from "axios";

// export interface IStore {
//   images: { label: string }[];
//   titleData: { label: string };
//   priceData: { label: string };
//   releasedateData: { label: string };
//   isFavorite: boolean;
// }

// class Store {
//   userDetails: IStore[] = [];
//   partialList: IStore[] = [];

//   constructor() {
//     makeObservable(this, {
//       userDetails: observable,
//       partialList: observable,
//       getuserDetials: computed,
//       getPartialList: computed,
//       fetchUser: action,
//       addToPartialList: action,
//       removeFromPartialList: action,
//     });
//   }

//   async fetchUser() {
//     try {
//       const userList = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
//       const resData = userList.data.feed.entry;

//       const allData = resData.map((entry: any) => {
//         const images = entry["im:image"].map((item: any) => ({ label: item.label }));
//         const titleData = { label: entry.title.label };
//         const priceData = { label: entry["im:price"].label };
//         const releasedateData = { label: entry["im:releaseDate"].attributes.label };

//         return { images, titleData, priceData, releasedateData };
//       });

//       this.userDetails = allData;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   // Add a new action to add an item to the partialList
//   addToPartialList(item: IStore) {
//     this.partialList.push(item);
//   }

//   // Add a new action to remove an item from the partialList
//   removeFromPartialList(item: IStore) {
//     this.partialList = this.partialList.filter((i) => i.titleData.label !== item.titleData.label);
//   }


//   get getuserDetials() {
//     return this.userDetails;
//   }

//   // Add a computed property to get the partialList
//   get getPartialList() {
//     return this.partialList;
//   }
// }

// export default new Store();




//  -------------------------------------------------------




// import { action, computed, makeObservable, observable } from "mobx";
// import axios from "axios";

// export interface IStore {
//   images: { label: string }[];   // //    {label: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/…181-80993b8116c9/19UMGIM53909.rgb.jpg/55x55bb.png', attributes: {…}}
//   titleData: { label: string };
//   priceData: { label: string };
//   releasedateData: { label: string };
//   isFavorite: boolean;
// }

// class Store {
//   userDetails: IStore[] = [];
//   partialList: IStore[] = [];

//   constructor() {
//     makeObservable(this, {
//       userDetails: observable,
//       partialList: observable,
//       getuserDetials: computed,
//       getPartialList: computed,
//       fetchUser: action,
//       addToPartialList: action,
//       removeFromPartialList: action,
//     });
//   }

//   async fetchUser() {
//     try {
//       const userList = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
//       const resData = userList.data.feed.entry;
//       console.log("resData " , resData);
      

//       const allData = resData.map((entry: any) => {
//         const images = entry["im:image"].map((item: any) => ({ label: item.label }));
//         const titleData = { label: entry.title.label };
//         const priceData = { label: entry["im:price"].label };
//         const releasedateData = { label: entry["im:releaseDate"].attributes.label };

//         return { images, titleData, priceData, releasedateData };
//       });

//       this.userDetails = allData;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   // Add a new action to add an item to the partialList
//   addToPartialList(item: IStore) {
//     this.partialList.push(item);
//   }

//   // Add a new action to remove an item from the partialList
//   removeFromPartialList(item: IStore) {
//     this.partialList = this.partialList.filter((i) => i.titleData.label !== item.titleData.label);
//   }


//   get getuserDetials() {
//     return this.userDetails;
//   }

//   // Add a computed property to get the partialList
//   get getPartialList() {
//     return this.partialList;
//   }
// }

// const store = new Store()
// export default store;
// // export default new Store();




// ------------------------------------------------  Date ------



// import { action, computed, makeObservable, observable } from "mobx";
// import axios from "axios";

// export interface IStore {
//   images: { label: string }[];   // //    {label: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/…181-80993b8116c9/19UMGIM53909.rgb.jpg/55x55bb.png', attributes: {…}}
//   titleData: { label: string };
//   priceData: { label: string };
//   releasedateData: { label: string };
//   categoryData : {label: string}
// }

// class Store {
//   userDetails: IStore[] = [];
//   partialList: IStore[] = [];

//   constructor() {
//     makeObservable(this, {
//       userDetails: observable,
//       partialList: observable,
//       getuserDetials: computed,
//       getPartialList: computed,
//       fetchUser: action,
//       addToPartialList: action,
//       removeFromPartialList: action,
//     });
//   }

//   async fetchUser() {
//     try {
//       const userList = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
//       const resData = userList.data.feed.entry;
//       console.log("resData " , resData);
      

//       const allData = resData.map((entry: any) => {
//         const images = entry["im:image"].map((item: any) => ({ label: item.label }));
//         const titleData = { label: entry.title.label };
//         const priceData = { label: entry["im:price"].label };
//         const releasedateData = { label: entry["im:releaseDate"].label };
//         const categoryData = {label: entry.category.attributes.label}
//         // console.log("categoryData " , categoryData);
        
//         return { images, titleData, priceData, releasedateData , categoryData };
//       });

//       this.userDetails = allData;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   // Add a new action to add an item to the partialList
//   addToPartialList(item: IStore) {
//     this.partialList.push(item);
//   }

//   // Add a new action to remove an item from the partialList
//   removeFromPartialList(item: IStore) {
//     this.partialList = this.partialList.filter((i) => i.titleData.label !== item.titleData.label);
//   }


//   get getuserDetials() {
//     return this.userDetails;
//   }

//   // Add a computed property to get the partialList
//   get getPartialList() {
//     return this.partialList;
//   }
// }

// const store = new Store()
// export default store;
// // export default new Store();



// ------------------------------------------------



import { action, computed, makeObservable, observable } from "mobx";
import axios from "axios";

export interface IStore {
  images: { label: string }[];   // //    {label: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/…181-80993b8116c9/19UMGIM53909.rgb.jpg/55x55bb.png', attributes: {…}}
  titleData: { label: string };
  priceData: { label: string };
  releasedateData: { label: string };
  categoryData : {label: string}
}

class Store {
  userDetails: IStore[] = [];
  partialList: IStore[] = [];

  constructor() {
    makeObservable(this, {
      userDetails: observable,
      partialList: observable,
      getuserDetials: computed,
      getPartialList: computed,
      fetchUser: action,
      addToPartialList: action,
      removeFromPartialList: action,
    });
  }

  async fetchUser() {
    try {
      const userList = await axios.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
      const resData = userList.data.feed.entry;
      console.log("resData " , resData);
      

      const allData = resData.map((entry: any) => {
        const images = entry["im:image"].map((item: any) => ({ label: item.label }));
        const titleData = { label: entry.title.label };
        const priceData = { label: entry["im:price"].label };
        const releasedateData = { label: entry["im:releaseDate"].label };
        const categoryData = {label: entry.category.attributes.label}
        // console.log("categoryData " , categoryData);
        
        return { images, titleData, priceData, releasedateData , categoryData };
      });

      this.userDetails = allData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Add a new action to add an item to the partialList
  addToPartialList(item: IStore) {
    this.partialList.push(item);
  }

  // Add a new action to remove an item from the partialList
  removeFromPartialList(item: IStore) {
    this.partialList = this.partialList.filter((i) => i.titleData.label !== item.titleData.label);
  }


  get getuserDetials() {
    return this.userDetails;
  }

  // Add a computed property to get the partialList
  get getPartialList() {
    return this.partialList;
  }
}

const store = new Store()
export default store;
// export default new Store();

