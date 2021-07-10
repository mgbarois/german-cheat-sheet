/* eslint-disable react/prop-types */
import React from "react";

import CustomTabs from "components/CustomTabs/CustomTabs.js";

import PossessivePronounsTable from "./PossessivePronounsTable";
import "./PossessivePronouns.scss";

const PossessivePronouns = () => {
  const mascInflections = {
    nom: "",
    acc: "en",
    dat: "em",
  };
  const femInflections = {
    nom: "e",
    acc: "e",
    dat: "er",
  };
  const neutInflections = {
    nom: "e",
    acc: "e",
    dat: "er",
  };

  return (
    <CustomTabs
      title="Possessive Pronouns"
      headerColor="primary"
      tabs={[
        {
          tabName: "Masc",
          // tabIcon: BugReport,
          tabContent: <PossessivePronounsTable infl={mascInflections} />,
        },
        {
          tabName: "Fem",
          // tabIcon: Code,
          tabContent: <PossessivePronounsTable infl={femInflections} />,
        },
        {
          tabName: "Neut",
          // tabIcon: Cloud,
          tabContent: <PossessivePronounsTable infl={neutInflections} />,
        },
      ]}
    />
  );
};

export default PossessivePronouns;
