const AppBreadcrumb = () => {
  return (
    <div className="flex w-full justify-center items-center bg-dark-blue-700">
      <div
        className="flex w-full items-center px-0 md:px-10 pl-4 py-3"
        style={{ maxWidth: '1280px' }}
      >
        <span className="text-white">
          <span className="underline">หน้าแรก</span>
          <span className="mx-2">/</span>
          <strong>ค้นหา</strong>
        </span>
      </div>
    </div>
  );
};

export default AppBreadcrumb;
