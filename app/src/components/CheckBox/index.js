import React from 'react';
import PropTypes from 'prop-types';
import CheckMark from '../CheckMark';
import styles from './index.module.css';

export default function CheckBox({ checked, name, onChange, displayName }) {
  return (
    <div className={styles.checkboxContainer}>
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name} className={styles.checkboxLabel} checked={checked}>
        <div className={styles.checkbox}>{checked && <CheckMark />}</div>
        {displayName}
      </label>
    </div>
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired
};
