/* eslint-disable react/prop-types */
import React, { useEffect, useState, Fragment } from "react";

import Table from "components/Table/Table.js";

const PossessivePronounsTable = (props) => {
  const { nom, acc, dat } = props.infl;
  const [pronouns, setPronouns] = useState([]);

  // const nomInfl = <span style={{ color: "red" }}>{nom}</span>;
  const accInfl = <span style={{ color: "red" }}>{acc}</span>;
  const datInfl = <span style={{ color: "red" }}>{dat}</span>;

  // const getInfl = (pCase) => {
  //   return <span style={{ color: "red" }}>{pCase}</span>;
  // };

  const pronounStems = [
    {
      label: "1s",
      pronoun: "mein",
    },
    {
      label: "2s",
      pronoun: "dein",
    },
    {
      label: "M",
      pronoun: "sein",
    },
    {
      label: "F",
      pronoun: "ihr",
    },
    {
      label: "N",
      pronoun: "sein",
    },
    {
      label: "1p",
      pronoun: "uns",
    },
    {
      label: "2p",
      pronoun: "eur",
    },
    {
      label: "3p",
      pronoun: "ihr",
    },
    {
      label: "*",
      pronoun: "Ihr",
    },
  ];

  // const pronouns = ["mein, dein, sein, ihr, sin, uns, eur, ihr, Ihr"];
  const pronounData = () => {
    const pronounArray = [];
    pronounStems.map((pro) => {
      const array = [];
      const pronounNom = (
        <Fragment>
          <span>
            {pro.pronoun}
            <span style={{ color: "red" }}>{nom}</span>
          </span>
        </Fragment>
      );
      array.push(pro.label);
      array.push(pronounNom);
      array.push(`${pro.pronoun}${accInfl}`);
      array.push(`${pro.pronoun}${datInfl}`);
      pronounArray.push(array);
    });
    console.log("pronoun array", pronounArray);
    return pronounArray;
  };
  useEffect(() => {
    setPronouns(pronounData());
  }, []);

  return (
    <Table
      tableHeaderColor="primary"
      tableHead={["", "Nom", "Acc.", "Dat."]}
      tableData={[
        [
          "1s",
          // eslint-disable-next-line react/jsx-key
          <Fragment>
            <span>
              {pronounStems[0].pronoun}
              <span style={{ color: "red" }}>{nom}</span>
            </span>
          </Fragment>,
          pronouns,
        ],
      ]}
    />
    // [
    //   "1s",
    //   `mein${getInfl(nom)}`,
    //   `mein${getInfl(dat)}`,
    //   `mein${getInfl(acc)}`,
    // ],
    // [
    //   "2s",
    //   `mein${getInfl(nom)}`,
    //   `mein${getInfl(dat)}`,
    //   `mein${getInfl(acc)}`,
    // ],
    // [
    //   "M",
    //   `mein${getInfl(nom)}`,
    //   `mein${getInfl(dat)}`,
    //   `mein${getInfl(acc)}`,
    // ],
    // [
    //   "F",
    //   `mein${getInfl(nom)}`,
    //   `mein${getInfl(dat)}`,
    //   `mein${getInfl(acc)}`,
    // ],
    // [
    //   "",
    //   `mein${getInfl(nom)}`,
    //   `mein${getInfl(dat)}`,
    //   `mein${getInfl(acc)}`,
    // ],
    // [
    //   "N",
    //   `mein${getInfl(nom)}`,
    //   `mein${getInfl(dat)}`,
    //   `mein${getInfl(acc)}`,
    // ],
    // ["2s", "du", "dich", "dir"],
    // ["M", "ser", "ihn", "ihm"],
    // ["F", "sie", "sie", "irh"],
    // ["N", "es", "es", "ihm"],
    // ["1p", "wir", "uns", "uns"],
    // ["2p", "ihr", "euch", "euch"],
    // ["3p", "sie", "sie", "ihnen"],
    // ["*", "Sie", "Sie", "Ihnen"],
    // ]}
  );
};

export default PossessivePronounsTable;
