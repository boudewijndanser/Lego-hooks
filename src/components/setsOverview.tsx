import { tmpData } from '../tmpData'
import { OverviewCard } from './overviewCard'
import ImageList from '@mui/material/ImageList'
import Box from '@mui/material/Box'
import { countElementsInArray, getYearsFromSets } from './setsOverviewUtils'

export const SetsOverview = ():JSX.Element => {
    let counted: string[] = countElementsInArray(getYearsFromSets(tmpData))
    console.log(counted.filter((x, i, a) => a.indexOf(x) == i))

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