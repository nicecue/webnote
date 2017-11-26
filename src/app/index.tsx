import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, Switch } from 'react-router';

import { App, List, New, View, Edit } from 'Containers';
import { RouterStore, MemoStore } from 'Stores';

import config from '../../config';

// 모든 @state는 @action 으로만 변경
useStrict(true);

// @store 생성
const history = createBrowserHistory({
  basename: config.baseRoutingPath,
});
const routerStore = new RouterStore(history);
const memoStore = new MemoStore();

// Render
ReactDOM.render(
    <Provider router={routerStore} memoStore={memoStore}>
        <App>
            <Router history={history} >
                <Switch>
                    <Route exact path="/" component={List} />
                    <Route path="/list" component={List} />
                    <Route path="/new" component={New} />
                    <Route path="/view/:memoId" component={View} />
                    <Route path="/edit/:memoId" component={Edit} />
                </Switch>
            </Router>
        </App>
    </Provider >,
    document.getElementById('root'),
);
