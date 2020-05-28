import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IndustryCard from './IndustryCard';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

function CardList() {
    const classes = useStyles();
    const items = [];

    return (
        <Grid container spacing={3}>
            {items.map((value, index) => {
                <Grid item sm={3}>
                    <IndustryCard />
                </Grid>
            })}
        </Grid>
    );
}

export default CardList;
