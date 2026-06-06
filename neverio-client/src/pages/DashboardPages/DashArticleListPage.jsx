import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  Stack,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { fetchArticles, createArticle, updateArticle, deleteArticle } from "../../services/articleService";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 600 },
  bgcolor: "#fDFDFD",
  border: "2px solid #384355",
  borderRadius: "24px",
  boxShadow: "8px 8px 0px 0px #384355",
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
  fontFamily: "'Poppins', sans-serif",
};

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    border: "2px solid #384355",
    "& fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    transition: "all 0.2s ease-in-out",
  },
  "& .MuiInputLabel-root": {
    color: "#384355",
    fontWeight: 500,
    fontFamily: "'Poppins', sans-serif",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#384355",
  },
};

const DashArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editArticleId, setEditArticleId] = useState(null);

  const [newArticle, setNewArticle] = useState({
    name: "",
    title: "",
    imageUrl: "",
    content: "",
  });

  const loadArticles = async () => {
    setLoading(true);
    try {
      const response = await fetchArticles();
      const fetchedData = response.data?.data || [];
      setArticles(fetchedData);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleOpen = () => {
    setNewArticle({ name: "", title: "", imageUrl: "", content: "" });
    setIsEditing(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditArticleId(null);
  };

  const handleEdit = (article) => {
    const contentString = Array.isArray(article.content)
      ? article.content.join("\n\n")
      : article.content;

    setNewArticle({
      name: article.name,
      title: article.title,
      imageUrl: article.imageUrl,
      content: contentString,
    });
    setEditArticleId(article._id);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteArticle(id);
        loadArticles();
      } catch (error) {
        console.error("Error deleting article:", error);
      }
    }
  };

  const handleSaveArticle = async () => {
    try {
      const payload = {
        name: newArticle.name,
        title: newArticle.title,
        imageUrl: newArticle.imageUrl,
        content: newArticle.content,
      };

      if (isEditing) {
        await updateArticle(editArticleId, payload);
      } else {
        await createArticle(payload);
      }
      await loadArticles();
      handleClose();
    } catch (error) {
      console.error("Error saving article:", error);
      const errorMsg =
        error.response?.data?.message ||
        "Check if URL Name is unique and all fields are filled.";
      alert("Failed to save article: " + errorMsg);
    }
  };

  const columns = [
    { 
      field: "title", 
      headerName: "Title", 
      flex: 1.5,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ fontWeight: 600, color: "#384355", fontFamily: "'Poppins', sans-serif" }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: "name", 
      headerName: "URL Name", 
      flex: 1,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif", color: "text.secondary" }}>
          {params.value}
        </Typography>
      )
    },
    {
      field: "content",
      headerName: "Paragraphs",
      flex: 0.6,
      renderCell: (params) => (
        <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif", color: "text.secondary" }}>
          {params.row?.content ? params.row.content.length : 0} p.
        </Typography>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ height: "100%", alignItems: "center" }}
        >
          <IconButton
            onClick={() => handleEdit(params.row)}
            sx={{
              color: "#384355",
              border: "2px solid #384355",
              backgroundColor: "#FCF886",
              boxShadow: "1px 1px 0px 0px #384355",
              transition: "all 0.1s ease",
              "&:hover": {
                backgroundColor: "#FCF886",
                boxShadow: "2px 2px 0px 0px #384355",
                transform: "translate(-1px, -1px)",
              },
              "&:active": {
                transform: "translate(0px, 0px)",
                boxShadow: "0px 0px 0px 0px #384355",
              }
            }}
            size="small"
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => handleDelete(params.row._id)}
            sx={{
              color: "#fDFDFD",
              border: "2px solid #384355",
              backgroundColor: "#384355",
              boxShadow: "1px 1px 0px 0px #384355",
              transition: "all 0.1s ease",
              "&:hover": {
                backgroundColor: "#384355",
                color: "#fDFDFD",
                boxShadow: "2px 2px 0px 0px #384355",
                transform: "translate(-1px, -1px)",
              },
              "&:active": {
                transform: "translate(0px, 0px)",
                boxShadow: "0px 0px 0px 0px #384355",
              }
            }}
            size="small"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", minWidth: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header card with Neverio styling */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 3,
          bgcolor: "#fDFDFD",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: { xs: "stretch", sm: "center" } }}
        >
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", fontFamily: "'Outfit', sans-serif", color: "#384355" }}>
              Articles
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage summer news feed articles, modify headers, update thumbnails, or delete existing posts.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            onClick={handleOpen}
            sx={{
              borderRadius: "9999px",
              border: "2px solid #384355",
              backgroundColor: "#FCF886",
              color: "#384355",
              px: 4,
              py: 1.2,
              fontSize: "10px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              boxShadow: "2px 2px 0px 0px #384355",
              alignSelf: "flex-start",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#FCF886",
                border: "2px solid #384355",
                boxShadow: "4px 4px 0px 0px #384355",
                transform: "translate(-2px, -2px)",
              },
              "&:active": {
                boxShadow: "1px 1px 0px 0px #384355",
                transform: "translate(1px, 1px)",
              }
            }}
          >
            Add Article
          </Button>
        </Stack>
      </Paper>

      {/* Main Grid table with Neverio branding */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          bgcolor: "#fDFDFD",
          overflow: "hidden",
        }}
      >
        <Box sx={{ height: 500, width: "100%", bgcolor: "#fDFDFD", border: "2px solid #384355", borderRadius: "20px", overflow: "hidden" }}>
          <DataGrid
            rows={articles}
            columns={columns}
            getRowId={(row) => row._id || `temp-${Math.random()}`}
            loading={loading}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            pageSizeOptions={[10, 25]}
            disableRowSelectionOnClick
            sx={{
              border: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid rgba(56, 67, 85, 0.1)",
                color: "#384355",
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: "2.5px solid #384355",
                backgroundColor: "rgba(56, 67, 85, 0.04)",
                color: "#384355",
                fontWeight: 700,
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: 700,
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "2.5px solid #384355",
                backgroundColor: "rgba(56, 67, 85, 0.02)",
              },
              "& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus": {
                outline: "none",
              },
            }}
          />
        </Box>
      </Paper>

      {/* Modal Dialog */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h5" mb={3} fontWeight="bold" sx={{ color: "#384355", fontFamily: "'Outfit', sans-serif" }}>
            {isEditing ? "Edit Article" : "Publish New Article"}
          </Typography>
          <Divider sx={{ mb: 3, borderColor: "#384355", borderWidth: '1px' }} />

          <Stack spacing={2.5}>
            <TextField
              label="Article Title"
              fullWidth
              variant="outlined"
              value={newArticle.title}
              onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
              sx={inputStyles}
            />
            <TextField
              label="URL Name (slug)"
              placeholder="e.g. tips-for-vacation"
              fullWidth
              variant="outlined"
              value={newArticle.name}
              onChange={(e) => setNewArticle({ ...newArticle, name: e.target.value })}
              sx={inputStyles}
            />
            <TextField
              label="Image URL"
              fullWidth
              variant="outlined"
              value={newArticle.imageUrl}
              onChange={(e) => setNewArticle({ ...newArticle, imageUrl: e.target.value })}
              sx={inputStyles}
            />
            <TextField
              label="Content Paragraphs"
              helperText="Press Enter to separate content paragraphs."
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={newArticle.content}
              onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
              sx={inputStyles}
            />

            <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end", pt: 2 }}>
              <Button
                onClick={handleClose}
                sx={{
                  borderRadius: "9999px",
                  border: "2px solid #384355",
                  px: 4,
                  py: 1.2,
                  fontSize: "10px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#384355",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#384355",
                    color: "#fDFDFD",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleSaveArticle}
                disabled={!newArticle.title || !newArticle.name}
                sx={{
                  borderRadius: "9999px",
                  border: "2px solid #384355",
                  backgroundColor: "#FCF886",
                  color: "#384355",
                  px: 4,
                  py: 1.2,
                  fontSize: "10px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  boxShadow: "2px 2px 0px 0px #384355",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#FCF886",
                    color: "#384355",
                    boxShadow: "4px 4px 0px 0px #384355",
                    transform: "translate(-2px, -2px)",
                  },
                  "&:active": {
                    transform: "translate(1px, 1px)",
                    boxShadow: "1px 1px 0px 0px #384355",
                  },
                  "&:disabled": {
                    border: "2px solid rgba(56, 67, 85, 0.2)",
                    color: "rgba(56, 67, 85, 0.4)",
                    boxShadow: "none",
                  },
                }}
              >
                {isEditing ? "Save Changes" : "Publish"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default DashArticleListPage;
