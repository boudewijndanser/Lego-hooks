// Add REAL fetch with credentials here!

export const FetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() * 10
      random <= 5
        ? resolve("Submitted successfully 🙌")
        : reject("Oh no there was an error 😞")
    }, 2000)
  })
}