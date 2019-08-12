import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
    Query: {
        movies: (_, { genre, limit, rating }) => getMovies(genre, limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
};

export default resolvers;