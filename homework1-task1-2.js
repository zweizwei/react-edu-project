//first task

const loop = (times = 0, callback = null) => {
    if (times <= 0)
        console.log('wrong parameters');
    return;

    for (let i = 0; i < times; i++) {
        console.log('yes');
    }
};


const logging = () => {
    console.log('I log');
};

loop(5, logging);

//second task

const calculateArea = (type = 'square', dimensions = []) => {
    const figureTypes = {
        square: 'square',
        circle: 'circle',
        triangle: 'triangle'
    };

    const res = {
      figure: type,
      input: {
          type,
          dimensions
      }
    };

    switch (type) {
        case figureTypes.square:
            res.area = dimensions ** 2;
            break;
        case figureTypes.circle:
            res.area = dimensions ** 2 * 3.14159;
            break;
        case figureTypes.triangle:
            const add = (res, val) => res + val;
            const triangleMultiplier = dimensions.reduce(add, 0) / 2;
            const multiply = (res, val) => res * (triangleMultiplier - val);
            res.area =  Math.floor(Math.sqrt(dimensions.reduce(multiply, 1) * triangleMultiplier));
            break;
        default:
            console.log("something went wrong");
    }
    return res;
};

//this is an example of some real triangle
let exampleRes = calculateArea('triangle', [9, 17.5, 19.5]);
console.log(exampleRes);