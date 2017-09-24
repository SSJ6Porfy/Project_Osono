import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashPageContainer from "./splash_page/splash_page_container";
import OsonoviewContainer from "./osonoview/osonoview_container";
import TaskDetailContainer from "./tasks/task_detail_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={SplashPageContainer} />
    <ProtectedRoute path="/osonoview" component={OsonoviewContainer}/>
    <ProtectedRoute path="/task/:taskId" component={TaskDetailContainer}/>
  </div>
);

export default App;

{/* <Route path="/tasks/:task_id" component={TaskItemContainer}/> */}

// export default ({store}) => {
//   return (
//     <Provider
//     store={store}>
//       <Router
//       history={hashHistory}>
//         <Route
//         path="/"
//         component={App}>
//           <IndexRoute onEnter={_redirectFromRoot(store)}/>
//           <Route
//           onEnter={_redirectIfLoggedIn(store)}
//           path="/login"
//           component={SessionFormContainer} />
//
//           <Route
//           onEnter={_redirectIfLoggedIn(store)}
//           path="/signup"
//           component={SessionFormContainer} />
//
//           <Route
//             path="/login/:team_hash"
//             component={SessionFormContainer} />
//
//           <Route
//           path="/dashboard"
//           onEnter={_redirectIfLoggedOut(store)}
//           component={DashboardContainer}>
//             <IndexRoute component={AssignedTasksContainer} />
//
//             <Route path="teams/new"
//             edit={false}
//             component={TeamsFormContainer}/>
//
//             <Route path="teams/edit"
//             onEnter={_redirectIfNoTeam(store)}
//             edit={true}
//             component={TeamsFormContainer}>
//               <Route path="team_members"
//               component={TeamMemberFormContainer} />
//             </Route>
//
//             <Route path="team_members/edit"
//             component={TeamMemberFormContainer}>
//             </Route>
//
//             <Route
//               path="project"
//               component={ProjectsDetailContainer}>
//             </Route>
//
//             <Route
//               path="task/:taskId"
//               component={ProjectsDetailContainer}>
//             </Route>
//
//             <Route
//               path="project/edit"
//               edit={true}
//               component={ProjectFormContainer} />
//
//             <Route
//               path="project/new"
//               component={ProjectFormContainer} />
//
//           </Route>
//         </Route>
//       </Router>
//     </Provider>
//   )
// }
