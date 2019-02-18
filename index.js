import { GraphQLServer } from 'graphql-yoga';

// 서버가 돌아가는지 확인! preset-env, preset-stage-3 설치 후 확인 완료
// console.log("hello")

const server = new GraphQLServer({});

server.start(()=> console.log("server is running"))