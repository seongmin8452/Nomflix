import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api_key'] = 'e888a49335fbd825c9bbcf82da7981f8';
    config.params['language'] = 'en-US';
    return config;
});

export const moviesApi = {
    nowPlaying: () => api.get('movie/now_playing'),
    upcoming: () => api.get('movie/upcoming'),
    popular: () => api.get('movie/popular'),
    movieDetail: (id) =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response: 'videos',
            },
        }),
    search: (term) =>
        api.get('search/movie', {
            params: {
                query: encodeURIComponent(term),
            },
        }),
};

export const tvApi = {
    topRated: () => api.get('tv/top_rated'),
    popular: () => api.get('tv/popular'),
    airingToday: () => api.get('tv/airing_today'),
    showDetail: (id) =>
        api.get(`tv/${id}`, {
            params: {
                append_to_response: 'videos',
            },
        }),
    search: (term) =>
        api.get('search/tv', {
            params: {
                query: encodeURIComponent(term),
            },
        }),
};

export const collectionApi = {
    showDetail: (id) => api.get(`collection/${id}`),
};
