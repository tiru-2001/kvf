import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../components';
import './parent.scss';
const Parent = () => {
  return (
    <section className="parent">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Parent;
