
// When user select a name, getSelection fetch correnct data from 'people' via name
export const getSelection = (people, target) => people.find(person => person.name === target)

// After selection is fetched, mapMenu will replace selection (or null) with correct menu selection
export const mapMenu = (menu, targetSel) => {
  const selection = targetSel.selection.map((sel, i) => sel === null ? 'null' : menu[i][sel])
  return { ...targetSel, selection }
}
