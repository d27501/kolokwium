
function getMessage(numbers) {

    var count = 0, result = [];
    var has_Perfect_Numbers = false;


    for(var i = 0; i < numbers.length; i++){
        if((typeof numbers[i] == 'number') && (numbers[i] > 0)){
            if(isPerfectNumber(numbers[i])){
                has_Perfect_Numbers = true;
                count += 1;
                result.push(numbers[i]);
            }
        } else{
            throw new Error('Argument is wrong or not a number!');
        }
    }

    if(has_Perfect_Numbers){
        var biggest = Math.max.apply(null, result);

        return {has_Perfect_Numbers: has_Perfect_Numbers, biggest: biggest,
            message: 'Argument contains ' + count + ' perfect number(s) and the biggest one is ' + biggest};
    } else{
        return {has_Perfect_Numbers: has_Perfect_Numbers, biggest: null,
            message: 'Argument doesn\'t contain perfect numbers'};
    }
}

function isPerfectNumber(number){
    var sum = 0;

    for (var i = 1; i <= (number/2); i++) {
        if ((number % i) == 0){
            sum += i;
        }
    }
    return (number == sum);
}

module.exports = {
    getMessage : getMessage,
    isPerfectNumber : isPerfectNumber
};
