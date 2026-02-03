const muvelet = (a, b, callback) => {
    const result = callback(a, b);
    return {result}; //shorthand property (basically: {result : result})
};

const muveletLetrehoz = (jel) => {
    if (jel == "+")
    return (a, b) =>{
        return a + b;
    }

    else if (jel == "-")
        return (a, b) =>{
            return a - b;
        }
    
    else if (jel == "*")
        return (a, b) =>{
            return a * b;
        }
}

export {muvelet, muveletLetrehoz} //{muvelet : muvelet, muveletLetrehoz : muveletLetrehoz}