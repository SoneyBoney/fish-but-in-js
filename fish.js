/*
import random
import numpy as np

game state struct
- players: player struct
- turn: player, 0 to 5, whose turn it is
*/

/*
 * State class
 * - players: set of player structs
 * - turn:
 * - bingosT1:
 * - bingosT2:
 */
class State {
    constructor() {
        players = new Player(/*TODO*/)
        // TODO: other code

        this.players = players
        this.turn = 0
        this.bingosT1 = 0
        this.bingosT2 = 0
    }
    
    play() {

    }
    
    call() {

    }
    
    terminate() {

    }

    bingo() {

    }

    printCards() {

    }
}
/*
class State:
    def __init__(self):
        perm = np.random.permutation(53)
        players = []
        for i in range(6):
            players.append(Player(i,set(perm[(9*i):9*i+8])))
            
        self.players = players
        self.turn = 0
        self.t1_bingos = 0
        self.t2_bingos = 0

    def play(self, asker, target, card):
        if asker.team == target.team:
            print("You can't ask someone on your own team!")
            return False
            
        if (card//6) in asker.valid_sets:
            if card in target.cards:
                target.card_remove(card)
                asker.card_add(card)
                return True
            else: # changes player turn
                self.turn = target.id
                print("Go fish! :^)")
                return False
        else:
            print("You can't ask for that card!")
            return False
    
    def call(self,asker,set):
        # for now we are just using bingo system instead of calling sets
        return True
        
    def terminate(self):
        if (self.t1_bingos < 5) and (self.t2_bingos < 5):
            return False
        return True
    
    def bingo(self):
        team1 = set()
        team2 = set()
        for player in self.players:
            if player.id < 3:
                team1 = team1.union(player.valid_sets)
            else:
                team2 = team2.union(player.valid_sets)
                # team A has 0, 1, 2, 3, 5
                # team B has 1, 2, 3, 4, 5

        t1x = team1.difference(team2)
        t2x = team2.difference(team1)

        self.t1_bingos += len(t1x)
        self.t2_bingos += len(t2x)

        print("Removed sets from Team 1:", t1x)
        print("Removed sets from Team 2:", t2x)
        
        for player in self.players:
            if player.id < 3:
                player.set_remove(t1x)
            else:
                player.set_remove(t2x)
        return

    def print_cards(self):
        for player in self.players:
            print(player.id, ":", player.cards)
        return
*/

class Player {
    constructor() {
        this.id = 0//player_id
        this.cards = 0//set(cards)
        this.valid_sets = 0//self.valid_asks()
        this.team = Math.floor(player_id/3)  
    }
}
/*

  

""" player struct
- id: int from 0-5 (six players)
- cards: set of cards from 0-53
- valid_sets: set from 0-8 (nine sets)
- team: either 0 or 1
"""
class Player:
    def __init__(self,player_id,cards):
        self.id = player_id
        self.cards = set(cards)
        self.valid_sets = self.valid_asks()
        self.team = player_id // 3

    def valid_asks(self):
        valid = set()
        for card in self.cards:
            valid.add(card // 6)
        return valid
    
    def has_card(self,card):
        if(card in self.cards):
            return True
        return False

    def card_add(self,card):
        self.cards.add(card)

    def card_remove(self,card):
        self.cards.remove(card)
        self.valid_sets = self.valid_asks()

    def set_remove(self, card_set):
        temp = set()
        for card in self.cards:
            if (card//6) in card_set:
                temp.add(card)
    
        self.cards.difference_update(temp)
        self.valid_sets = self.valid_asks()


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