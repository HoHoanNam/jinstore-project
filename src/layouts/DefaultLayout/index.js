import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
  return (
    <div className='app'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
