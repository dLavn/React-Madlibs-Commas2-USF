function addCommas(number) {
    const num = number.toString();
    const chars = num.split('.');

    chars[0] = chars[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return chars.join('.');
  }

module.exports = addCommas;