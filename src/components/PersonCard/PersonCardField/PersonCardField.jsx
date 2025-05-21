import React from "react";
import styles from "./PersonCardField.module.css";

const PersonCardField = ({
  label,
  value,
  isEditing = false,
  editValue = "",
  onEditChange = () => {},
  inputType = "text",
  shouldUseWordBreakAll = false,
  shouldUseTextArea = false,
}) => {
  const renderInput = () => {
    return shouldUseTextArea ? (
      <textarea
        className={styles.textarea}
        value={editValue}
        onChange={(e) => onEditChange(e.target.value)}
      />
    ) : (
      <input
        className={styles.inputs}
        type={inputType}
        value={editValue}
        onChange={(e) => onEditChange(e.target.value)}
      />
    );
  };

  return (
    <div className={styles.fieldWrapper}>
      <div className={styles.labelWrapper}>
        <label>{label}:</label>
      </div>
      <div className={styles.valueWrapper}>
        {isEditing ? (
          renderInput()
        ) : (
          <p className={shouldUseWordBreakAll ? styles.wordBreakAll : ""}>
            {value}
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonCardField;
