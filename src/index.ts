import trueskill from 'trueskill'

type User = {
  name: string
  skill: [number, number]
  rank: number
}

function calc(users0: User[]) {
  const users = [...users0]
  trueskill.AdjustPlayers(users)
  return users
}

const initSkill = 400
function main() {
  const users: User[] = [
    { name: 'alice', skill: [initSkill, initSkill / 3], rank: 1 },
    { name: 'bob', skill: [initSkill, initSkill / 3], rank: 2 },
    { name: 'chris', skill: [initSkill, initSkill / 3], rank: 3 },
    { name: 'darren', skill: [initSkill, initSkill / 3], rank: 4 },
    { name: 'elis', skill: [initSkill, initSkill / 3], rank: 5 },
  ]
  console.log(calc(users))
  console.log(calc(users))
}

main()
