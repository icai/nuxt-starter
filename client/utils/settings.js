export const API_KEY = 'YOUR_API_KEY'

export const CALENDAR_COLOR = {
  purple: '#5e72e4',
  orange: '#fb6340',
  pink: '#f5365c',
  blue: '#409eff',
  green: '#2dce89'
}

export function removeAuthCookies() {
  const res = document.cookie
  const multiple = res.split(';')
  for (let i = 0; i < multiple.length; i++) {
    const key = multiple[i].split('=')
    if (key[0].includes('auth')) {
      document.cookie = key[0] + ' =; expires = Thu, 01 Jan 1970 00:00:00 UTC'
    }
  }
}
