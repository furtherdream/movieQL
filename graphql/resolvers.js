// Query는 database에게는 문제 같은 거임.
// 그래서 이 쿼리를 어떠한 방식으로 해결해야 함
import { people, getById } from "./db"

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id)
    // 처음 건 현재 오브젝트를 보내는 오브젝트, 두 번째는 argument
    // console.log(args)로 찍히는 값이 { id: 1 } 이었음
  }
}

export default resolvers
