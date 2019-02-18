// Query는 database에게는 문제 같은 거임.
// 그래서 이 쿼리를 어떠한 방식으로 해결해야 함
const nicolas = {
    name : "Nicolas",
    age : 20,
    gender : "female"
}

const resolvers = {
    Query : {
        person: () => nicolas
    }
}

export default resolvers;
