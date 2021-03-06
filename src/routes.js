/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
import Translate from "@material-ui/icons/Translate";
import Description from "@material-ui/icons/Description";
import People from "@material-ui/icons/People";
import DirectionsWalk from "@material-ui/icons/DirectionsWalk";
import Attachment from "@material-ui/icons/Attachment";

// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
// import UserProfile from "views/UserProfile/UserProfile.js";
// import TableList from "views/TableList/TableList.js";
// import Typography from "views/Typography/Typography.js";
// import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import Vocabulary from "views/Vocabulary/Vocabulary.js";
import Articles from "views/Articles/Articles.js";
import Pronouns from "views/Pronouns/Pronouns.js";
import Adjectives from "views/Adjectives/Adjectives.js";
import Prepositions from "views/Prepositions/Prepositions.js";

// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "???????? ??????????????",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/vocabulary",
    name: "Vocabulary",
    icon: Translate,
    component: Vocabulary,
    layout: "/admin",
  },
  {
    path: "/articles",
    name: "Articles",
    icon: Description,
    component: Articles,
    layout: "/admin",
  },
  {
    path: "/pronouns",
    name: "Pronouns",
    icon: People,
    component: Pronouns,
    layout: "/admin",
  },
  {
    path: "/adjectives",
    name: "Adjectives",
    icon: Attachment,
    component: Adjectives,
    layout: "/admin",
  },
  {
    path: "/prepositions",
    name: "Prepositions",
    icon: DirectionsWalk,
    component: Prepositions,
    layout: "/admin",
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   rtlName: "?????? ???????????? ????????????????",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "?????????? ????????????",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "??????????",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "????????????",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "??????????",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "??????????????",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "???????????????? ???? ???????? ???? ????",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "???????????? ????????????????????",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
