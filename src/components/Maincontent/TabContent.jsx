import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import Dropdown from '../Filter/Dropdown';
import './TabContent.scss';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function TabContent({ converPrice, tabList, setTabList, search }) {
  let [searchParms, setSearchParams] = useSearchParams();

  const category_id = searchParms.get('category_id');
  const { tabId } = useParams();

  //최종API (사이드필터 및 mini필터)
  // const filtering = pageNumber => {
  //   fetch(
  //     `http://13.125.228.177:8000/products/${tabId}?sorted_by=${pageNumber}`,
  //     {
  //       method: 'POST',
  //       headers: { 'content-Type': 'application/json' },
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(res => setTabList(res.data));
  //   searchParms.set('sorted_by', pageNumber);
  //   searchParms.delete('category_id');
  //   setSearchParams(searchParms);
  // };

  // const newfilterging = newNumber => {
  //   const sorted_by = searchParms.get('sorted_by');
  //   fetch(
  //     `http://13.125.228.177:8000/products/${tabId}?sorted_by=${sorted_by}&category_id=${newNumber}`,
  //     {
  //       method: 'POST',
  //       headers: { 'content-Type': 'application/json' },
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(res => setTabList(res.data));
  //   searchParms.set('category_id', newNumber);
  //   setSearchParams(searchParms);
  // };

  let filtering = num => {
    axios
      .post(`http://13.125.228.177:8000/products/${tabId}`, {
        params: { sorted_by: num, category_id: num },
      })
      .then(res => setTabList(res.data));
  };

  useEffect(() => {
    filtering();
  }, []);

  const filterList = ['카테고리', '가격', '이름순', '해택']; //사이드대장카테고리

  const tabTitle = () => {
    if (tabId == 'new') {
      return '신상품';
    } else if (tabId == 'best') {
      return '베스트';
    } else if (tabId == 'cheap') {
      return '알뜰쇼핑';
    }
  };

  // 검색창 활성화 구현
  const filterTab = tabList.filter(item =>
    item.title
      .replace(' ', '')
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().replace(' ', ''))
  );

  //Detail페이지 접속하면 그 페이지에 보이는 상품 id가져와서
  //localstorage에 watch항목에 추가
  useEffect(() => {
    localStorage.setItem('watch', JSON.stringify([]));
  }, []);

  return (
    <div className="wrap">
      <div className="MaincontentWrap">
        <div className="MainContentTitle">
          <span>{tabTitle(tabId)}</span>
        </div>

        <div className="MainContentBox">
          <div>
            <div className="filter">필터</div>
            {filterList.map(list => (
              <Dropdown key={list} list={list} filtering={filtering} />
            ))}
          </div>
          <div className="productInformation">
            <div className="productInformation-filter">
              <span onClick={() => filtering(11)}>신상품순</span>
              <span onClick={() => filtering(16)}>판매량순</span>
              <span onClick={() => filtering(-6)}>낮은 가격순</span>
              <span onClick={() => filtering(6)}>높은 가격순</span>
            </div>
            <div className="productInformation-card">
              {filterTab.map((values, index) => {
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
          <div className="productInformation-watch">
            최근본상품
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabContent;
