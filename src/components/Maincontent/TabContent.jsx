import React from 'react';
import CardList from './CardList';
import Dropdown from '../Filter/Dropdown';
import './TabContent.scss';

function TabContent({
  data,
  setData,
  converPrice,
  URL,
  tabTitle,
  filterTitle,
}) {
  const filterList = ['카테고리', '가격', '이름순', '해택']; //대장카테고리
  return (
    <div className="wrap">
      <div className="MaincontentWrap">
        <div className="MainContentTitle">
          <span>{tabTitle}</span>
        </div>

        <div className="MainContentBox">
          <div>
            <div className="filter">필터</div>
            {filterList.map(list => (
              <Dropdown key={list} list={list} data={data} setData={setData} />
            ))}
          </div>
          <div className="productInformation">
            <div className="productInformation-filter">
              <span>신상품순</span>
              <span>판매량순</span>
              <span>낮은 가격순</span>
              <span>높은 가격순</span>
            </div>
            <div className="productInformation-card">
              {URL.map((values, index) => {
                const { id, title, price, img } = values;
                return (
                  <CardList
                    id={id}
                    title={title}
                    price={price}
                    key={index}
                    img={img}
                    converPrice={converPrice}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContent;
