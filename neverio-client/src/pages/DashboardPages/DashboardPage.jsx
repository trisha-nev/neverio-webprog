import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Gauge } from '@mui/x-charts/Gauge';
import { Typography, Card, CardContent, Button, Paper, Divider } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DashboardPage() {
  const location = useLocation();

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        Dashboard
      </Typography>

      {/* Summary Section */}
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Key Metrics
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} display="flex">
          <Card sx={{ flex: 1, bgcolor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Total Users
              </Typography>
              <Typography variant="h3" color="primary.main" fontWeight="bold">
                {rows.length}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Active users in the system
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1, bgcolor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Average Age
              </Typography>
              <Typography variant="h3" color="secondary.main" fontWeight="bold">
                {
                  (rows.reduce((sum, row) => sum + (row.age || 0), 0) /
                  rows.filter((row) => row.age !== null).length
                  ).toFixed(1)
                }
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Across all users
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1, bgcolor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Completion Rate
              </Typography>
              <Typography variant="h3" color="success.main" fontWeight="bold">
                87%
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Profile completion rate
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Paper>

      {/* Gauges Section */}
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Performance Gauges
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ mb: 2, display: 'block' }}>
          Real-time metrics monitoring
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="center" alignItems="center">
          <Box textAlign="center">
            <Gauge width={120} height={120} value={50} />
            <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
              Overall Performance
            </Typography>
          </Box>
          <Box textAlign="center">
            <Gauge width={120} height={120} value={50} valueMin={10} valueMax={60} />
            <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
              Target Achievement
            </Typography>
          </Box>
          <Box textAlign="center">
            <Gauge width={120} height={120} value={75} valueMin={0} valueMax={100} />
            <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
              Quality Score
            </Typography>
          </Box>
        </Stack>
      </Paper>

      {/* Charts Section */}
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Analytics Overview
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ mb: 2, display: 'block' }}>
          Quarterly sales and distribution analysis
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Box flex={1}>
            <Typography variant="subtitle1" gutterBottom align="center">
              Quarterly Sales
            </Typography>
            <BarChart
              series={[
                { data: [35, 44, 24, 34], label: 'Series 1' },
                { data: [51, 6, 49, 30], label: 'Series 2' },
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
              title="Quarterly Sales"
            />
          </Box>
          <Box flex={1}>
            <Typography variant="subtitle1" gutterBottom align="center">
              Market Share
            </Typography>
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
          </Box>
        </Stack>
      </Paper>

      {/* DataGrid Section */}
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
          Users Overview
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ mb: 2, display: 'block' }}>
          Complete list of registered users with editable fields
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            experimentalFeatures={{ newEditingApi: true }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Paper>
    </>
  );
}

export default DashboardPage;