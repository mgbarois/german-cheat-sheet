/* eslint-disable react/prop-types */
import React from "react";

import Table from "components/Table/Table.js";

const PossessivePronounsTable = (props) => {
  const { nom, acc, dat } = props.infl;

  const infl = {
    color: "purple",
    fontWeight: "bold",
  };

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

  const pronounArray = pronounStems.map((stem) => {
    return [
      stem.label,
      // eslint-disable-next-line react/jsx-key
      <span>
        {stem.pronoun}
        <span style={infl}>{nom}</span>
      </span>,
      // eslint-disable-next-line react/jsx-key
      <span>
        {stem.pronoun}
        <span style={infl}>{acc}</span>
      </span>,
      // eslint-disable-next-line react/jsx-key
      <span>
        {stem.pronoun}
        <span style={infl}>{dat}</span>
      </span>,
    ];
  });

  return (
    <Table
      tableHeaderColor="primary"
      tableHead={["", "Nom", "Acc.", "Dat."]}
      tableData={pronounArray}
    />
  );
};

export default PossessivePronounsTable;
