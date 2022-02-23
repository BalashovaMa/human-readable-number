module.exports = function toReadable(number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let string = number + '';
    if (number < 10) {
        return units[number];
    }
    if (number > 10 && number < 20) {
        return teen[string[1] - 1];
    }
    if (number >= 10 && number <= 90 && number % 10 == 0) {
        return dozens[(string[0] - 1)];
    }
    if (number > 20 && number < 100 && number % 10 != 0) {
        return (dozens[(string[0] - 1)] + ' ' + units[string[1]]);
    }
    if (number >= 100 && number < 1000 && number % 100 == 0) {
        return (units[string[0]] + ' hundred');
    }
    if (number > 100 && number < 1000 && number % 100 != 0 && number % 10 == 0) {
        return (units[string[0]] + ' hundred '+dozens[(string[1]-1)]);
    }
    if (number >= 100 && number < 1000 && number % 10 != 0 && string[1] == 1) {
        return (units[string[0]] + ' hundred ' + teen[(string[2]-1)]);
    }
    if (number >= 100 && number < 1000 && number % 10 != 0 && string[1] == 0) {
        return (units[string[0]] + ' hundred ' + units[string[2]]);
    }
    else {
        return (units[string[0]] + ' hundred '+dozens[(string[1]-1)]+' '+units[(string[2])]);
    }
}
