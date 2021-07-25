import React from "react";
import { useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import SwapHoriz from "@material-ui/icons/SwapHoriz";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
// import VocabList from "components/VocabList/VocabList.js";
import EditableList from "components/EditableList/EditableList.js";
import TranslationOutput from "components/TranslationOutput/TranslationOutput.js";
import "./Vocabulary.scss";
// import { updateConstructSignature } from "typescript";

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

export default function Vocabulary() {
  const [translDir, setTranslDir] = useState("de-en");
  const [translInput, setTranslInput] = useState("");
  const [translOutput, setTranslOutput] = useState([]);

  const classes = useStyles();

  const updateLookupCount = (inputWord) => {
    fetch("https://cryptic-reef-33427.herokuapp.com/addLookup", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ inputWord }),
    })
      .then((resp) => resp.json())
      // .then((data) => {
      //   console.log(data);
      // })
      .catch((err) => console.log(err));
  };

  const fetchTranslation = (inputWord) => {
    // console.log("Fetching translation for: ", inputWord);
    fetch(
      `https://petapro-translate-v1.p.rapidapi.com/?query=${inputWord}&langpair=${translDir}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
          "x-rapidapi-host": "petapro-translate-v1.p.rapidapi.com",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTranslOutput(data.slice(0, 2));
        // console.log(data);
        updateLookupCount();
      })
      .catch((err) => {
        console.error(err);
        setTranslOutput(["error"]);
      });
  };

  const onSwitchLangDir = () => {
    setTranslDir(translDir === "de-en" ? "en-de" : "de-en");
    setTranslInput("");
    setTranslOutput([]);
  };

  const onInputChange = (e) => {
    setTranslInput(e.target.value);
    setTranslOutput([]);
  };

  const onInputSubmit = () => {
    // console.log("Submitting german word");
    const germanWord = translInput;
    // console.log("Word: ", germanWord);
    fetchTranslation(germanWord);
  };

  const langs =
    translDir === "de-en"
      ? {
          textLangCode: 2,
          synLangCode: 1,
          sourceLang: "German",
          targLang: "English",
          article: "a",
        }
      : {
          textLangCode: 1,
          synLangCode: 2,
          sourceLang: "English",
          targLang: "German",
          article: "an",
        };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Vocabulary List</h4>
            <p className={classes.cardCategoryWhite}>
              Manage your own vocabulary list here.
            </p>
          </CardHeader>
          <CardBody>
            <EditableList itemType="Vocab" />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Dictionary Translation</h4>
            <p className={classes.cardCategoryWhite}>
              Translate single words from English to German, or vice-versa.
            </p>
          </CardHeader>
          <CardBody>
            <div className="translation-pane">
              <p>
                {langs.sourceLang}
                <Button
                  id="lang-switcher"
                  variant="light"
                  onClick={onSwitchLangDir}
                >
                  <SwapHoriz />
                </Button>
                {langs.targLang}
              </p>
              <input
                id="translation-input"
                type="text"
                placeholder={`Enter ${langs.article} ${langs.sourceLang} word`}
                onChange={onInputChange}
                value={translInput}
              />
              <Button
                id="translation-button"
                variant="info"
                onClick={onInputSubmit}
              >
                Translate
              </Button>
              <TranslationOutput output={translOutput} langs={langs} />
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
