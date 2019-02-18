import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers'
// 서버가 돌아가는지 확인! preset-env, preset-stage-3 설치 후 확인 완료
// console.log("hello")

const server = new GraphQLServer({
    // 타입 데피니션 : 타입 정의
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(()=> console.log("server is running"))
