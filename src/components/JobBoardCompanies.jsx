import React from 'react';
import { Route, IndexRoute } from '@americanexpress/one-app-router';
import csp from '../csp';
import CompanyDetail from './CompanyDetail';
import CompanyList from './CompanyList';
import { companies } from '../fake-data';

const JobBoardCompanies = ({ children }) => (
  <div>
    { children }
  </div>
);

const JobBoardCompanyList = () => (
  <div>
    <CompanyList companies={companies} />
  </div>
);

// Read about childRoutes: https://github.com/americanexpress/one-app#routing
JobBoardCompanies.childRoutes = () => ([
  <Route path="/companies" component={JobBoardCompanies}>
    <IndexRoute component={JobBoardCompanyList} />
    <Route path=":companyId" component={CompanyDetail} />
  </Route>,
]);

// Read about appConfig: https://github.com/americanexpress/one-app#appconfig
if (!global.BROWSER) {
  JobBoardCompanies.appConfig = {
    csp,
  };
}

export default JobBoardCompanies;
