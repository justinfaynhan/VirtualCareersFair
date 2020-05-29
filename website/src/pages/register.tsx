import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

function CardList() {
    const style = useStyles;
    const items = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div>
            LOL
        </div>
    );
}

export default CardList;
