import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Stack,
    TextField,
    Typography
  } from "@mui/material";
  import PropTypes from "prop-types";
  import axios from "axios";
  import toast from "react-hot-toast";
  import { useEffect, useState } from "react";
  import Iconify from "../../../components/iconify";
  import { useAuth } from "../../../hooks/useAuth";
  
  const BookReturnForm = ({
                          handleAddReturn,
                          handleUpdateReturn,
                          isUpdateForm,
                          isModalOpen,
                          handleCloseModal,
                          returnBook,
                          setReturn,
                        }) => {
    const {user} = useAuth();
    const [members, setMembers] = useState([]);
    const [books, setBooks] = useState([]);
  
    const getAllMembers = () => {
      axios.get('http://localhost:8080/api/user/getAllMembers')
        .then((response) => {
          // handle success
          console.log(response.data)
          if (user.isAdmin) {
            setMembers(response.data.membersList)
          } else {
            setMembers(response.data.membersList.filter((member) => user._id === member._id))
          }
          setReturn({...returnBook, memberId: user._id})
        })
        .catch((error) => {
          // handle error
          toast.error("Error fetching members")
          console.log(error);
        })
    }
  
    const getAllBooks = () => {
      axios.get('http://localhost:8080/api/book/getAll')
        .then((response) => {
          // handle success
          console.log(response.data)
          setBooks(response.data.booksList)
        })
        .catch((error) => {
          // handle error
          toast.error("Error fetching books")
          console.log(error);
        })
    }
  
    // Load data on initial page load
    useEffect(() => {
      getAllMembers();
      getAllBooks();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      bgcolor: 'white',
      borderRadius: '20px',
      boxShadow: 16,
      p: 4,
    };
  
  
    return (
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <Typography variant="h4" textAlign="center" paddingBottom={2} paddingTop={1}>
              {isUpdateForm ? <span>Update</span> : <span>Add</span>} return
            </Typography>
            <Stack spacing={3} paddingY={2}>
  
  
              <Grid container spacing={0} sx={{paddingBottom: "4px"}}>
                <Grid item xs={12} md={6} paddingRight={1}>
                  <FormControl sx={{m: 0}} fullWidth>
                    <InputLabel id="member-label">Member</InputLabel>
                    <Select
                      required
                      disabled={!user.isAdmin}
                      labelId="member-label"
                      id="member"
                      value={returnBook.memberId}
                      label="Member"
                      onChange={(e) => setReturn({...returnBook, memberId: e.target.value})}>
                      {
                        members.map((member) => <MenuItem key={member._id}
                                                          value={member._id}>{member.name}</MenuItem>)
                      }
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
  
              <TextField fullWidth name="bookName" label="Book name" type="text" value={returnBook.bookName}
                         onChange={(e) => setReturn({...returnBook, bookName: e.target.value})}/>
  
              <Grid container spacing={0} sx={{paddingBottom: "4px"}}>
                <Grid item xs={12} md={6} paddingRight={1}>
                  <TextField fullWidth name="dueDate" label="Due date" type="date" value={returnBook.dueDate}
                             required
                             InputLabelProps={{shrink: true}}
                             onChange={(e) => setReturn({...returnBook, dueDate: e.target.value})}/>
                </Grid>
              </Grid>
  
              <TextField fullWidth name="status" label="Status" type="text" value={returnBook.status}
                         onChange={(e) => setReturn({...returnBook, status: e.target.value})}/>
  
  
              <br/>
              <Box textAlign="center">
                <Box textAlign="center" paddingBottom={2}>
                  <Button size="large" variant="contained"
                          onClick={isUpdateForm ? handleUpdateReturn : handleAddReturn}
                          startIcon={<Iconify icon="bi:check-lg"/>} style={{marginRight: "12px"}}>
                    Submit
                  </Button>
  
                  <Button size="large" color="inherit" variant="contained" onClick={handleCloseModal}
                          startIcon={<Iconify icon="charm:cross"/>} style={{marginLeft: "12px"}}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Modal>
    );
  }
  
  BookReturnForm.propTypes = {
    isUpdateForm: PropTypes.bool,
    isModalOpen: PropTypes.bool,
    handleCloseModal: PropTypes.func,
    returnBook: PropTypes.object,
    setReturn: PropTypes.func,
    handleAddReturn: PropTypes.func,
    handleUpdateReturn: PropTypes.func
  };
  
  export default BookReturnForm
  