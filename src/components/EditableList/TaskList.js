/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Input from "@material-ui/core/Input";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Modal } from "reactstrap";
import {
  EditTooltip,
  DeleteTooltip,
  AddTooltip,
} from "components/EditableList/ListTools.js";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

const defaultFocus = {
  action: "",
  category: "",
  task: "",
  checked: false,
  id: "",
};

export default function TaskList(props) {
  const classes = useStyles();
  const { list, rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });

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

  // const [checked, setChecked] = React.useState([...props.checkedIndexes]);
  const handleToggle = (item) => {
    // TO FIX:
    const checkItem = { ...item };
    checkItem.checked = item.checked ? false : true;
    checkItem.action = "Edit";
    console.log("item task:", checkItem);
    onSave(checkItem);
    // const currentIndex = checked.indexOf(value);
    // const newChecked = [...checked];
    // if (currentIndex === -1) {
    //   newChecked.push(value);
    // } else {
    //   newChecked.splice(currentIndex, 1);
    // }
    // setChecked(newChecked);
  };

  const onSave = (saveItem) => {
    setModalLive(false);
    console.log("To save:", saveItem);
    const { action, category, task, checked, id } = saveItem;
    if (action === "Edit") {
      const reqBody = {
        category,
        task,
        checked,
        id,
      };
      saveEdit(reqBody);
    }
    if (action === "Add") {
      const reqBody = {
        category,
        task,
        checked,
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
                <Checkbox
                  // checked={checked.indexOf(value) !== -1}
                  checked={item.checked}
                  tabIndex={-1}
                  onClick={() => handleToggle(item)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.root,
                  }}
                />
              </TableCell>
              <TableCell className={tableCellClasses}>{item.task}</TableCell>
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
            <GridItem xs={12} sm={12} md={8}>
              <CustomInput
                labelText="Task"
                id="task-input"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: focusItem.task,
                  onChange: (e) => {
                    setFocusItem((prev) => ({
                      ...prev,
                      task: e.target.value,
                    }));
                  },
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Category"
                id="category-input"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: focusItem.category,
                  onChange: (e) => {
                    setFocusItem((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }));
                  },
                }}
              />
            </GridItem>
            {/* https://material-ui.com/components/selects/ */}
            {/* <GridItem xs={12} sm={12} md={2}>
              <CustomInput
                labelText="PoS"
                id="pos"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: focusItem.pos,
                  onChange: (e) => {
                    setFocusItem((prev) => ({
                      ...prev,
                      pos: e.target.value,
                    }));
                  },
                }}
              />
            </GridItem> */}
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
          <Button
            color="primary"
            type="button"
            onClick={() => onSave(focusItem)}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}

TaskList.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
