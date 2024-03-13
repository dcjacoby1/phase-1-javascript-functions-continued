// code your solution here
function saturdayFun(activity){
    if (activity !== undefined){
        return `This Saturday, I want to ${activity}!`;
    } else {
        return `This Saturday, I want to roller-skate!`;
    }
    
}

function mondayWork(work){
    if (work !== undefined){
        return `This Monday, I will ${work}.`;
    } else {
        return `This Monday, I will go to the office.`;
    }
    
}

function wrapAdjective(wrap = "*"){
    return function (adj = "special"){
        return `You are ${wrap}${adj}${wrap}!`;
    };
}

