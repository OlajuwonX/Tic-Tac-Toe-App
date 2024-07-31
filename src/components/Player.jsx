import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing); // => schedules a state update to true. This is the best practice.
     
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value); // this is to change the default value name, to the new name set by the user.
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit'; (using the declarative method.)

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required Value={playerName} onChange={handleChange} />
    );
    // using defaultvalue={}, allows the displayed valueText to be re-edited.
    // btnCaption = 'Save'; (this is another way to change the btn caption from Edit to Save.)
  }

  return (
    <li>
      <span className={isActive ? 'active' : undefined}>
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
