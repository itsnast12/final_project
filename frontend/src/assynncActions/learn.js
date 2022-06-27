import {getAllLearnAction} from "../store/reduser";


export const getAllLearn = () =>{
    return (dispatch)=> {
         fetch('http://localhost:7000/api/all/learn', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })
            .then(resp=>resp.json())
            .then(json => {dispatch(getAllLearnAction(json))});
        }
}