import { getAllSessions } from '../services/sessions';
import getTransformedSessions from '../data/sessions';
export const REQUEST_SESSIONS = 'FETCH_SESSIONS';

function fetchSessions() {
    return {
        type: REQUEST_SESSIONS
    };
};

export const RECEIVE_SESSIONS = 'RECEIVE_SESSIONS';

function receiveSessions(sessions) {
    return {
        type: RECEIVE_SESSIONS,
        sessions
    };
};

export function getSessions() {
    return function(dispatch) {
        dispatch(fetchSessions());

        return getAllSessions().then((res) => {
            return res.json();
        }).then((json) => {
            dispatch(receiveSessions(getTransformedSessions(json.sessions)));
        });
    };
};
