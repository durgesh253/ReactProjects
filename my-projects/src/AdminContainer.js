import React, { lazy, Suspense } from 'react';
import AdminUser from './AdminUser';

function AdminContainer() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <AdminUser />
  </Suspense>
  )
}

export default AdminContainer
