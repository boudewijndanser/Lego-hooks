import { tmpData } from '../tmpData'
import { OverviewCard } from './overviewCard'
import ImageList from '@mui/material/ImageList'
import Box from '@mui/material/Box'
import { getValuesFromSets } from './setsOverviewUtils'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useEffect, useState }from 'react'
import { Set } from '../types'

export const SetsOverview = ():JSX.Element => {

    let uniqueYears: number [] = getValuesFromSets<number>(tmpData,'year').filter((x, i, a) => a.indexOf(x) == i).sort((a,b) => a - b)
    let uniqueThemes: string [] = getValuesFromSets<string>(tmpData,'theme').filter((x, i, a) => a.indexOf(x) == i).sort()
    
    const [selectedYear, setSelectedYear] = useState<string | undefined>('')
    const [selectedTheme, setSelectedTheme] = useState<string | undefined>('')
    const [filteredData, setFilteredData] = useState<Set[] | []>(tmpData)

    useEffect(() => {
        if (selectedYear !== '' && selectedTheme !== ''){
            console.log('both selected')
            setFilteredData(filteredData.filter(item => item.year.toString() === selectedYear))
        } 

        if (selectedYear !== ''){
            console.log('--> Only year')
            setFilteredData(filteredData.filter(item => item.year.toString() === selectedYear))
        }

    },[selectedYear])

    useEffect(() => {
        if (selectedTheme !== '' && selectedYear !== ''){
            setFilteredData(filteredData.filter(item => item.theme === selectedTheme))
        }

        if (selectedTheme !== ''){
            console.log('--> Only theme')
            setFilteredData(filteredData.filter(item => item.theme === selectedTheme))
        }


    },[selectedTheme])

    useEffect(() => {
        if (selectedTheme === '' && selectedYear === ''){
            console.log('---> Reset!')
            setFilteredData(tmpData)
        }

    },[selectedTheme, selectedYear])


  const handleYearChange = (event: SelectChangeEvent) => {
    setSelectedYear(event.target.value as string)
  }

  const handleThemeChange = (event: SelectChangeEvent) => {
    setSelectedTheme(event.target.value as string)
  }

  getValuesFromSets<string>(tmpData, '')

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
          onChange={handleYearChange}
        >
            <MenuItem value={''}>{'All'}</MenuItem> 
          {
            uniqueYears.map((item) => {
                return(
                    <MenuItem key={item.toString()} value={item.toString()}>{item}</MenuItem> 
                )
            })
          }

          
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label-2">Theme</InputLabel>
        <Select
          labelId="demo-simple-select-label-3"
          id="demo-simple-select-2"
          value={selectedTheme || ''}
          label="Theme"
          onChange={handleThemeChange}
        >
            <MenuItem value={''}>{'All'}</MenuItem> 
          {
            uniqueThemes.map((item) => {
                return(
                    <MenuItem key={item.toString()} value={item.toString()}>{item}</MenuItem> 
                )
            })
          }

          
        </Select>
      </FormControl>
    </Box>
        <Box sx={{ width: 1200, height: 700, overflowY: 'scroll' }}>
            <p>Total: {filteredData.length}</p>
      <ImageList variant="masonry" cols={3} gap={8}>
            {
                filteredData.map((item) => {
                    return(
                    OverviewCard(item.name, item.year, item.image.thumbnailURL))
                })
            }
        </ImageList>
        </Box>
        </>
    )
}