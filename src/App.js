import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Gaming from "./components/Gaming";
import Trending from "./components/Trending";
import SavedVideos from "./components/SavedVideos";
import NotFoundRoute from "./components/NotFoundRoute";
import VideoDetailsRoute from "./components/VideoDetailsRoute";

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
      <ProtectedRoute exact path="//videos/:id" component={VideoDetailsRoute} />
      <Route component={NotFoundRoute} />
    </Switch>
  </BrowserRouter>
);

export default App;
