import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IndustryCard from './IndustryCard'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

function CardList() {
  const style = useStyles
  const items = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <Grid container>
      <Grid item sm={10}>
        <Grid container spacing={5}>
          {items.map((value, index) => (
            <Grid item sm={4}>
              <IndustryCard company={value} description="hello" key={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CardList
