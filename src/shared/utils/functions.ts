import moment from 'moment'

export const changeAppLanguage = (lng: string) => {
  localStorage.setItem('i18nextLng', lng)
}
export const smoothScroll = (e: any, path: string) => {
  let scroll = document.getElementById(path)
  e.preventDefault()
  scroll && scroll.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
export const ageCalc = () => {
  let bday = moment('2004-02-16', 'YYYY-MM-DD')
  return moment().diff(bday, 'years')
}
