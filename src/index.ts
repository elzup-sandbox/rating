import trueskill from 'trueskill'

type User = {
  name: string
  skill: [number, number]
  rank: number
  nth: number
}
type UserCalc = Omit<User, 'skill'> & {
  skill: [number, number]
}

const sum = (a, b) => a + b
function patchUserCalc(user: User, nth: number): UserCalc {
  return {
    ...user,
    skill: [user.skill, user.skill / 3],
  }
}

function patchUsersCalc(users: User[]): UserCalc[] {
  const total = users.map((v) => v.skill).reduce(sum, 0)
  const avg = total / users.length

  return users.map(patchUserCalc)
}
function calc(users0: User[]) {
  const users = [...users0]
  trueskill.AdjustPlayers(users)
  return users
}

function main() {
  const users: User[] = [
    { name: 'alice', skill: [400, 400 / 3], rank: 1 },
    { name: 'bob', skill: [400, 400 / 3], rank: 2 },
    { name: 'chris', skill: [400, 400 / 3], rank: 3 },
    { name: 'darren', skill: [400, 400 / 3], rank: 4 },
    { name: 'elis', skill: [400, 400 / 3], rank: 5 },
  ]
  console.log(calc(users))
}

main()
