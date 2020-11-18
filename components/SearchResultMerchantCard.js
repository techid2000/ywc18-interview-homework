const { Tag, Divider } = require('antd');

const SearchResultMerchantCard = () => {
  const shopNameTH = 'ชื่อร้าน';
  const categoryName = 'ร้านอาหาร';
  const subcategory = 'ประเภทอาหาร 1 / ประเภทอาหาร 2';
  const coverImageURL =
    'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  const facilities = [
    'ที่จอดรถ',
    'รับจองล่วงหน้า',
    'สามารถนำสัตว์เลี้ยงเข้าได้',
  ];
  const priceLevel = 2;
  const isOpen = 'Y';
  const highlightHTML =
    '<strong>ร้านกาแฟสด</strong> ดริปเองโดยบาริสต้าชื่อดังระดับประเทศ';
  const recommendedItems = ['สินค้าแนะนำ1', 'สินค้าแนะนำ2'];
  const addressProvinceName = 'กรุงเทพมหานคร';
  const addressDistinctName = 'เขตปทุมวัน';

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
    <div className="lg:flex border img-holder">
      <div className="img flex-shrink-0" />
      <div className="p-4 w-full">
        <div className="flex items-center text-xl font-semibold">
          ครัวบักเต
          {isOpenViewMeta.visible && (
            <Tag color={isOpenViewMeta.tagColor} className="ml-4">
              {isOpenViewMeta.statusText}
            </Tag>
          )}
        </div>
        <div className="flex flex-wrap text-sm font-normal text-gray-500">
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
          <span>{`${addressDistinctName} ${addressProvinceName}`}</span>
        </div>
        <div style={{ width: '65%' }}>
          <Divider />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: highlightHTML }}
          className="text-sm font-normal text-gray-500 mb-2"
        />
        <div className="text-sm font-normal text-gray-500 mb-2">
          <span className="text-black">{`${recommendedItemsViewMeta.recommendText}: `}</span>
          <span>{recommendedItemsViewMeta.recommendedItems}</span>
        </div>
        <div className="flex items-center">
          {facilities.map((facility) => {
            const facilityMeta = getFacilityViewMeta(facility);
            return (
              <div
                key={facility}
                style={{ padding: '5px' }}
                className="rounded-full border border-green-500 mr-2"
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
          height: 224px;
          background-image: url('${coverImageURL}');
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
