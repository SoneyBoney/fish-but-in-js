// I'm finding Google's style guide for JavaScript somewhat helpful
// https://google.github.io/styleguide/javascriptguide.xml#Naming
// broadly speaking: use semicolons, and use camelCase


/* State
 * - players: should be a list of 6 "Player" classes
 * - turn: a number from 0-5, representing player
 * - bingosT1: counts team 1 points
 * - bingosT2: counts team 2 points
 */
class State {
    constructor() {
        players = new Player(/*TODO*/);
        // TODO: the code for new player and the randomizer

        this.players = players;
        this.turn = 0;
        this.bingosT1 = 0;
        this.bingosT2 = 0;
    }
    
    // takes card out of target's hand and puts it in asker's hand
    // else returns print statements saying why you can't do that
    play(self, asker, target, card) {

    }
    
    // we never finished defining this in the python script
    call(self, asker, set) {
        return true;
    }
    
    // returns false if bingosT1 < 5 AND bingosT2 < 5
    terminate(self) {

    }

    // removes all cards in a set if one team gets it
    // adds a point to bingos scorecard
    bingo(self) {

    }

    // for loop; prints everybody's cards for debugging purposes
    printCards(self) {

    }
}

/* Player
 * - id: a number that represents which player (player can be 0-5)
 * - cards: a set that represents held cards (cards can be 0-53)
 * - validSets: a set that represents helds sets (sets can be 0-8)
 * - team: a number that represents which team (team can be 0 or 1)
 */
class Player {
    constructor(playerID, cards) {
        this.id = playerID;
        this.cards = new Set([cards]);
        this.validSets = validAsks;
        this.team = Math.floor(playerID/3);
    }

    validAsks(self) {

    }

    hasCard(self, card) {

    }

    cardAdd(self, card){

    }

    cardRemove(self, card) {

    }

    setRemove(self, cardSet) {

    }
}

game = new State();

while (!game.terminate()) {
    console.log("Player %d's turn", game.turn());
    game.printCards();

    while (condition) {
        //TODO: figure out how inputs work
    }

    if (game.play(game.players[game.turn], game.players[query], card)) {
        game.bingo();
    }

    console.log("Team 1 has %d sets and Team 2 has %d sets.", 
                game.t1_bingos, game.t2_bingos);

}
/*

# int main()
# {
game = State()

while(not game.terminate()):
    print("Player %d's turn" % game.turn)
    game.print_cards()
    query = 9999
    card = 9999
    
    while ((query > 5) and (card > 53)):
        query = int(input("Target player #: "))
        card = int(input("Target Card: "))

    
    
    if game.play(game.players[game.turn], game.players[query], card):
        game.bingo()
    print("Team 1 has %d sets and Team 2 has %d sets." % (game.t1_bingos, game.t2_bingos))



#}

*/