import React, { useEffect, useState } from 'react'
import TenantApi from '../../../api/services/TenantApi';
import Table from '../../../components/Table';
import Authenticated from '../../../Layout/Authenticated';

function Tenant() {
  const [tenants, setTenant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    new TenantApi().getTenants().then((res) => {
      const data = res.data.data;
      setTenant(data);
      setIsLoading(false);
    });

  }, []);

  return (
    <Authenticated>
      <div className="font-bold text-[32px] py-[32px]">
        Tenant
      </div>
      {!isLoading ? (
        <Table
          isCreate="true"
          route="/admin/tenant"
          data={tenants}
          columns={[
            { field: "id", label: "id" },
            { field: "username", label: "username" },
            { field: "phone", label: "phone" },
            { field: "createdAt", label: "createdAt" },
            { field: "updatedAt", label: "updatedAt" },
          ]} />
      ) : <div>Loading...</div>}

    </Authenticated>
  )
}

export default Tenant