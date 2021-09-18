import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VisitorHeader from '../Header/VisitorHeader';
import TenantHeader from '../Header/TenantHeader';
import AdminHeader from '../Header/AdminHeader';

const RenderHeader = () => {
    const [Header, setHeader] = useState(VisitorHeader);
    const location = useLocation();
    useEffect(() => {
      if (location.pathname.includes('tenant')) {
        setHeader(TenantHeader);
      }
      //if a login specific header is desired it can be implemented here
      //  else if (location.pathname === '/login') {
      //   setHeader();
      // }
      //if more sections of the app need distinct headers add them here:
      
      else if (location.pathname.includes('admin')){
        setHeader(AdminHeader);
      }

      else {
          setHeader(VisitorHeader)
      }
    }, [location]);
    return (
      <div>
        <Header />
      </div>
    );
}

export default RenderHeader
