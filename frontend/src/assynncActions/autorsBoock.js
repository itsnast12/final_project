import { getAllAutorsActions} from "../store/reduser";


export const getAllAddAutors = () =>{
    return (dispatch)=> {
         fetch('http://localhost:7000/api/all/autors', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })
            .then(resp=>resp.json())
            .then(json => {dispatch(getAllAutorsActions(json))});
        }
}