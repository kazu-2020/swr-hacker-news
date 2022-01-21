import Header from '@module/Header';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <>
    <Header />
    {children}
  </>
);

export default DefaultLayout;
