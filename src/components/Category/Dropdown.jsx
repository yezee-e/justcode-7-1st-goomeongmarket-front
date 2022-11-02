import React from 'react';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

function Dropdown({ data, setData, list }) {
  const [isActive, setIsActive] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  //   console.log(data[0].category);

  //카테고리 필터기능
  let filterResult = item => {
    let result = data.filter(fakeData => fakeData.category == item);
    setData(result);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        {list}
        <FaAngleDown className="dropIcon" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item" onClick={() => filterResult('food')}>
            음식
          </div>
          <div className="dropdown-item" onClick={() => filterResult('goods')}>
            생활용품
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
