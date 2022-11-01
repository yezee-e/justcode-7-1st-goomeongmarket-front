import React, { useEffect, useState } from 'react';
import CardList from './CardList';

function Category() {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false); //filp만들기 기능구현중
  const mockData = `http://localhost:3000/data/mockData.json`;

  //mock데이터 들고오기
  useEffect(() => {
    fetch(mockData)
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  //카테고리 필터기능
  let filterResult = item => {
    let result = data.filter(fakeData => fakeData.category == item);
    setData(result);
  };

  let filterName = () => {
    //   data.map(fakeData => {
    //     console.log(fakeData.title);
    //   });
  };
  //   console.log(data[0].title);

  return (
    <>
      <div>
        <div>
          <button onClick={() => filterResult('food')}>음식</button>

          <button onClick={() => filterResult('goods')}>물건</button>
          <button onClick={() => filterName()}>이름순</button>
          <button>가격</button>
          <button onClick={() => setData(data)}>all</button>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        {data.map(values => {
          const { id, title, price } = values;
          return <CardList key={id} title={title} price={price} />;
        })}
      </div>
    </>
  );
}

export default Category;
