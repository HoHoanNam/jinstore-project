import { useState } from 'react';
import Navbar from '~/components/Navbar';
import Search from '~/components/Search';
import SubNavbar from '~/components/SubNavbar';
import Notification from '~/components/Notification';

function Header() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <Notification onClose={() => setShow(false)} />}
      <Navbar />
      <Search />
      <SubNavbar />
    </div>
  );
}

export default Header;
