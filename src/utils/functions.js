export function verifyUrl(url) {
  return url.indexOf('http://') !== -1
    || url.indexOf('https://') !== -1
}

export function clampText(text, max) {
  if (text && text.length > max) {
    return text.substr(0, max) + '...'
  }

  return text
}
