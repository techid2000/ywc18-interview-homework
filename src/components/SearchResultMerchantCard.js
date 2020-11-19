const { Tag, Divider } = require('antd');

const SearchResultMerchantCard = ({ merchant }) => {
  const {
    shopNameTH,
    categoryName,
    subcategory,
    coverImageId,
    facilities,
    priceLevel,
    isOpen,
    highlightText,
    recommendedItems,
    addressProvinceName,
    addressDistrictName,
  } = merchant;

  const getIsOpenViewMeta = (isOpen) => {
    if (isOpen === 'Y') {
      return {
        statusText: 'เปิดอยู่',
        tagColor: '#1BC300',
        visible: true,
      };
    }
    if (isOpen === 'N') {
      return {
        statusText: 'ปิดแล้ว',
        tagColor: '#A1A1A1',
        visible: true,
      };
    }
    // N/A
    return {
      visible: false,
    };
  };

  const getFacilityViewMeta = (facility) => {
    if (facility === 'ที่จอดรถ') {
      return { visible: true, iconUrl: '/car-park.png' };
    }
    if (facility === 'สามารถนำสัตว์เลี้ยงเข้าได้') {
      return { visible: true, iconUrl: '/allow-pet.png' };
    }
    if (facility === 'รับจองล่วงหน้า') {
      return { visible: true, iconUrl: '/allow-book.png' };
    }
    return {
      visible: false,
    };
  };

  const getRecommendedItemsViewMeta = (categoryName, recommendedItems) => {
    const viewMeta = {
      recommendText: '',
      recommendedItems: '',
    };

    if (categoryName === 'ร้านอาหาร') {
      viewMeta.recommendText = 'เมนูแนะนำ';
    } else {
      viewMeta.recommendText = 'สินค้าแนะนำ';
    }

    for (const [index, item] of recommendedItems.entries()) {
      if (index === 0) {
        viewMeta.recommendedItems += item;
      } else {
        viewMeta.recommendedItems += `, ${item}`;
      }
    }

    return viewMeta;
  };

  const isOpenViewMeta = getIsOpenViewMeta(isOpen);
  const recommendedItemsViewMeta = getRecommendedItemsViewMeta(
    categoryName,
    recommendedItems
  );

  return (
    <div className="lg:flex items-stretch border shadow-sm bg-white">
      <div className="img-holder">
        <div className="img h-full flex-shrink-0" />
      </div>
      <div className="p-4 w-full break-all">
        <div className="flex items-center text-xl font-semibold">
          {shopNameTH}
          {isOpenViewMeta.visible && (
            <Tag color={isOpenViewMeta.tagColor} className="ml-4">
              {isOpenViewMeta.statusText}
            </Tag>
          )}
        </div>
        <div className="flex flex-wrap text-sm font-normal text-ash-400">
          <span>{subcategory ?? categoryName}</span>
          <span className="mx-3">|</span>
          <span>
            {[1, 2, 3, 4].map((level) => (
              <span
                key={level}
                className={level <= priceLevel ? 'text-black' : ''}
              >
                ฿
              </span>
            ))}
          </span>
          <span className="mx-3">|</span>
          <span>{`${addressDistrictName} ${addressProvinceName}`}</span>
        </div>
        <div style={{ width: '65%' }}>
          <Divider />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: highlightText }}
          className="text-sm font-normal text-ash-400 mb-2"
        />
        <div className="text-sm font-normal text-ash-400 mb-2">
          <span className="text-black">{`${recommendedItemsViewMeta.recommendText}: `}</span>
          <span>{recommendedItemsViewMeta.recommendedItems}</span>
        </div>
        <div className="flex items-center mt-4">
          {facilities.map((facility) => {
            const facilityMeta = getFacilityViewMeta(facility);
            return (
              <div
                key={facility}
                style={{ padding: '5px' }}
                className="rounded-full border border-lime-600 mr-2"
              >
                <img
                  src={facilityMeta.iconUrl}
                  style={{ width: '18px', height: '18px' }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .img-holder {
            padding: 5px;
          }
        }

        .img {
          width: 100%;
          min-height: 225px;
          background-image: url('${coverImageId}');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }
        @media (min-width: 1024px) {
          .img {
            width: 240px;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchResultMerchantCard;
