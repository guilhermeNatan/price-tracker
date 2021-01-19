export default class NumberToReal {
  static formatNumberToString(numero) {
    const numeroFormatado = new Number(numero).toFixed(2).split('.');
    numeroFormatado[0] = `R$ ${numeroFormatado[0].split(/(?=(?:...)*$)/).join('.')}`;
    return numeroFormatado.join(',');
  }

  static formatStringToReal(string) {
    const numeroFormatado = string.split('.');
    numeroFormatado[0] = `R$ ${numeroFormatado[0].split(/(?=(?:...)*$)/).join('.')}`;
    return numeroFormatado.join(',');
  }
}
