import AppHeader from '../components/AppHeader';

const AppLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/bg.png')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <AppHeader />
      <div
        className="px-4 py-8 md:py-4 w-full mx-auto"
        style={{ maxWidth: '1600px' }}
      >
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
