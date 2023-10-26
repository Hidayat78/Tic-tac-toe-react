// import React, { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import "../../App.css";
// const style = {
//   border: "1px solid red",
//   margin: 12,
//   padding: 12,
// };
// const InfiniteScrolles = () => {
//   const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
//   const [hasMore, setHasMore] = useState(true);
//   const fetcMoreData = () => {
//     if (hasMore.length < 200) {
//       setTimeout(() => {
//         setDataSource(dataSource.concat(Array.from({ length: 20 })));
//       }, 500);
//     } else {
//       setHasMore(false);
//     }
//     //api call
//   };
//   return (
//     <div className="App">
//       <InfiniteScroll
//         dataLength={DataTransferItemList.length}
//         next={fetcMoreData}
//         hasMore={hasMore}
//         loader={<p>Loading...</p>}
//         endMessage={<p>No more Data.</p>}
//       >
//         {dataSource.map((item, i) => {
//           return (
//             <div key={i} style={style}>
//               <h1>This is a Div #{i + 1}</h1>
//             </div>
//           );
//         })}
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default InfiniteScrolles;
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../App.css";

const style = {
  border: "1px solid red",
  margin: 12,
  padding: 12,
};

const InfiniteScrolles = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 800);
    } else {
      setHasMore(false);
    }
    // You can make an API call here if needed.
  };

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>No more Data.</p>}
      >
        {dataSource.map((item, i) => (
          <div key={i} style={style}>
            <h1>This is a Div #{i + 1}</h1>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrolles;
