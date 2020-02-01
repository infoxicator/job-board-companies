import React from 'react';
import { Link } from '@americanexpress/one-app-router';

const renderCompany = (company) => (
  <li className="media" key={company.id}>
    <div className="media-content">
      <Link to={`/companies/${company.id}`}>
        {company.name}
      </Link>
    </div>
  </li>
);

const CompanyList = ({ companies }) => (
  <ul className="box">
    {companies.map(renderCompany)}
  </ul>
);

export default CompanyList;
