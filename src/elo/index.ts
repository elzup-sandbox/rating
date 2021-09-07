import Elo from 'arpad'
const elo = new Elo()

function main() {
  let alice = 1_600
  let bob = 1_300

  let new_alice = elo.newRatingIfWon(alice, bob)
  console.log("Alice's new rating if she won:", new_alice) // 1,605

  let new_bob = elo.newRatingIfWon(bob, alice)
  console.log("Bob's new rating if he won:", new_bob) // 1,327
}

main()
