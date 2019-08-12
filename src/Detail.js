import React from "react";
import { Query } from 'react-apollo';
import { DETAIL_PAGE } from './queries';
import Movie from "./Movie";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-bottom: 50px;
  padding: 50px;
`;

const Card = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 7px;
`;

const Image = Card.withComponent("img");

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  margin-left: 50px;
`;

const Paragraph = styled.span`
  margin-bottom: 10px;
  display: block;
  font-weight: ${props => (props.bold ? "500" : "400")};
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 50px;
`;

const Detail = ({ match: { params: { movieId } } }) => {
    let id = parseInt(movieId);

    return(
        <Query query={DETAIL_PAGE} variables={{movieId: id}}> 
            { 
                ({loading, data, error}) => {
                    if(loading) return <h3>Loading..</h3>
                    if(error) return <h3>Error</h3>
                    if(data){
                        
                        return (
                            <div>
                                <Container>
                                    <Image src={data.movie.medium_cover_image} />
                                    <span>
                                        <Title>{data.movie.title}</Title>
                                        <Paragraph bold>Rating: {data.movie.rating}</Paragraph>
                                        <Paragraph>{data.movie.description_intro}</Paragraph>
                                    </span>
                                </Container>
                                <Title>Suggested</Title>
                                <MovieContainer>
                                    {data.suggestions.map(movie => (
                                    <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        rating={movie.rating}
                                        poster={movie.medium_cover_image}
                                    />
                                    ))}
                                </MovieContainer>
                            </div>
                        );
                    }
                }     
            }
        </Query>
    );
};

export default Detail;