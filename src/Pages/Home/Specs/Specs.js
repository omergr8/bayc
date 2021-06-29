import React from "react";
import { Grid, Link } from "@material-ui/core";
import classes from "./Specs.module.css";
import specImage from "../../../Assets/specImage.gif";

const Spec = () => {
  return (
    <>
      <div className={classes.cMain}>
        <Grid container spacing={3}>
          <Grid item xl={7} md={7} xs={12}>
            <h1 className={classes.heading1}>THE SPECS</h1>

            <p>
              Each Bored Ape is unique and programmatically generated from over
              170 possible traits, including expression, headwear, clothing, and
              more. All apes are dope, but some are rarer than others.
            </p>
            <p>
              The apes are stored as ERC-721 tokens on the Ethereum blockchain
              and hosted on IPFS. <Link href="!">(See Record and Proof.)</Link>{" "}
              Purchasing an ape costs 0.08 ETH.
            </p>
            <p>
              To access members-only areas such as{" "}
              <Link href="!">THE BATHROOM</Link>, Apeholders will need to be
              signed into their Metamask Wallet.
            </p>
          </Grid>
          <Grid item xl={5} md={5} xs={12}>
            <img width="80%" src={specImage} alt="specImage" />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Spec;
