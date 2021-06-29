import classes from "../Roadmap.module.css";

const listData = [
  {
    id: 1,
    percentage: "10%",
    title: "We pay back our moms.",
  },
  {
    id: 2,
    percentage: "20%",
    title:
      "We release the Caged Apes. 5 Caged Apes (tokens held back from the sale) are airdropped to random Apeholders.",
  },
  {
    id: 3,
    percentage: "40%",
    title:
      "BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to Ape into Shitcoins To.",
  },
  {
    id: 4,
    percentage: "60%",
    title:
      "Member-Exclusive BAYC Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies.",
  },
  {
    id: 5,
    percentage: "80%",
    title:
      "The clubhouse image becomes interactive and the Mysterious Note becomes legible, beginning a treasure hunt. The first to solve the mystery will be rewarded 5 ETH and a Bored Ape.",
  },
  {
    id: 6,
    percentage: "90%",
    title: "The Bored Ape liquidity pool is initiated.",
  },
  {
    id: 7,
    percentage: "100%",
    title:
      "The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And we cook up new ways to ape with our friends.",
  },
];
const List = () => {
  return (
    <div>
      {listData.map((data, index) => (
        <div key={index} className={classes.listData}>
          <p>{data.percentage}</p>
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
};
export default List;
