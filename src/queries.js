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

//getMovieDetails : apollo에서 사용하려고 이름 붙이는 것, not for graphql
// -> 어떤 종류의 변수를 쿼리에게 주는지 알려줘야 하기 때문 
export const DETAIL_PAGE = gql`
    query getMovieDetails($movieId: Int!){
        movie(id: $movieId){
            medium_cover_image
            title_long
            rating
            description_intro
            language
            genres
        }
        suggestions(id: $movieId) {
            id
            medium_cover_image
            title_long
            rating
        }
    }


`;