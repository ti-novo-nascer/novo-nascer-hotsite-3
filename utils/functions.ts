export const formatPhone = (phone: string) => {
  let match: RegExpMatchArray | undefined
  if (phone.length === 12) {
    match = phone.match(/^(\d{2})(\d{2})(\d{4})(\d{4})$/)
    return `(${match[2]}) ${match[3]}-${match[4]}`
  } else if (phone.length === 13) {
    match = phone.match(/^(\d{2})(\d{2})(\d{3})(\d{3})(\d{3})$/)
    return `(${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
  } else {
    throw new Error('O número fornecido é inválido!')
  }
}

export const addEllipsis = (text: string, limit: number) => {
  const ellipsis = '...'
  if (text.length > limit) {
    text = text.substring(0, limit) + ellipsis
  }
  return text
}
