import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import faqImage from "../../../Assets/faq.svg";
const useStyles = makeStyles((theme) => ({
  fMain: {
    paddingTop: "30px",
  },
  root: {
    width: "100%",
    marginTop: "30px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "800",
  },
  answer: {
    fontSize: "15px",
  },
  Accordion: {
    backgroundColor: "black",
    color: "white",
  },
  heading1: {
    textAlign: "left",
    color: "white",
  },
}));

export default function Faq() {
  const classes = useStyles();

  return (
    <div className={classes.fMain}>
      <h1 className={classes.heading1}>FAQ</h1>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <img src={faqImage} alt="faqImage" />
        </Grid>
        <Grid item xs={7}>
          <div className={classes.root}>
            <Accordion className={classes.Accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Which wallet can I use?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Use only Yoroi, Daedalus, AdaLite. Never send ADA from an
                  exchange.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.Accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Will there ever be more than 5000 HighSteaks minted?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  No, There will only be 5000 HighSteaks NFTs in existence.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.Accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  How can I get a HighSteak?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  You can buy a HighSteak by clicking on to the "Buy a Steak"
                  link on top of the page.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.Accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  How will sales be conducted?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  Each sale will be random and is fully automated. Your NFT will
                  be delivered to your wallet once you purchase an NFT.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.Accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  What is an NFT?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  A Non-Fungible Token is (NFT) is a unit of data stored on a
                  digital ledger, called a blockchain, that certifies a digital
                  asset to be unique and therefore non interchangeable.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
