/**
 * Открывает отдельное окно браузера с содержимым, которое хотим распечатать и системное окно печати браузера
 * @param {string} title - заголовок страницы
 * @param {string} data - строка с HTML-элемент, который хотим распечатать. Можно передать результат getElementById().innerHTML
 * @param {string} style - стили отображения
 */
export const printValue = (title, data, style = '') => {
  const mywindow = window.open('', 'PRINT', 'height=768,width=1024')
  mywindow.document.write(`<html><head><title>${title}</title><style>${style}</style></head><body>`)
  mywindow.document.write(data)
  mywindow.document.write('</body></html>')

  mywindow.document.close() // necessary for IE >= 10
  mywindow.focus() // necessary for IE >= 10*/

  mywindow.print()
  mywindow.close()

  return true
}