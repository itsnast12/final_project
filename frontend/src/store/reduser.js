const GET_ALL_ARTICLE_RECOURCES = 'GET_ALL_ARTICLE_RECOURCES';
const GET_ALL_AUTORS_BOOCK = 'GET_ALL_AUTORS_BOOCK';
const GET_ALL_LEARN = 'GET_ALL_LEARN';
const GET_ALL_TRUSTED = 'GET_ALL_TRUSTED';

const myState = { articles: [], authors: [], learning: [], trusted: [] };

export const reducer = (state = myState, action) => {
    // console.log(action);
    if (action.type === GET_ALL_ARTICLE_RECOURCES) {
        return { ...state, articles: action.payload };
    } else if (action.type === GET_ALL_AUTORS_BOOCK) {
        return { ...state, authors: action.payload };
    } else if (action.type === GET_ALL_LEARN) {
        return { ...state, learning: action.payload };
    } else if (action.type === GET_ALL_TRUSTED) {
        return { ...state, trusted: action.payload };
    } else {
        return state;
    }
}

export const getAllArticleRecourcesActions = (articles) => ({ type: GET_ALL_ARTICLE_RECOURCES, payload: articles });
export const getAllAutorsActions = (authors) => ({ type: GET_ALL_AUTORS_BOOCK, payload: authors });
export const getAllLearnAction = (learning) => ({ type: GET_ALL_LEARN, payload: learning });
export const getAllTrustedAction = (trusted) => ({ type: GET_ALL_TRUSTED, payload: trusted });