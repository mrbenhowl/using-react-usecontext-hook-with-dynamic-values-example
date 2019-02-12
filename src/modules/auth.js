export function authenticate (email, password) {
  // Make request to auth endpoint if this was for real, but it's not :)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Bruce Lee',
        dateOfBirth: '27/11/1940',
        email: 'bruce.lee@enterthedragon.com',
        secretQuestion: 'What is my favourite movie?',
        secretAnswer: 'The Way of the Dragon'
      })
    }, 2500)
  })
}
