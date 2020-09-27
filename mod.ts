/**
 * @param arr 
 * @param key
 */
export const extractObjectValue = <T>(arr: T[], key: keyof T) => arr.map(item => item[key])

/**
 * @param array 
 * @param target 
 * @param keyword 
 */
export const narrowdownArrayObject = <T>(array: T[], target: keyof T, keyword: T[keyof T]) => 
  array.filter(object => object[target] === keyword)

/**
 * @param file 
 */
export const isExistFile = async (file: string) => {
  try {
    await Deno.stat(file)
    return true
  } catch (err) {
    if (err) return false
  }
}

/**
 * @param file
 */
export const isExistFileSync = (file: string) => {
  try {
    Deno.statSync(file)
    return true
  } catch (err) {
    if (err) return false
  }
}

/**
 * @param rawdata
 * @param file
 */
export const writeFile = async (rawdata: string, file: string) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(rawdata)
  await Deno.writeFile(file, data)
}

/**
 * @param rawdata 
 * @param file
 */
export const writeFileSync = (rawdata: string, file: string) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(rawdata)
  Deno.writeFileSync(file, data)
}

/**
 * @param file
 */
export const readFile = async (file: string) => {
  const decoder = new TextDecoder('utf-8')
  const data = await Deno.readFile(file)
  return decoder.decode(data)
}

/**
 * @param file 
 */
export const readFileSync = (file: string) => {
  const decoder = new TextDecoder('utf-8')
  const data = Deno.readFileSync(file)
  return decoder.decode(data)
}

/**
 * @param date
 */
export const readDate = (date: string) => {
  const getDate = date ? new Date(date) : new Date()
  const daysList: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return {
    year: getDate.getFullYear(),
    month: getDate.getMonth() + 1,
    date: getDate.getDate(),
    days: daysList[getDate.getDay()],
    hour: getDate.getHours(),
    minute: getDate.getMinutes(),
    second: getDate.getSeconds(),
  }
}

/**
 * 
 * @param num 
 */
export const zeroPadding = (num: number) => String(num).padStart(2, '0')
