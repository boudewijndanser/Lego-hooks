import { tmpData } from '../tmpData'
import { OverviewCard } from './overviewCard'
import ImageList from '@mui/material/ImageList'
import Box from '@mui/material/Box'
import { countElementsInArray, getYearsFromSets } from './setsOverviewUtils'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'
import { Set } from '../types'

export const SetsOverview = ():JSX.Element => {
    // let counted: string[] = countElementsInArray(getYearsFromSets(tmpData))
    let unique: number [] = getYearsFromSets(tmpData).filter((x, i, a) => a.indexOf(x) == i).sort((a,b) => a - b)

    const [selectedYear, setSelectedYear] = React.useState<string | undefined>('');

    let filtered: Set[] = selectedYear === ''
        ? tmpData
        : tmpData.filter(item => item.year.toString() === selectedYear)

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedYear(event.target.value as string)
  };

    return (
        <>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label-2"
          id="demo-simple-select"
          value={selectedYear|| ''}
          label="Year"
          onChange={handleChange}
        >
            <MenuItem value={''}>{'All'}</MenuItem> 
          {
            unique.map((item) => {
                return(
                    <MenuItem key={item.toString()} value={item.toString()}>{item}</MenuItem> 
                )
            })
          }

          
        </Select>
      </FormControl>
    </Box>
        <Box sx={{ width: 1200, height: 700, overflowY: 'scroll' }}>
            <p>Total: {filtered.length}</p>
      <ImageList variant="masonry" cols={3} gap={8}>
            {
                filtered.map((item) => {
                    return(
                    OverviewCard(item.name, item.year, item.image.thumbnailURL))
                })
            }
        </ImageList>
        </Box>
        </>
    )
}