const SearchResultMerchantCard = () => {
  return (
    <div className="lg:flex border img-holder">
      <div className="img" />
      <div className="p-4 text-xl font-semibold">ครัวบักเต</div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .img-holder {
            padding: 5px;
          }
        }

        .img {
          width: 100%;
          height: 224px;
          background-image: url('https://search-merchant.คนละครึ่ง.com/img/upload/9176fb9b-f493-4db8-ba19-174f6ed3a9ee/large');
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
