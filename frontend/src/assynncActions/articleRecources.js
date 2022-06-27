import { getAllArticleRecourcesActions} from "../store/reduser";


export const getAllArticleRecources = () =>{
    return (dispatch)=> {
         fetch('http://localhost:7000/api/all/article', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })
            .then(resp=>resp.json())
            .then(json => {dispatch(getAllArticleRecourcesActions(json))});
        }
}