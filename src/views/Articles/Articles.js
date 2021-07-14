import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "@material-ui/core/Table";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Articles() {
  const classes = useStyles();

  useEffect(() => {
    console.log(defPronounArray);
  }, []);

  const infl = {
    color: "purple",
    fontWeight: "bold",
  };

  const defPronounEndings = [
    {
      label: "Masc.",
      nom: "er",
      acc: "en",
      dat: "em",
    },
    {
      label: "Fem.",
      nom: "ie",
      acc: "ie",
      dat: "er",
    },
    {
      label: "Fem.",
      nom: "as",
      acc: "as",
      dat: "em",
    },
    {
      label: "Fem.",
      nom: "ie",
      acc: "ie",
      dat: "en",
    },
  ];

  const defPronounArray = defPronounEndings.map((ending, i) => {
    return [
      ending.label,
      // eslint-disable-next-line react/jsx-key
      <span key={i}>
        d<span style={infl}>{ending.nom}</span>
      </span>,
      // eslint-disable-next-line react/jsx-key
      <span key={i}>
        d<span style={infl}>{ending.acc}</span>
      </span>,
      // eslint-disable-next-line react/jsx-key
      <span key={i}>
        d<span style={infl}>{ending.dat}</span>
      </span>,
    ];
  });

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Definite</h4>
            <p className={classes.cardCategoryWhite}>Articles</p>
          </CardHeader>
          <CardBody>
            {/* <Table
              tableHeaderColor="primary"
              tableHead={["", "Nom", "Acc.", "Dat."]}
              tableData={defPronounArray}
            /> */}
            <Table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Nom.</th>
                  <th>Acc.</th>
                  <th>Dat.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Masc.</td>
                  <td>der</td>
                  <td>
                    de<span className="infl">n</span>
                  </td>
                  <td>
                    de<span className="infl">m</span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Fem.</td>
                  <td>die</td>
                  <td>die</td>
                  <td>
                    de<span className="infl">r</span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Neut.</td>
                  <td>das</td>
                  <td>das</td>
                  <td>
                    de<span className="infl">m</span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Plur.</td>
                  <td>die</td>
                  <td>die</td>
                  <td>
                    de<span className="infl">n</span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Indefinite</h4>
            <p className={classes.cardCategoryWhite}>Articles</p>
          </CardHeader>
          <CardBody>
            <Table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Nom.</th>
                  <th>Acc.</th>
                  <th>Dat.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Masc.</td>
                  <td>ein</td>
                  <td>
                    ein<span className="infl">en</span>
                  </td>
                  <td>
                    ein<span className="infl">em</span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Fem.</td>
                  <td>
                    ein<span className="infl">e</span>
                  </td>
                  <td>
                    ein<span className="infl">e</span>
                  </td>
                  <td>
                    ein<span className="infl">er</span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Neut.</td>
                  <td>ein</td>
                  <td>
                    ein<span className="infl">es</span>
                  </td>
                  <td>
                    ein<span className="infl">em</span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>Plur.</td>
                  <td>
                    ein<span className="infl">e</span>
                  </td>
                  <td>
                    ein<span className="infl">e</span>
                  </td>
                  <td>
                    ein<span className="infl">en</span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
