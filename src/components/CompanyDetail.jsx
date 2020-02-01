import React, { useState } from 'react';
import { companies } from '../fake-data';

const CompanyDetail = ({ params }) => {
  const { companyId } = params;
  const [Company] = useState(companies.find((company) => company.id === companyId));
  return (
    <div>
      <h1 className="title">{Company.name}</h1>
      <div className="box">{Company.description}</div>
    </div>
  );
};

export default CompanyDetail;
