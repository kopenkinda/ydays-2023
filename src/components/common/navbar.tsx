import {Box, Grid, IconButton} from "@chakra-ui/react";
import {IconBuildingBank, IconChartPie, IconList, IconSchool} from "@tabler/icons";

export default function Navbar(){
    return (
    <Box
        className='sticky bottom-0 flex border-b border-gray-200 w-full'>
        <div className='w-full'>
            <Grid templateColumns='repeat(4, 1fr)'>
                <IconButton
                    colorScheme='blue'
                    size={'lg'}
                    aria-label='Search database'
                    icon={<IconChartPie />}
                />
                <IconButton
                    colorScheme='blue'
                    size={'lg'}
                    aria-label='Search database'
                    icon={<IconBuildingBank />}
                />
                <IconButton
                    colorScheme='blue'
                    size={'lg'}
                    aria-label='Search database'
                    icon={<IconSchool />}
                />
                <IconButton
                    colorScheme='blue'
                    size={'lg'}
                    aria-label='Search database'
                    icon={<IconList />}
                />
            </Grid>
        </div>
    </Box>
    )
}