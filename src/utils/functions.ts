export const randomKeyGen = (length = 15) => {
  return (
    Math.random().toString(36).substring(2,length) + 
    Math.random().toString(36).substring(2,length)
  )
}

export const duplicateArray = <T>(array: T[]):T[] => {
  return [...array, ...array] // or array.concat(array)
}

export const sortArray = <T>(array: T[]):T[] => {
  return array.sort(() => Math.random() - 0.5)
}