const arr = [
    10, 5, -10, 2.25, '10', '5,33', '4.55', 'abc', '45b', true, false, NaN, Infinity, undefined, 
    [5, 12, 2, 22, '5,23'],
    [5, 12, true, false],
    function () {
        return 10;
    },
    {
        name: 'abc',
        cost: '5',
        count: 3,
        numbers: [1, 5, '45abcd', 33, 0, 23, {
               name: 'abc',
               cost: ['5', 77, '68', '', 5, 98],
               count: 3
           }
       ]
    },
    {
        name: 'abc',
        cost: '5',
        numbers: [1, 5, 33],
        count: {
            props: 4,
            area: 7
        }
    }
];
function test(item){
    let sum = 0;
    if (Array.isArray(item)){
        for (let i = 0; i < item.length; i++){
            sum += test(item[i]);   
        } 
    }
    else if (typeof item == 'string'){

        const parseResult =  parseFloat (item.replace(',' , '.'));
        if (!isNaN(parseResult)){
            sum += parseResult;
        }
    }
    else if (typeof item == 'number' && isFinite(item)) {
        sum += item;
    }
    else if (typeof item === 'function') {
        sum += test(item());
    }
    else if (typeof item === 'object' && item.constructor === Object) {

        for (key in item) {
            sum += test(item[key]);
        }
    }
    return sum;
} 

      //  console.log(parseResult);

     

   
    
   


   // console.log (parseFloat (item);

   


console.log(test(arr));