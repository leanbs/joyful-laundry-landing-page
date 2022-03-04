import { ReactNode } from 'react';
import Announcement from '../Announcement';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Announcement />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
