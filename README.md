# Who's that NBA Player?
SEIFXR10ANZ Project 1
HOOPSIQ (Wordle Alternative)

## Technologies
- HTML
- CSS
- Javascript

## Approach
1. Create UI
 - Create guessing grid
  - Guessing columns include Team, Position, PPG, APG, RPG
 - Create Search List
  - List should contain list of all NBA players
  - List should only show players that text-match the input value
  - Player cards in the list should show their Team, Position, PPG, APG & RPG
 - Add team logos and team divisions at the bottom
2. Add game logic
 - Select random player from NBA player list
 - If Team or Position are wrong, then make a cross appear
 - If PPG, APG, RPG are wrong, make an arrow appear, making it higher or lower
 - If all columns are guessed correctly, then display win page
 - After 6 guesses, display lose page

## Remaining to do
- [x] Download pictures and refactor code to link to internal images
- [x] Add transition animations
- [ ] Add divisions and team logos (fade out if already guessed)
- [x] Add Stats


### Game URL
https://myz96.github.io/wordle/

## Installation
No need to install
Play for free on any web browswer
See https://myz96.github.io/wordle/

## Next steps:
- Improve UI
 - Include a player silohette of the player to be guessed
- Build a "Who's that NBA Great?" extension that guesses Hall of Fame players
 - Additional information such as # of MVPs, # of All-NBA picks, # of championships 
 - Need to scrape data from https://craftednba.com/hall-of-fame/players