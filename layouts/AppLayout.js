import AppHeader from '../components/AppHeader';

const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <div
        className="px-4 py-8 md:py-4 w-full mx-auto"
        style={{ maxWidth: '1600px' }}
      >
        {children}
      </div>
    </>
  );
};

export default AppLayout;
