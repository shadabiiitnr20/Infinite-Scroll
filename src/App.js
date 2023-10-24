import { useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const handleMoreData = () => {
    if (dataSource.length < 100) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 10 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className="m-4">
      <h2 className="text-xl underline font-semibold m-3">Infinite Scroll</h2>
      <InfiniteScroll
        dataLength={dataSource.length}
        hasMore={hasMore}
        next={handleMoreData}
        loader={<p>Loading..</p>}
        endMessage={<p>You are all set..</p>}
      >
        {dataSource.map((item, i) => {
          return (
            <div
              className="border border-solid border-black p-1 m-2 w-1/6 rounded-lg shadow-lg"
              key={i}
            >
              This is {i + 1} item
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
