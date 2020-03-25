export const addGood = (data) => ({
  type: 'ADD_GOOD',
  data
})

export const removeGood = (id) => ({
  type: 'REMOVE_GOOD',
  id
})

export const toggleDisableGood = (id) => ({
  type: 'TOGGLE_DISABLE_GOOD',
  id
})