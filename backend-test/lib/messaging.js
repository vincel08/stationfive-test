const STORE = [
  {
    message: ['hi', 'hello'],
    response: 'Welcome to StationFive.'
  },
  {
    message: ['bye', 'goodbye'],
    response: 'Thank you, see you around.'
  }
]

const getResponse = (message) => {
  let response = 'Sorry, I don’t understand.'

  for (let i = 0; i < STORE.length; i++) {
    const item = STORE[i]

    for (let m = 0; m < item.message.length; m++) {
      const itemMessage = item.message[m]

      if (message.toLowerCase().indexOf(itemMessage) > -1) {
        response = item.response
        break
      }
    }
  }


  return response
}

module.exports = {
  getResponse
}