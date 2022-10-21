import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header
        links={[
          {
            link: 'tel:+62856-9232-777',
            label: '+62856-9232-3330',
          },
        ]}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
