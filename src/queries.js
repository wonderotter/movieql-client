import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    query {
        movies(genre: "Romance", rating: 7, limit: 50){
            id
            title_long
            rating
            genres
            medium_cover_image
            }
        }
`;