const input = document.querySelector('input');
console.log(input)
let h2 = document.querySelector('h2');

input.addEventListener('input', function () {
    if (input.value >= 3999) {
        alert('Number Limit Is 3999')
    } else
        h2.innerText = convertToRoman(input.value);
    if (input.value === '') {
        h2.innerText = 'Numeral Shows Here';
    }
});


function convertToRoman(num) {
    let str = num.toString();

    switch (str.length) {
        case 1:
            return d1(parseInt(str[0]));
        case 2:
            return d2(parseInt(str[0])) + d1(parseInt(str[1]));
        case 3:
            return d3(parseInt(str[0])) + d2(parseInt(str[1])) + d1(parseInt(str[2]));
        case 4:
            return d4(parseInt(str[0])) + d3(parseInt(str[1])) + d2(parseInt(str[2])) + d1(parseInt(str[3]));
    }

    function d4(e) {
        switch (e) {
            case 1:
                return 'M';
            case 2:
                return 'MM';
            case 3:
                return 'MMM';
        }
    }
    function d3(e) {
        switch (e) {
            case 0:
                return '';
            case 1:
                return 'C';
            case 2:
                return 'CC';
            case 3:
                return 'CCC';
            case 4:
                return 'CD';
            case 5:
                return 'D';
            case 6:
                return 'DC';
            case 7:
                return 'DCC';
            case 8:
                return 'DCCC';
            case 9:
                return 'CM';
        }
    }
    function d2(e) {
        switch (e) {
            case 0:
                return '';
            case 1:
                return 'X';
            case 2:
                return 'XX';
            case 3:
                return 'XXX';
            case 4:
                return 'XL';
            case 5:
                return 'L';
            case 6:
                return 'LX';
            case 7:
                return 'LXX';
            case 8:
                return 'LXXX';
            case 9:
                return 'XC';
        }
    }
    function d1(e) {
        switch (e) {
            case 0:
                return ''
            case 1:
                return 'I';
            case 2:
                return 'II';
            case 3:
                return 'III';
            case 4:
                return 'IV';
            case 5:
                return 'V';
            case 6:
                return 'VI';
            case 7:
                return 'VII';
            case 8:
                return 'VIII';
            case 9:
                return 'IX';
        }
    }
}










