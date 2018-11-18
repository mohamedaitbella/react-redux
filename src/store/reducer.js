const initialState ={
    age:21
};

const reducer =(state = initialState, action)=>{
    const newState = {...state};
    switch(action.type){
      case "AGE_UP":
        newState.age++;
        break;
    case"AGE_Down":
        newState.age--;
        break;
    default :
    return newState;  
    }
    
    return newState;
}

export default reducer;