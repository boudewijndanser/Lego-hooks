import * as React from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

export const OverviewCard = (title: string, year: number, imgURL: string): JSX.Element => {

    return(
        <ImageListItem key={imgURL}>
          <img
            src={`${imgURL}?w=248&fit=crop&auto=format`}
            srcSet={`${imgURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
          />
          <ImageListItemBar
            title={title}
            subtitle={<span>Released: {year}</span>}
            position="below"
          />
        </ImageListItem>
    )
}