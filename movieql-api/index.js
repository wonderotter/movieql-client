import { GraphQLServer} from 'graphql-yoga';
import resolvers from './graphql/resolver';

const server = new GraphQLServer({
    //환경설정 넣으면 됨
    typeDefs: "graphql/schema.graphql", //type 정의
    resolvers
});

server.start(()=> {console.log("Graphql Server is Running!")});