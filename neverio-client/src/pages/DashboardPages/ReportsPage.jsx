import { useRef } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BarChart } from '@mui/x-charts/BarChart';
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

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;

    if (!printContent) {
      return;
    }

    const printWindow = window.open('', '_blank', 'width=1200,height=900');

    if (!printWindow) {
      return;
    }

    const headMarkup = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((node) => node.outerHTML)
      .join('');

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Print Report</title>
        ${headMarkup}
        <style>
          @page {
            size: A4;
            margin: 16mm;
          }
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #fff;
            color: #1f2937;
          }
          .report-shell {
            padding: 20px;
          }
          .report-header {
            margin-bottom: 24px;
            padding-bottom: 14px;
            border-bottom: 1px solid #d1d5db;
          }
          .report-header h1 {
            margin: 0 0 6px;
            font-size: 28px;
            font-weight: 700;
          }
          .report-header p {
            margin: 0;
            font-size: 14px;
            color: #6b7280;
            line-height: 1.5;
          }
          .report-content .MuiPaper-root {
            box-shadow: none !important;
            border: 1px solid #e5e7eb;
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 20px;
          }
          .report-content .MuiCardContent-root {
            padding: 20px;
          }
          .report-content svg {
            max-width: 100%;
          }
        </style>
      </head>
      <body>
        <div class="report-shell">
          <main class="report-header">
            <header class="report-header">
              <h1>Reports Summary</h1>
              <p>Analytics overview showing sales performance, visitor metrics, and radar analysis.</p>
              <p>Prepared on ${exportedAt}</p>
            </header>
            <section class="report-content">
              ${printContent.outerHTML}
            </section>
          </main>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: '#384355' }}>
            Reports
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Comprehensive analytics dashboard showing sales performance, visitor metrics, and subject-based radar analysis.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button variant="contained" color="secondary" sx={{ border: '2px solid #384355', boxShadow: '2px 2px 0px 0px #384355', fontWeight: 700, '&:hover': { bgcolor: '#FCF886', transform: 'translate(-1px, -1px)', boxShadow: '3px 3px 0px 0px #384355' } }}>Generate</Button>
          <Button variant="outlined" color="primary" onClick={handlePrint} sx={{ border: '2px solid #384355', boxShadow: '2px 2px 0px 0px #384355', fontWeight: 700, '&:hover': { transform: 'translate(-1px, -1px)', boxShadow: '3px 3px 0px 0px #384355' } }}>Export</Button>
          <Button variant="outlined" color="primary" sx={{ border: '2px solid #384355', boxShadow: '2px 2px 0px 0px #384355', fontWeight: 700, '&:hover': { transform: 'translate(-1px, -1px)', boxShadow: '3px 3px 0px 0px #384355' } }}>Filter</Button>
        </Stack>
      </Stack>

      <Stack ref={printRef} spacing={4}>
        {/* Bar Chart and Pie Chart Section */}
        <Paper elevation={3} sx={{ p: 3, bgcolor: '#fDFDFD' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", mb: 1, color: '#384355' }}>
            Quarterly Sales & Distribution
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', mb: 3, display: 'block', fontWeight: 500 }}>
            Sales performance across quarters and category distribution analysis
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Box sx={{ border: '2px solid #384355', borderRadius: '20px', p: 2, bgcolor: '#F9F9F6' }}>
                <Typography variant="subtitle1" gutterBottom align="center" sx={{ fontWeight: 700, color: '#384355' }}>
                  Quarterly Sales Overview
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
            <Grid item xs={12} md={5}>
              <Box sx={{ border: '2px solid #384355', borderRadius: '20px', p: 2, bgcolor: '#F9F9F6', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" gutterBottom align="center" sx={{ fontWeight: 700, color: '#384355' }}>
                  Market Distribution
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
                    width={320}
                    height={180}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Radar Chart Section */}
        <Paper elevation={3} sx={{ p: 3, bgcolor: '#fDFDFD' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", mb: 1, color: '#384355' }}>
            Performance Radar Chart
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', mb: 3, display: 'block', fontWeight: 500 }}>
            Subject-wise performance metrics showing proficiency across different domains
          </Typography>
          <Box sx={{ width: '100%', height: 500, border: '2px solid #384355', borderRadius: '20px', p: 2, bgcolor: '#F9F9F6' }}>
            <RadarChart
              height={460}
              series={[{ label: 'Lisa', data: [120, 98, 86, 99, 85, 65] }]}
              colors={['#7FCC7E']}
              radar={{
                max: 120,
                metrics: ['Math', 'Chinese', 'English', 'Geography', 'Physics', 'History'],
              }}
            />
          </Box>
        </Paper>

        {/* Line Chart Section */}
        <Paper elevation={3} sx={{ p: 3, bgcolor: '#fDFDFD' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, fontFamily: "'Outfit', sans-serif", mb: 1, color: '#384355' }}>
            Visitor Trends Analysis
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', mb: 3, display: 'block', fontWeight: 500 }}>
            Comparative analysis of page views (pv) and unique visitors (uv) over time
          </Typography>
          <Box sx={{ width: '100%', height: 320, border: '2px solid #384355', borderRadius: '20px', p: 2, bgcolor: '#F9F9F6' }}>
            <LineChart
              series={[
                { data: pData, label: 'pv (Page Views)', yAxisId: 'leftAxisId' },
                { data: uData, label: 'uv (Unique Visitors)', yAxisId: 'rightAxisId' },
              ]}
              colors={['#8ED9F4', '#7FCC7E']}
              xAxis={[{ scaleType: 'point', data: xLabels, height: 28, label: 'Pages' }]}
              yAxis={[
                { id: 'leftAxisId', width: 50, label: 'Page Views' },
                { id: 'rightAxisId', position: 'right', label: 'Unique Visitors' },
              ]}
            />
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};

export default ReportsPage;