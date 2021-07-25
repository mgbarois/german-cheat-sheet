import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Input from "@material-ui/core/Input";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Modal } from "reactstrap";

// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
import Button from "components/CustomButtons/Button.js";

// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

import "./VocabList.scss";

const useStyles = makeStyles(styles);

const defaultFocus = {
  action: "",
  word_de: "",
  word_en: "",
  pos: "",
  id: "",
};

export default function VocabList(props) {
  const classes = useStyles();
  const [modalLive, setModalLive] = useState(false);
  const [focusVocabItem, setFocusVocabItem] = useState(defaultFocus);
  // const [editDe, setEditDe] = useState("");
  // const [editEn, setEditEn] = useState("");
  // const [editPos, setEditPos] = useState("");
  // const [editId, setEditId] = useState("");
  const [vocab, setVocab] = useState([]);
  const { rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });

  const refreshVocab = () => {
    fetch("https://cryptic-reef-33427.herokuapp.com/vocab")
      .then((resp) => resp.json())
      .then((data) => setVocab(data))
      .then(console.log(vocab))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshVocab();
  }, []);

  const onVocabEdit = (vocabItem) => {
    console.log("To edit:", vocabItem);
    // setEditDe(vocabItem.de_word);
    // setEditEn(vocabItem.en_word);
    // setEditPos(vocabItem.pos);
    // setEditId(vocabItem.id);
    vocabItem.action = "Edit";
    setFocusVocabItem(vocabItem);
    console.log("focus vocab item:", focusVocabItem);
    //this.setState(Object.assign(this.state.user, { entries: count }));
    setModalLive(true);
  };

  const onVocabDelete = (vocabItem) => {
    fetch("https://cryptic-reef-33427.herokuapp.com/deleteVocab", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: vocabItem.id,
      }),
    })
      .then((resp) => resp.json())
      .then(console.log)
      .then(() => refreshVocab())
      .catch((err) => console.log(err));
  };

  const onVocabAdd = () => {
    const cleanFocus = defaultFocus;
    cleanFocus.action = "Add";
    console.log(cleanFocus);
    setFocusVocabItem(cleanFocus);
    setModalLive(true);
  };

  const onSave = () => {
    setModalLive(false);
    console.log("To save:", focusVocabItem);
    const { action, id, de_word, en_word, pos } = focusVocabItem;
    if (action === "Edit") {
      fetch("https://cryptic-reef-33427.herokuapp.com/editVocab", {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          de_word,
          en_word,
          pos,
          id,
        }),
      })
        .then((resp) => resp.json())
        .then(console.log)
        .then(() => refreshVocab())
        .catch((err) => console.log(err));
    }
    if (action === "Add") {
      fetch("https://cryptic-reef-33427.herokuapp.com/addVocab", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          de_word,
          en_word,
          pos,
        }),
      })
        .then((resp) => resp.json())
        .then(console.log)
        .then(() => refreshVocab())
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>German</TableCell>
            <TableCell>English</TableCell>
            <TableCell>PoS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vocab.map((item) => (
            <TableRow key={item.id} className={classes.tableRow}>
              <TableCell className={tableCellClasses}>{item.de_word}</TableCell>
              <TableCell className={tableCellClasses}>{item.en_word}</TableCell>
              <TableCell className={tableCellClasses}>{item.pos}</TableCell>
              <TableCell className={classes.tableActions}>
                <Tooltip
                  id="tooltip-top"
                  title="Edit Task"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Edit"
                    className={classes.tableActionButton}
                    onClick={() => onVocabEdit(item)}
                  >
                    <Edit
                      className={
                        classes.tableActionButtonIcon + " " + classes.edit
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  id="tooltip-top-start"
                  title="Remove"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Close"
                    className={classes.tableActionButton}
                    onClick={() => onVocabDelete(item)}
                  >
                    <Close
                      className={
                        classes.tableActionButtonIcon + " " + classes.close
                      }
                    />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Tooltip
        id="tooltip-top-start"
        title="Add"
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
        <IconButton
          aria-label="Add"
          className={classes.tableActionButton}
          onClick={onVocabAdd}
        >
          <Add className={classes.tableActionButtonIcon + " " + classes.add} />
        </IconButton>
      </Tooltip>
      <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            {focusVocabItem.action} vocab item.
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalLive(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <GridContainer>
            <GridItem xs={12} sm={12} md={5}>
              <CustomInput
                labelText="German word"
                id="de-word"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: focusVocabItem.de_word,
                  onChange: (e) => {
                    setFocusVocabItem((prev) => ({
                      ...prev,
                      de_word: e.target.value,
                    }));
                  },
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <CustomInput
                labelText="English Word"
                id="en-word"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: focusVocabItem.en_word,
                  onChange: (e) => {
                    setFocusVocabItem((prev) => ({
                      ...prev,
                      en_word: e.target.value,
                    }));
                  },
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              {/* https://material-ui.com/components/selects/ */}
              <CustomInput
                labelText="PoS"
                id="pos"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: focusVocabItem.pos,
                  onChange: (e) => {
                    setFocusVocabItem((prev) => ({
                      ...prev,
                      pos: e.target.value,
                    }));
                  },
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalLive(false)}
          >
            Close
          </Button>
          <Button color="primary" type="button" onClick={onSave}>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}

VocabList.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
