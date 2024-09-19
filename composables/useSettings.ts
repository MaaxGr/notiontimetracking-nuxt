import Cookies from "universal-cookie";

export default function useSettings() {
    const cookies = new Cookies()

    const setToken = (token: string) => {
        cookies.set('notion_token', token, {
            path: '/'
        });
    }

    const getToken = () => {
        return cookies.get('notion_token');
    }

    const isTokenConfigured = () => {
        return cookies.get('notion_token') != undefined;
    }


    return {
        setToken,
        getToken,
        isTokenConfigured
    }
}