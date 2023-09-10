export function numberFormatter(num) {
  const suffixs = 'kMG'
  let _num
  let bitlen = 0
  let i = 0
  const suffixslen = suffixs.length
  do {
    if (bitlen >= num) {
      bitlen = Number('1e' + (i - 1) * 3)
      i = i - 2
      break
    }
    bitlen = Number('1e' + ++i * 3)
  } while (i <= suffixslen)
  if (num > bitlen - 1) {
    num = ('' + num / bitlen).split('.')
    _num = [num[0]]
    if (!num[1] || num[1][0] === '0') {
      _num.push(suffixs[i])
    } else {
      ;[].push.apply(_num, ['.', num[1][0], suffixs[i]])
    }
    return _num.join('')
  } else {
    return num
  }
}
