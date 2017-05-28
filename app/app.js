

function isPerfectNumber(number){
    var sum = 0;

    for (var i = 1; i <= (number/2); i++) {
        if ((number % i) === 0){
            sum += i;
        }
    }
    return (number === sum);
}


function getMessage(numbers) {

    var count = 0, result = [];
    var hasPerfectNumbers = false;


    for(var i = 0; i < numbers.length; i++){
        if((typeof numbers[i] === 'number') && (numbers[i] > 0)){
            if(isPerfectNumber(numbers[i])){
                hasPerfectNumbers = true;
                count += 1;
                result.push(numbers[i]);
            }
        } else{
            throw new Error('Argument is wrong or not a number!');
        }
    }

    if(hasPerfectNumbers){
        var biggest = Math.max.apply(null, result);

        return {hasPerfectNumbers: hasPerfectNumbers, biggest: biggest,
            message: 'Argument contains ' + count + ' perfect number(s) and the biggest one is ' + biggest};
    } else{
        return {hasPerfectNumbers: hasPerfectNumbers, biggest: null,
            message: 'Argument doesn\'t contain perfect numbers'};
    }
}


module.exports = {
    getMessage : getMessage,
    isPerfectNumber : isPerfectNumber
};
