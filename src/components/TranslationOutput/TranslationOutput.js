/* eslint-disable react/prop-types */
import React from "react";

import Table from "components/Table/Table.js";

const TranslationOutput = ({ output, langs }) => {
  console.log("Formatting translation output");
  if (output.length === 0) {
    return "";
  } else if (output[0] === "error") {
    return (
      <p variant="error">
        Sorry, no translation found. Make sure to enter a valid{" "}
        {langs.sourceLang} word.
      </p>
    );
  }
  return (
    <div id="translation-table" className="table-responsive">
      <Table
        tableHeaderColor="primary"
        tableHead={["Translation", "Synonyms", "PoS"]}
        tableData={[
          [
            output[0][`l${langs.textLangCode}_text`],
            output[0][`synonyme${langs.synLangCode}`],
            output[0]["wortart"],
          ],
        ]}
      />
    </div>
  );
};

export default TranslationOutput;
