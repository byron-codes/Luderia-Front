export const cpfMask = value => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const realMask = value => {
  const v = ((value.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');

  const m = v[0].split('').reverse().join('').match(/.{1,3}/g);

  for (let i = 0; i < m.length; i++)
      m[i] = m[i].split('').reverse().join('') + '.';

  const r = m.reverse().join('');

  return "R$ " + r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
};

export const realUnMask = value => {
  return parseFloat(value.replace(/[^0-9,.]/g, '').replace(/[.]/g, '').replace(',', '.'))
};

export const creditCardMask = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/( \d{4})\d+?$/, "$1");
};

export const validCardMask = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\/\d{2})\d+?$/, "$1");
};

export const numberMask = value => {
  return value
    .replace(/\D/g, "");
};

export const cepMask = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
};