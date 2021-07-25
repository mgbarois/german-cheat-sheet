/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @material-ui/core components

import VocabList from "components/EditableList/VocabList.js";
import TaskList from "components/EditableList/TaskList.js";
import ResourceList from "components/EditableList/ResourceList.js";

// import Input from "@material-ui/core/Input";

// @material-ui/icons

// core components

export default function EditableList(props) {
  const [list, setList] = useState([]);
  const [modalLive, setModalLive] = useState(false);
  const [focusItem, setFocusItem] = useState({});
  const itemType = props.itemType.toLowerCase();
  const category = props.category === undefined ? "" : "/" + props.category;

  const refreshList = () => {
    // console.log("category:", category);
    fetch(`https://cryptic-reef-33427.herokuapp.com/${itemType}${category}`)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log("current list:", itemType, data);
        setList(data);
      })
      // .then(console.log("LIST:", list))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshList();
  }, []);

  const onItemEdit = (item, openModal) => {
    // console.log("To edit:", item);
    item.action = "Edit";
    setFocusItem(item);
    if (openModal) {
      setModalLive(true);
    }
  };

  const onItemDelete = (item) => {
    fetch(`https://cryptic-reef-33427.herokuapp.com/delete${itemType}`, {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: item.id,
      }),
    })
      .then((resp) => resp.json())
      // .then(console.log)
      .then(() => refreshList())
      .catch((err) => console.log(err));
  };

  const onItemAdd = (defaultFocus) => {
    const cleanFocus = defaultFocus;
    cleanFocus.action = "Add";
    // console.log(cleanFocus);
    setFocusItem(cleanFocus);
    setModalLive(true);
  };

  const saveEdit = (reqBody) => {
    fetch(`https://cryptic-reef-33427.herokuapp.com/edit${itemType}`, {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(reqBody),
    })
      .then((resp) => resp.json())
      // .then(console.log)
      .then(() => refreshList())
      .catch((err) => console.log(err));
  };

  const saveAdd = (reqBody) => {
    fetch(`https://cryptic-reef-33427.herokuapp.com/add${itemType}`, {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(reqBody),
    })
      .then((resp) => resp.json())
      // .then(console.log)
      .then(() => refreshList())
      .catch((err) => console.log(err));
  };

  const editFunctions = {
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
  };

  const listType =
    props.itemType === "Vocab" ? (
      <VocabList list={list} editFunctions={editFunctions} />
    ) : props.itemType === "Task" ? (
      <TaskList list={list} editFunctions={editFunctions} />
    ) : (
      <ResourceList list={list} editFunctions={editFunctions} />
    );

  // const listType =
  //   props.itemType === "Vocab" ? (
  //     <VocabList list={list} editFunctions={editFunctions} />
  //   ) : props.itemType === "Task" ? (
  //     <TaskList list={list} editFunctions={editFunctions} />
  //   ) : (
  //     <PrepList list={list} editFunctions={editFunctions} />
  //   );

  return <>{listType}</>;
}

EditableList.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
