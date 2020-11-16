import AppHeader from '../components/AppHeader';

const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default AppLayout;
