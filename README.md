# Regen Score

## Inspiration

- [DegenScore](https://degenscore.com/)
- Fiskantes

## Wat do

A tool used to measure and flaunt your upstanding on-chain behavior. You get points for doing things that are considered proper investor decorum like being a risk adverse, long-term hodler. Just sign in with your wallet to see your score and view the Regen leaderboard to compare yourself with other good samaritans! This data could be valuable for protocols who are looking to do targeted airdrops or rewards for long-term focused users.

## How was it built

First, I created the plan for the hack using Notion to take notes and drew up design sketches on paper and pencil. Once I settled on the features and design, I started creating the prototype using Figma and Visual Studio Code. Started with a simple NextJS create app.

Max helped out with the frontend work, and I created a new subgraph because I realized that we need to aggregate data from multiple protocols to get data like token balance, collateral ratios, time held, etc. in order to calculate the score values.

## How Score is Determined

Using The Graph to get the transaction history and balances of an Ethereum address and then calculating the score based on a predefined set of criteria. Score is predefined for the sake of demonstration, but these criteria can be voted on and decided by the community via RSPs (Regen Score Proposals).

Some examples of criteria listed below:

**Get points for doing "good" things on-chain**

- Get token balance (just AAVE & Gitcoin for now)
    - (+) 1 point for every token held
    - (+) 1 point for every day held since acquisition 
- Holding a "bluechip" ERC20
    - (+) 10 points for holding a token that's in a predefined list called `bluechipErc20` (i.e. `[AAVE, GTC]`)
- Holding a "bluechip" ERC721
    - (+) 15 points for holding an NFT that's in a predefined list called `bluechipErc721` (i.e. `[C. PUNK]`)
- Maintain healthy cratio on AAVE
    - (+) 50 points for keeping a ratio >150%
- Fund public goods (Gitcoin grant participant)
    - (+) 1 point for every dollar contributed to a Gitcoin grant
    - (+) 20 points for every contribution to a Gitcoin grant
    

**Lose points for doing "bad" things on-chain**

- Dumping airdrops quickly
    - Check for time hodling since airdrop received
- Aped into scammy ICOs and ponzis
    - Check for contract interactions that are on the "blacklist"
- Trading shitcoins
    - Check for token balances that are on the "blacklist"
- Using high leverage.. etc. other degen stuff
    - Check c-ratios for given protocols, interactions with sketchy exchanges, etc.
- High number of liquidations
    - Check number of times liquidated from any service/protocol
    

## Challenges

One of the major challenges in determining a `RegenScore` was to come up with a set of parameters in which the score is derived from. Due to the time crunch of the event, I had to come up with a biased and limited set of criteria, and then I had to figure out how to actually get the data to measure and calculate the score. So that's why I ended up building my own subgraph to compile the data that is needed. I am pretty new to using The Graph, so it took some time to ramp up and find the right tools to get this done in time.

Update: missed the submission deadline by 1 minute. I am NGMI.

## Future work

Every protocol has its own set of requirements that they consider good user behavior. There is a need to incentivize the users who participate in their protocol's governance processes. So we need to make a subgraph aggregator to pull in data from every protocol.

Some features that I'd like to include going forward:

- More granular criteria used to calculate scores
- Community based input on determining the criteria (Regen Score Proposals)
- Issue NFTs depending on your score ranking → (tiered NFTs: bronze/silver/gold etc.)
- Add Synthetix incentives and leaderboard for most volume exchange, longest hodler, etc.
- Add subgraph aggregate to track more DeFi/NFT projects

## Built with

- Figma
- NextJS & TypeScript
- The Graph ([Codegen Graph TS](https://github.com/dbeal-eth/codegen-graph-ts))
