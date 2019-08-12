import React from "react";
import {Query} from 'react-apollo';
import { HOME_PAGE } from './queries';
import styled from "styled-components";
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
    <Container>
        <Query query={HOME_PAGE}>
        {
            ({ loading, data, error}) => {
        if(loading) return <span>Loading</span>;
        if(error) return <span>Error</span>;
        if(data){
        return data.movies.map(movie => (
            <Movie 
            key={movie.id} 
            id={movie.id }
            title={movie.title_long}
            poster={movie.medium_cover_image}
            rating={movie.rating} 
            />
            ));
        }}
        }  
        </Query>
    </Container>
    );

export default Home;