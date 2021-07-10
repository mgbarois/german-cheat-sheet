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
import DirectionsWalk from "@material-ui/icons/DirectionsWalk";
import Forum from "@material-ui/icons/Forum";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

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
  const [dictLookupCount, setDictLookupCount] = useState(0);
  const [prepCount, setPrepCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);

  const getVocabCount = () => {
    fetch("http://localhost:3001/vocab")
      .then((resp) => resp.json())
      .then((data) => setVocabCount(data === "Error" ? 0 : data.length))
      .then(console.log(vocabCount))
      .catch((err) => console.log(err));
  };

  const getDictLookupCount = () => {
    fetch("http://localhost:3001/dictLookups")
      .then((resp) => resp.json())
      .then((data) => setDictLookupCount(data === "Error" ? 0 : data.length))
      .then(console.log(dictLookupCount))
      .catch((err) => console.log(err));
  };

  const getprepCount = () => {
    fetch("http://localhost:3001/prepositions")
      .then((resp) => resp.json())
      .then((data) => setPrepCount(data === "Error" ? 0 : data.length))
      .then(console.log(prepCount))
      .catch((err) => console.log(err));
  };

  const getTaskCount = () => {
    fetch("http://localhost:3001/tasks")
      .then((resp) => resp.json())
      .then((data) => setTaskCount(data === "Error" ? 0 : data.length))
      .then(console.log(taskCount))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getVocabCount();
    getDictLookupCount();
    getprepCount();
    getTaskCount();
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
              <h3 className={classes.cardTitle}>{dictLookupCount}</h3>
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
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <DirectionsWalk />
              </CardIcon>
              <p className={classes.cardCategory}>Prepositions</p>
              <h3 className={classes.cardTitle}>{prepCount}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Add />
                <a href="/admin/prepositions">Add prepositions</a>
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
          <CustomTabs
            id="dashboard-tasks"
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Vocab",
                tabIcon: ListAlt,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 2]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Grammar",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Practice",
                tabIcon: Forum,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1, 2]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Useful Resources</h4>
              <p className={classes.cardCategoryWhite}>
                Online Resources for learning German.
              </p>
            </CardHeader>
            <CardBody>
              <Table
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
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
