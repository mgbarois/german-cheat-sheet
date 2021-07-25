import React, { useState, useEffect } from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
import Code from "@material-ui/icons/Code";
import Add from "@material-ui/icons/Add";
import Translate from "@material-ui/icons/Translate";
import ListAlt from "@material-ui/icons/ListAlt";
import Search from "@material-ui/icons/Search";
import Edit from "@material-ui/icons/Edit";
import FolderSpecial from "@material-ui/icons/FolderSpecial";
import Forum from "@material-ui/icons/Forum";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import EditableList from "components/EditableList/EditableList.js";

// import { website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { CheckBox } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [vocabCount, setVocabCount] = useState(0);
  const [lookupCount, setLookupCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [resourceCount, setResourceCount] = useState(0);

  const getVocabCount = () => {
    fetch("https://cryptic-reef-33427.herokuapp.com/vocab")
      .then((resp) => resp.json())
      .then((data) => setVocabCount(data === "Error" ? 0 : data.length))
      .catch((err) => console.log(err));
  };

  const getLookupCount = () => {
    fetch("https://cryptic-reef-33427.herokuapp.com/lookup")
      .then((resp) => resp.json())
      .then((data) => setLookupCount(data === "Error" ? 0 : data.length))
      .catch((err) => console.log(err));
  };

  const getResourceCount = () => {
    fetch("https://cryptic-reef-33427.herokuapp.com/resource")
      .then((resp) => resp.json())
      .then((data) => setResourceCount(data === "Error" ? 0 : data.length))
      .catch((err) => console.log(err));
  };

  const getTaskCount = () => {
    fetch("https://cryptic-reef-33427.herokuapp.com/task")
      .then((resp) => resp.json())
      .then((data) => setTaskCount(data === "Error" ? 0 : data.length))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVocabCount();
    getLookupCount();
    getTaskCount();
    getResourceCount();
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                {/* <Icon>content_copy</Icon> */}
                <ListAlt />
              </CardIcon>
              <p className={classes.cardCategory}>Vocab Items</p>
              <h3 className={classes.cardTitle}>{vocabCount}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Add />
                <a
                  href="/admin/vocabulary"
                  // onClick={(e) => e.preventDefault()}
                >
                  Add vocab
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Translate />
              </CardIcon>
              <p className={classes.cardCategory}>Translations</p>
              <h3 className={classes.cardTitle}>{lookupCount}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Search />
                <a href="/admin/vocabulary">Look up more words</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <CheckBox />
              </CardIcon>
              <p className={classes.cardCategory}>Tasks</p>
              <h3 className={classes.cardTitle}>{taskCount}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Edit />
                <a href="#dashboard-tasks">Edit tasks</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <FolderSpecial />
              </CardIcon>
              <p className={classes.cardCategory}>Resources</p>
              <h3 className={classes.cardTitle}>{resourceCount}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Add />
                <a href="#dashboard-resources">Add resources</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer> */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <h4 id="dashboard-tasks">Tasks</h4>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Vocab",
                tabIcon: ListAlt,
                tabContent: <EditableList itemType="Task" category="vocab" />,
              },
              {
                tabName: "Grammar",
                tabIcon: Code,
                tabContent: <EditableList itemType="Task" category="grammar" />,
              },
              {
                tabName: "Practice",
                tabIcon: Forum,
                tabContent: (
                  <EditableList itemType="Task" category="practice" />
                ),
                // <Tasks
                //   checkedIndexes={[0]}
                //   tasksIndexes={[0, 1, 2]}
                //   tasks={website}
                // />
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <h4 id="dashboard-resources">Resources</h4>
          <Card id="dashboard-resources">
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Useful Resources</h4>
              <p className={classes.cardCategoryWhite}>
                Online Resources for learning German.
              </p>
            </CardHeader>
            <CardBody>
              <EditableList itemType="Resource" />
              {/* <Table
                tableHeaderColor="warning"
                tableData={[
                  [
                    // eslint-disable-next-line react/jsx-key
                    <a href="https://germanwordoftheday.de/printable-german-grammar-cheatsheet-for-beginners/">
                      Printable German grammar cheat sheet for beginners
                    </a>,
                  ],
                  [
                    // eslint-disable-next-line react/jsx-key
                    <a href="https://www.fluentu.com/blog/german/learn-german-in-berlin/">
                      6 Brilliant Ways to Learn German in Berlin
                    </a>,
                  ],
                  [
                    // eslint-disable-next-line react/jsx-key
                    <a href="https://www.sprachsalon-berlin.de/">
                      SprachSalon Berlin | German Courses
                    </a>,
                  ],
                ]}
              /> */}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
