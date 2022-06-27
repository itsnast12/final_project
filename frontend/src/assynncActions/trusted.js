import {getAllTrustedAction} from "../store/reduser";


export const getAllTrusted = () =>{
    return (dispatch)=> {
         fetch('http://localhost:7000/api/all/trusted', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })
            .then(resp=>resp.json())
            .then(json => {dispatch(getAllTrustedAction(json))});
        }
}