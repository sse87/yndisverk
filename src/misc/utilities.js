/* global localStorage */

// When user select a name, getSelection fetch correnct data from 'people' via name
export const getSelection = (people, target) => people.find(person => person.name === target)

// After selection is fetched, mapMenu will replace selection (or null) with correct menu selection
export const mapMenu = (menu, targetSel) => {
  const selection = targetSel.selection.map((sel, i) => sel === null ? 'null' : menu[i][sel])
  return { ...targetSel, selection }
}

// Validate persons mapped menu to current menu, go through every selection and check if every day is part of the menu
// Because person mapped data is stored in localStorage so it can be expired
export const validate = (person, menu) => {
  console.log('validate() - person:', person)
  return person.selection.every((sel, i) => {
    if (sel === null) return true
    // This check if current selection is on the menu
    return Object.values(menu[i]).some(day => day === sel)
  })
}

export const checkVersion = (setNewVersionIndicator) => {
  console.log('checkVersion()')
  const oldVersion = localStorage.getItem('oldVersion')
  setNewVersionIndicator(oldVersion === window.appVersion)
}

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}
const getTimeBasedGreeting = () => {
  const date = new Date()
  const thisHour = date.getHours()

  // From 00:00 to 5:59
  if (thisHour < 6) return 'Good night'
  // From 6:00 to 11:59
  if (thisHour < 12) return 'Good morning'
  // From 12:00 to 17:59
  if (thisHour < 18) return 'Good afternoon'
  // From 18:00 to 21:59
  if (thisHour < 22) return 'Good evening'
  // From 22:00 to 23:59
  return 'Good night'
}

// Greetings list: https://www.fluentu.com/blog/english/english-greetings-expressions/
const greetings = ['Hi', 'Hello', 'Hey', 'Good to see you', 'Nice to see you']
// const greetingsSlang = ['Yo!', 'Howdy', 'Sup?', 'Whazzup?', 'G’day', 'mate!', 'Hiya!']
export const getRandomGreeting = () => {
  greetings.push(getTimeBasedGreeting())
  return getRandomItem(greetings)
}
