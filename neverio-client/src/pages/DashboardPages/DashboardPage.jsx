import React from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Gauge } from '@mui/x-charts/Gauge';
import { Typography, Card, CardContent, Button, Paper, Divider, Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
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
    headerName: 'Full Name',
    sortable: false,
    width: 180,
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
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: "#384355" }}>
        Dashboard
      </Typography>

      {/* Summary Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: '#fDFDFD' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", mb: 3, color: '#384355' }}>
          Key Metrics
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#7FCC7E', border: '2px solid #384355', boxShadow: '3px 3px 0px 0px #384355', borderRadius: '20px' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="subtitle2" sx={{ color: '#384355', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }} gutterBottom>
                  Total Users
                </Typography>
                <Typography variant="h3" sx={{ color: '#384355', fontWeight: 900, my: 1, fontFamily: "'Outfit', sans-serif" }}>
                  {rows.length}
                </Typography>
                <Typography variant="caption" sx={{ color: '#384355', opacity: 0.7, fontWeight: 500 }}>
                  Active users in the system
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#8ED9F4', border: '2px solid #384355', boxShadow: '3px 3px 0px 0px #384355', borderRadius: '20px' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="subtitle2" sx={{ color: '#384355', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }} gutterBottom>
                  Average Age
                </Typography>
                <Typography variant="h3" sx={{ color: '#384355', fontWeight: 900, my: 1, fontFamily: "'Outfit', sans-serif" }}>
                  {
                    (rows.reduce((sum, row) => sum + (row.age || 0), 0) /
                    rows.filter((row) => row.age !== null).length
                    ).toFixed(1)
                  }
                </Typography>
                <Typography variant="caption" sx={{ color: '#384355', opacity: 0.7, fontWeight: 500 }}>
                  Across all system users
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: '#FCF886', border: '2px solid #384355', boxShadow: '3px 3px 0px 0px #384355', borderRadius: '20px' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="subtitle2" sx={{ color: '#384355', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }} gutterBottom>
                  Completion Rate
                </Typography>
                <Typography variant="h3" sx={{ color: '#384355', fontWeight: 900, my: 1, fontFamily: "'Outfit', sans-serif" }}>
                  87%
                </Typography>
                <Typography variant="caption" sx={{ color: '#384355', opacity: 0.7, fontWeight: 500 }}>
                  Profile completion rate
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Gauges Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: '#fDFDFD' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#384355' }}>
          Performance Gauges
        </Typography>
        <Typography variant="caption" sx={{ color: '#384355', opacity: 0.7, mb: 3, display: 'block', fontWeight: 500 }}>
          Real-time metrics monitoring
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" alignItems="center">
          <Box textAlign="center" sx={{ p: 2, border: '2px solid #384355', borderRadius: '20px', bgcolor: '#F9F9F6', width: 160 }}>
            <Gauge width={120} height={120} value={50} sx={{ '& .MuiGauge-valueArc': { fill: '#7FCC7E' } }} />
            <Typography variant="caption" sx={{ mt: 1, display: 'block', fontWeight: 700, color: '#384355', textTransform: 'uppercase', fontSize: '10px' }}>
              Performance
            </Typography>
          </Box>
          <Box textAlign="center" sx={{ p: 2, border: '2px solid #384355', borderRadius: '20px', bgcolor: '#F9F9F6', width: 160 }}>
            <Gauge width={120} height={120} value={50} valueMin={10} valueMax={60} sx={{ '& .MuiGauge-valueArc': { fill: '#8ED9F4' } }} />
            <Typography variant="caption" sx={{ mt: 1, display: 'block', fontWeight: 700, color: '#384355', textTransform: 'uppercase', fontSize: '10px' }}>
              Achievement
            </Typography>
          </Box>
          <Box textAlign="center" sx={{ p: 2, border: '2px solid #384355', borderRadius: '20px', bgcolor: '#F9F9F6', width: 160 }}>
            <Gauge width={120} height={120} value={75} valueMin={0} valueMax={100} sx={{ '& .MuiGauge-valueArc': { fill: '#FCF886' } }} />
            <Typography variant="caption" sx={{ mt: 1, display: 'block', fontWeight: 700, color: '#384355', textTransform: 'uppercase', fontSize: '10px' }}>
              Quality Score
            </Typography>
          </Box>
        </Stack>
      </Paper>

      {/* Charts Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: '#fDFDFD' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#384355' }}>
          Analytics Overview
        </Typography>
        <Typography variant="caption" sx={{ color: '#384355', opacity: 0.7, mb: 3, display: 'block', fontWeight: 500 }}>
          Quarterly sales and distribution analysis
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={7}>
            <Box sx={{ border: '2px solid #384355', borderRadius: '20px', p: 2, bgcolor: '#F9F9F6' }}>
              <Typography variant="subtitle1" gutterBottom align="center" sx={{ fontWeight: 700, color: '#384355' }}>
                Quarterly Sales
              </Typography>
              <BarChart
                series={[
                  { data: [35, 44, 24, 34], label: 'Q1-Q4 Actual' },
                  { data: [51, 6, 49, 30], label: 'Q1-Q4 Target' },
                ]}
                colors={['#7FCC7E', '#8ED9F4']}
                height={290}
                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{ border: '2px solid #384355', borderRadius: '20px', p: 2, bgcolor: '#F9F9F6', height: '100%', display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
              <Typography variant="subtitle1" gutterBottom align="center" sx={{ fontWeight: 700, color: '#384355' }}>
                Market Share
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, py: 2 }}>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: 'Series A' },
                        { id: 1, value: 15, label: 'Series B' },
                        { id: 2, value: 20, label: 'Series C' },
                      ],
                    },
                  ]}
                  colors={['#FCF886', '#8ED9F4', '#7FCC7E']}
                  width={340}
                  height={180}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* DataGrid Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, bgcolor: '#fDFDFD' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#384355' }}>
          Users Overview
        </Typography>
        <Typography variant="caption" sx={{ color: '#384355', opacity: 0.7, mb: 3, display: 'block', fontWeight: 500 }}>
          Complete list of registered users with editable fields
        </Typography>
        <Box sx={{ height: 400, width: '100%', border: '2px solid #384355', borderRadius: '20px', overflow: 'hidden', bgcolor: '#FDFDFD' }}>
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
            sx={{
              border: 'none',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              '& .MuiDataGrid-cell': {
                borderBottom: '1px solid rgba(56, 67, 85, 0.1)',
                color: '#384355',
              },
              '& .MuiDataGrid-columnHeaders': {
                borderBottom: '2.5px solid #384355',
                backgroundColor: 'rgba(56, 67, 85, 0.04)',
                color: '#384355',
                fontWeight: 700,
              },
              '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: 700,
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: '2.5px solid #384355',
                backgroundColor: 'rgba(56, 67, 85, 0.02)',
              },
            }}
          />
        </Box>
      </Paper>
    </>
  );
}

export default DashboardPage;