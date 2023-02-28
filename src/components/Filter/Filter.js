import React from "react";
import PropTypes from "prop-types";
import styles from "../Form.module.css"

const Filter = ({ value, onChangeFilter }) => (
    <label className={styles.label}>Find contact by name
    <input
      className={styles.input}
            type="text"
            value={value}
            onChange={onChangeFilter} />
    </label>
);
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};