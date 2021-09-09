import './App.css';
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import Search from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import routes from './routes';
import componentStyles from "./assets/theme/layouts/admin.js";
import Sidebar from './components/Sidebar/Sidebar.js'
import AdminNavbar from "./components/Dropdowns/NavbarDropdown.js";
import AdminFooter from "./components/Footers/AdminFooter.js";
import NavbarDropdown from "./components/Dropdowns/NavbarDropdown.js";
import { useEffect } from 'react';
function App() {
  const useStyles = makeStyles(componentStyles);
  const classes = useStyles();
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  useEffect(()=>{
   
  },[])
  return (
    <div>
      <Sidebar
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: "https://myjurni.org/wp-content/uploads/2021/05/Jurni-Logo1.png",
            imgAlt: "...",
          }}
          dropdown={<NavbarDropdown />}
          input={
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-search-responsive">
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-search-responsive"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <Box
                      component={Search}
                      width="1.25rem!important"
                      height="1.25rem!important"
                    />
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          }
        />
        <Box position="relative" className={classes.mainContent}>
          <AdminNavbar brandText={"getBrandText(location.pathname)"} />
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/admin/index" />
          </Switch>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <AdminFooter />
          </Container>
        </Box>
    </div>
  );
}

export default App;
