import Image from 'next/image';

const AppBreadcrumb = () => {
  return (
    <div className="flex w-full justify-center items-center bg-dark-blue-600">
      <div
        className="flex w-full items-center px-0 md:px-10 pl-4 py-3"
        style={{ maxWidth: '1280px' }}
      >
        <span className="text-white">หน้าแรก / ค้นหา ไอสัส</span>
      </div>
    </div>
  );
};

export default AppBreadcrumb;
