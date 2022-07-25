import { tmpData } from '../tmpData'
import { OverviewCard } from './overviewCard'
import ImageList from '@mui/material/ImageList'
import Box from '@mui/material/Box'

export const SetsOverview = ():JSX.Element => {

    return (

        <Box sx={{ width: 1500, height: 700, overflowY: 'scroll' }}>
            <p>Total: {tmpData.length}</p>
      <ImageList variant="masonry" cols={6} gap={8}>
            {
                tmpData.map((item) => {
                    return(
                    OverviewCard(item.name, item.year, item.image.thumbnailURL))
                })
            }
        </ImageList>
        </Box>
    )
}