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
        <Query query={HOME_PAGE}>
        {
            ({ loading, data, error}) => {
        if(loading) return <h3>Loading</h3>;
        if(error) return <h3>Error</h3>;
        if(data){
            return <Container>
            {data.movies.map(movie => (
                <Movie 
                key={movie.id} 
                id={movie.id }
                title={movie.title}
                poster={movie.medium_cover_image}
                rating={movie.rating} 
                />
            ))}</Container>;
        }}
        }  
        </Query>
    );

export default Home;