import * as React from 'react'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

export const OverviewCard = (title: string, year: number, imgURL: string, theme: string): JSX.Element => {

    return(
        <ImageListItem key={imgURL}>
          <img
            src={`${imgURL}?w=248&fit=crop&auto=format`}
            srcSet={`${imgURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
          />
            <h4>{title}</h4>
            <div><h6>Released: {year}</h6>
          <h6>Theme: {theme}</h6>
          </div>
        </ImageListItem>
    )
}