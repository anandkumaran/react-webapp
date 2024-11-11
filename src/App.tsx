import Blogs from 'components/blogs';
import HomePage from 'components/home';
import Layout from 'components/Layout';
import Contact from 'contact';
import NoPage from 'nopage';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const MyApp = () => {
  const [sharedValue, setSharedValue] = useState('Initial Value');

  return (
    <Routes>
      <Route path="/" element={<Layout value={sharedValue}/>}>
        <Route index element={<HomePage value={sharedValue} setValue={setSharedValue} />} />
        <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default MyApp