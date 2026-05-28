import { useState, useMemo, useEffect } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { fetchUsers, createUser, updateUser, deleteUser } from '../../services/userService';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  role: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? '').trim(),
        lastName: String(user.lastName ?? '').trim(),
        age: String(user.age ?? '').trim(),
        gender: genders.includes(String(user.gender ?? '').trim().toLowerCase())
          ? String(user.gender ?? '').trim().toLowerCase()
          : '',
        contactNumber: String(user.contactNumber ?? '').trim(),
        email: String(user.email ?? '').trim().toLowerCase(),
        role: roles.includes(String(user.role ?? '').trim().toLowerCase())
          ? String(user.role ?? '').trim().toLowerCase()
          : 'editor',
        username: String(user.username ?? '').trim().toLowerCase(),
        password: String(user.password ?? ''),
        address: String(user.address ?? '').trim(),
        isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch {
    return {
      users: [],
      error: 'Unable to read users from src/assets/users.json.',
    };
  }
};

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const loadUsersData = async () => {
    try {
      setLoading(true);
      const { data } = await fetchUsers();
      // Map API data (type) to frontend fields (role, id)
      const mappedUsers = (data.users || []).map(u => ({
        ...u,
        id: u._id,
        role: u.type || u.role || 'admin'
      }));
      setUsers(mappedUsers);
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsersData();
  }, []);

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user, password: '' } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();
    const contactNumber = form.contactNumber.trim();
    const age = String(form.age).trim();
    const password = form.password;

    // Required fields validation
    [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['age', 'Age'],
      ['gender', 'Gender'],
      ['contactNumber', 'Contact number'],
      ['email', 'Email'],
      ['role', 'Role'],
      ['username', 'Username'],
      ['address', 'Address'],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    // Password required on creation, optional on edit
    if (!modal.id && !password) {
      nextErrors.password = 'Password is required.';
    }

    // Email validation
    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address (e.g., name@example.com).';
    }

    // Email uniqueness validation
    if (!nextErrors.email && users.some((user) => user.id !== modal.id && user.email === email)) {
      nextErrors.email = 'Email address already exists.';
    }

    // Username validation
    if (!nextErrors.username) {
      if (username.includes(' ')) {
        nextErrors.username = 'Username cannot contain spaces.';
      } else if (users.some((user) => user.id !== modal.id && user.username === username)) {
        nextErrors.username = 'Username already exists.';
      }
    }

    // Password validation (if supplied)
    if (password && password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters long.';
    }

    // Contact number validation
    if (!nextErrors.contactNumber) {
      const digitsOnly = contactNumber.replace(/\D/g, '');
      if (digitsOnly.length !== 11) {
        nextErrors.contactNumber = 'Contact number must be exactly 11 digits.';
      } else if (!/^\d+$/.test(contactNumber.replace(/[\s-]/g, ''))) {
        nextErrors.contactNumber = 'Contact number must contain only numbers.';
      }
    }

    // Age validation
    if (!nextErrors.age) {
      const ageNum = Number(age);
      if (isNaN(ageNum)) {
        nextErrors.age = 'Age must be a number.';
      } else if (ageNum < 0 || ageNum > 150) {
        nextErrors.age = 'Age must be between 0 and 150.';
      }
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const newUserPayload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age,
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role.trim().toLowerCase(), // map 'role' to 'type'
      username: form.username.trim().toLowerCase(),
      address: form.address.trim(),
      isActive: form.isActive,
    };

    try {
      if (modal.id) {
        // Edit User
        if (form.password) {
          newUserPayload.password = form.password;
        }
        await updateUser(modal.id, newUserPayload);
      } else {
        // Add User
        newUserPayload.password = form.password;
        await createUser(newUserPayload);
      }
      await loadUsersData();
      closeModal();
    } catch (err) {
      console.error('Error saving user:', err);
      const serverMsg = err.response?.data?.message || 'Failed to save user. Verify details are unique.';
      alert(serverMsg);
    }
  };

  const toggleStatus = async (id) => {
    const userToToggle = users.find(u => u.id === id);
    if (!userToToggle) return;
    try {
      await updateUser(id, { isActive: !userToToggle.isActive });
      await loadUsersData();
    } catch (err) {
      console.error('Error toggling status:', err);
    }
  };

  const handleDelete = async () => {
    if (!modal.id) return;
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(modal.id);
        await loadUsersData();
        closeModal();
      } catch (err) {
        console.error('Error deleting user:', err);
      }
    }
  };

  // Filter users based on search and filters
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase());

      // Role filter
      const matchesRole = roleFilter === 'all' || user.role === roleFilter;

      // Gender filter
      const matchesGender = genderFilter === 'all' || user.gender === genderFilter;

      // Status filter
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'active' && user.isActive) ||
        (statusFilter === 'inactive' && !user.isActive);

      return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });
  }, [users, searchTerm, roleFilter, genderFilter, statusFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setRoleFilter('all');
    setGenderFilter('all');
    setStatusFilter('all');
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      minWidth: 170,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim(),
    },
    { field: 'username', headerName: 'Username', minWidth: 150 },
    { field: 'age', headerName: 'Age', width: 90 },
    {
      field: 'gender',
      headerName: 'Gender',
      minWidth: 110,
      valueGetter: (_, row) => labelize(row.gender),
    },
    { field: 'contactNumber', headerName: 'Contact Number', minWidth: 160 },
    { field: 'email', headerName: 'Email', flex: 1.2, minWidth: 220 },
    {
      field: 'role',
      headerName: 'Role',
      minWidth: 120,
      valueGetter: (_, row) => labelize(row.role),
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          color={row.isActive ? 'success' : 'default'}
          variant={row.isActive ? 'filled' : 'outlined'}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 220,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button size="small" variant="outlined" onClick={() => openModal(row)}>
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color={row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(row.id)}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', minWidth: 0 }}>
      {/* Header Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Users
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage system users, their roles, and account status. Create, edit, or deactivate user accounts.
            </Typography>
          </Box>

          {/* Search and Filter */}
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
            {/* Search Bar */}
            <TextField
              size="small"
              label="Search users"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, or username..."
              sx={{ flex: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={() => setSearchTerm('')}>
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
            {/* Role Filter */}
            <FormControl size="small" sx={{ flex: 1 }}>
              <InputLabel>Role</InputLabel>
              <Select
                value={roleFilter}
                label="Role"
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <MenuItem value="all">All Roles</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="viewer">Viewer</MenuItem>
              </Select>
            </FormControl>
            
            {/* Gender Filter */}
            <FormControl size="small" sx={{ flex: 1 }}>
              <InputLabel>Gender</InputLabel>
              <Select
                value={genderFilter}
                label="Gender"
                onChange={(e) => setGenderFilter(e.target.value)}
              >
                <MenuItem value="all">All Genders</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            
            {/* Status Filter */}
            <FormControl size="small" sx={{ flex: 1 }}>
              <InputLabel>Status</InputLabel>
              <Select
                value={statusFilter}
                label="Status"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="all">All Status</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            
            {/* Clear Filters Button */}
            <Button
              variant="outlined"
              onClick={clearFilters}
              size="medium"
              sx={{ flex: 0.5, minWidth: '100px' }}
            >
              Clear
            </Button>
            
            {/* Add User Button */}
            <Button
              variant="contained"
              onClick={() => openModal()}
              size="medium"
              sx={{ flex: 0.5, minWidth: '140px' }}
            >
              Add New User
            </Button>
          </Stack>

          {/* Filter summary */}
          {(searchTerm || roleFilter !== 'all' || genderFilter !== 'all' || statusFilter !== 'all') && (
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center', pt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                Active filters:
              </Typography>
              {searchTerm && (
                <Chip label={`Search: ${searchTerm}`} size="small" onDelete={() => setSearchTerm('')} />
              )}
              {roleFilter !== 'all' && (
                <Chip label={`Role: ${labelize(roleFilter)}`} size="small" onDelete={() => setRoleFilter('all')} />
              )}
              {genderFilter !== 'all' && (
                <Chip label={`Gender: ${labelize(genderFilter)}`} size="small" onDelete={() => setGenderFilter('all')} />
              )}
              {statusFilter !== 'all' && (
                <Chip label={`Status: ${labelize(statusFilter)}`} size="small" onDelete={() => setStatusFilter('all')} />
              )}
            </Box>
          )}
        </Stack>
      </Paper>



      {/* Users Table Section */}
      <Paper elevation={3} sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2, px: 1 }}>
          User Table
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block', px: 1 }}>
          Showing {filteredUsers.length} of {users.length} total users
        </Typography>
        
        {filteredUsers.length ? (
          <Box sx={{ height: { xs: 400, sm: 520 }, width: '100%', minWidth: 0 }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10, 25]}
              initialState={{
                pagination: { paginationModel: { pageSize: 5, page: 0 } },
              }}
              sx={{
                minWidth: 0,
                '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': {
                  outline: 'none',
                },
              }}
            />
          </Box>
        ) : (
          <Alert severity="info" sx={{ m: 2 }}>
            No users found matching your criteria. Try adjusting your search or filters.
          </Alert>
        )}
      </Paper>

      {/* Add/Edit User Dialog */}
      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle sx={{ fontWeight: 'bold' }}>
            {modal.id ? 'Edit User' : 'Add New User'}
          </DialogTitle>
          <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('age', 'Age', { type: 'number' })} />
                <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('contactNumber', 'Contact Number', { 
                  placeholder: 'e.g., 09123456789',
                  helperText: errors.contactNumber || 'Enter exactly 11 digits'
                })} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('role', 'Role', { select: true })}>
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {labelize(role)}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField {...fieldProps('username', 'Username', { 
                  placeholder: 'No spaces allowed',
                  helperText: errors.username || 'Username cannot contain spaces'
                })} />
              </Stack>
              <TextField
                {...fieldProps('password', 'Password', {
                  type: showPassword ? 'text' : 'password',
                  placeholder: 'Minimum 8 characters',
                  helperText: errors.password || 'Password must be at least 8 characters',
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword((prev) => !prev)}
                            onMouseDown={(event) => event.preventDefault()}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />
              <TextField
                {...fieldProps('address', 'Address', { multiline: true, rows: 3 })}
              />
              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                }
                label={form.isActive ? 'User status: Active' : 'User status: Inactive'}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2 }}>
            {modal.id && (
              <Button color="error" onClick={handleDelete} sx={{ mr: 'auto' }}>
                Delete User
              </Button>
            )}
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained">
              {modal.id ? 'Update User' : 'Save User'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;