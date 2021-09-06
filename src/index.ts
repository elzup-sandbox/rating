import trueskill from 'trueskill'

type User = {
  name: string
  skill: number[]
  rank: number
}

function calc(users0: User[]) {
  const users = [...users0]
  trueskill.AdjustPlayers(users)
  return users
}

const base = 1000
function main() {
  const users: User[] = [
    { name: 'alice', skill: [400, base], rank: 1 },
    { name: 'bob', skill: [400, base], rank: 2 },
    { name: 'chris', skill: [400, base], rank: 3 },
    { name: 'darren', skill: [400, base], rank: 4 },
    { name: 'elis', skill: [400, base], rank: 5 },
  ]
  console.log(calc(users))
}

main()
