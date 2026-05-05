import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { Typography,} from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { RadarChart } from '@mui/x-charts/RadarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];


function ReportsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      {/* Charts */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
        <BarChart
          series={[
            { data: [35, 44, 24, 34], label: 'Series 1' },
            { data: [51, 6, 49, 30], label: 'Series 2' },
          ]}
          height={290}
          xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
          title="Quarterly Sales"
        />
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </Stack>

      <Box sx={{ width: '100%', height: 500 }}>
        <RadarChart
          height={500}
          series={[{ label: 'Lisa', data: [120, 98, 86, 99, 85, 65] }]}
          radar={{
            max: 120,
            metrics: ['Math', 'Chinese', 'English', 'Geography', 'Physics', 'History'],
          }}
        />
      </Box>

      <Box sx={{ width: '100%', height: 300 }}>
        <LineChart
            series={[
            { data: pData, label: 'pv', yAxisId: 'leftAxisId' },
            { data: uData, label: 'uv', yAxisId: 'rightAxisId' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels, height: 28 }]}
            yAxis={[
            { id: 'leftAxisId', width: 50 },
            { id: 'rightAxisId', position: 'right' },
            ]}
        />
        </Box>
    </>
  );
}

export default ReportsPage;