import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import PropTypes from "prop-types";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";

const EditTooltip = ({ classes, item, onItemEdit }) => {
  return (
    <Tooltip
      id="tooltip-top"
      title="Edit Task"
      placement="top"
      classes={{ tooltip: classes.tooltip }}
    >
      <IconButton
        aria-label="Edit"
        className={classes.tableActionButton}
        onClick={() => onItemEdit(item, true)}
      >
        <Edit className={classes.tableActionButtonIcon + " " + classes.edit} />
      </IconButton>
    </Tooltip>
  );
};

const DeleteTooltip = ({ classes, item, onItemDelete }) => {
  return (
    <Tooltip
      id="tooltip-top-start"
      title="Remove"
      placement="top"
      classes={{ tooltip: classes.tooltip }}
    >
      <IconButton
        aria-label="Close"
        className={classes.tableActionButton}
        onClick={() => onItemDelete(item)}
      >
        <Close
          className={classes.tableActionButtonIcon + " " + classes.close}
        />
      </IconButton>
    </Tooltip>
  );
};

const AddTooltip = ({ classes, defaultFocus, onItemAdd }) => {
  return (
    <Tooltip
      id="tooltip-top-start"
      title="Add"
      placement="top"
      classes={{ tooltip: classes.tooltip }}
    >
      <IconButton
        aria-label="Add"
        className={classes.tableActionButton}
        onClick={() => onItemAdd(defaultFocus)}
      >
        <Add className={classes.tableActionButtonIcon + " " + classes.add} />
      </IconButton>
    </Tooltip>
  );
};

EditTooltip.propTypes = {
  classes: PropTypes.object,
  item: PropTypes.object,
  onItemEdit: PropTypes.func,
};

DeleteTooltip.propTypes = {
  classes: PropTypes.object,
  item: PropTypes.object,
  onItemDelete: PropTypes.func,
};

AddTooltip.propTypes = {
  classes: PropTypes.object,
  defaultFocus: PropTypes.object,
  onItemAdd: PropTypes.func,
};

export { EditTooltip, DeleteTooltip, AddTooltip };
