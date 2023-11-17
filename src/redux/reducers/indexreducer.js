const intialstate = [
    {
        id:0,
        name:"rajat sharma",
        phone:465555,
        email:"rs@g.com"
    },

    {
        id:1,
        name:"karan sharma",
        phone:789999,
        email:"ks@g.com"
    },
];

const contactreducer=(state=intialstate,action)=>{
    
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state,action.payload];
            return state
            

            case "UPDATE_CONTACT":
                const updatestate = state.map( (contact)=>contact.id===action.payload.id ? action.payload:contact);
                state=updatestate 
                return state;    
        
               case "DELETE_CONTACT":
                const filterstate = state.filter( (contact)=> contact.id !==action.payload?contact:null);
                state= filterstate;
                return state;

        default :return  state
    }
}

export default contactreducer;