import React from 'react';
import './slugline.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './header/Header';
import IssuesList from './issues/issues_list';
import IssuePage from './issues/issues_page';
import { AuthProvider } from './auth/AuthProvider';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/">
                                HOME CONTENT
                            </Route>
                            <Route path="/issues/:issue_id">
                                <IssuePage />
                            </Route>
                            <Route path="/issues">
                                <IssuesList />
                            </Route>
                        </Switch>
                        <p>CONTENT</p>
                    </div>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
