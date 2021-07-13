/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Input from "@material-ui/core/Input";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Modal } from "reactstrap";

// @material-ui/icons
import Button from "components/CustomButtons/Button.js";
import { EditTooltip, DeleteTooltip, AddTooltip } from "./ListTools.js";

// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

import "./VocabList.scss";

const useStyles = makeStyles(styles);

const defaultFocus = {
  name: "",
  link: "",
  id: "",
};

export default function VocabListTest(props) {
  const classes = useStyles();
  const list = props.list;
  const {
    itemType,
    onItemEdit,
    onItemDelete,
    onItemAdd,
    saveEdit,
    saveAdd,
    modalLive,
    setModalLive,
    focusItem,
    setFocusItem,
  } = props.editFunctions;

  useEffect(() => {
    console.log("Props.editFunctions", props.editFunctions);
    setFocusItem(defaultFocus);
  }, []);
  const { rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });

  const onSave = () => {
    setModalLive(false);
    console.log("To save:", focusItem);
    const { action, id, name, link } = focusItem;
    if (action === "Edit") {
      const reqBody = {
        name,
        link,
        id,
      };
      saveEdit(reqBody);
    }
    if (action === "Add") {
      const reqBody = {
        name,
        link,
      };
      saveAdd(reqBody);
    }
  };

  return (
    <>
      <Table className={classes.table}>
        <TableBody>
          {list.map((item, i) => (
            <TableRow key={i} className={classes.tableRow}>
              <TableCell className={tableCellClasses}>
                <a href={item.link}>{item.name}</a>
              </TableCell>
              <TableCell className={classes.tableActions}>
                <EditTooltip
                  classes={classes}
                  item={item}
                  onItemEdit={onItemEdit}
                />
                <DeleteTooltip
                  classes={classes}
                  item={item}
                  onItemDelete={onItemDelete}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddTooltip
        classes={classes}
        defaultFocus={defaultFocus}
        onItemAdd={onItemAdd}
      />
      <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            {focusItem.action} {itemType.toLowerCase()} item.
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
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Resource name"
                id="resource-name"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: focusItem.name,
                  onChange: (e) => {
                    setFocusItem((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  },
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Link"
                id="resource-link"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: focusItem.link,
                  onChange: (e) => {
                    setFocusItem((prev) => ({
                      ...prev,
                      link: e.target.value,
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

VocabListTest.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
