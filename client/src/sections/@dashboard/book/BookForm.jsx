import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";
import Iconify from "../../../components/iconify";

const BookForm = ({
                    isUpdateForm,
                    isModalOpen,
                    handleCloseModal,
                    book,
                    setBook,
                    handleAddBook,
                    handleUpdateBook
                  }) => {


  const [isModalLoading, setIsModalLoading] = useState(true)
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const getAllAuthors = () => {
    axios.get('http://localhost:8080/api/author/getAll')
      .then((response) => {
        // handle success
        console.log(response.data)
        setAuthors(response.data.authorsList)
      })
      .catch((error) => {
        // handle error
        toast.error("Error fetching authors")
        console.log(error);
      })
  }

  const getAllGenres = () => {
    axios.get('http://localhost:8080/api/genre/getAll')
      .then((response) => {
        // handle success
        console.log(response.data)
        setGenres(response.data.genresList)
        setIsModalLoading(false)
      })
      .catch((error) => {
        // handle error
        toast.error("Error fetching genres")
        console.log(error);
      })
  }

  // Load data on initial page load
  useEffect(() => {
    getAllAuthors();
    getAllGenres();
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'white',
    borderRadius: '20px',
    boxShadow: 16,
    p: 2,
  };

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=<API Key>",
        formData
      );
      const imageUrl = res.data.data.url;
      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan saat mengupload foto");
      }
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
            {isUpdateForm ? <span>Update</span> : <span>Add</span>} book
          </Typography>

          {
            isModalLoading ? <Grid padding={4} style={{"textAlign": "center"}}><CircularProgress/></Grid> :
              <Stack spacing={3} paddingY={2} paddingX={3}
                     height="600px"
                     overflow="scroll">

                <TextField name="name" label="Book name" value={book.name} autoFocus required
                           onChange={(e) => setBook({...book, name: e.target.value})}/>
                <TextField name="isbn" label="ISBN" value={book.isbn} required
                           onChange={(e) => setBook({...book, isbn: e.target.value})}/>
                <TextField name="brokenBook" label="Number of Broken Books" value={book.brokenBook} required
                           onChange={(e) => setBook({...book, brokenBook: e.target.value})}/>
                <TextField name="goodBook" label="Number of Good Books" value={book.goodBook} required
                           onChange={(e) => setBook({...book, goodBook: e.target.value})}/>
                <TextField name="publishYear" label="Publish Year" value={book.publishYear} required
                           onChange={(e) => setBook({...book, publishYear: e.target.value})}/>

                <FormControl sx={{m: 1}}>
                  <InputLabel id="author-label">Author</InputLabel>
                  <Select
                    labelId="author-label"
                    id="author"
                    value={book.authorId}
                    label="Author"
                    onChange={(e) => setBook({...book, authorId: e.target.value})}>
                    {
                      authors.map((author) => <MenuItem key={author._id} value={author._id}>{author.name}</MenuItem>)
                    }
                  </Select>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: 120}}>
                  <InputLabel id="genre-label">Genre</InputLabel>
                  <Select
                    labelId="genre-label"
                    id="genre"
                    value={book.genreId}
                    label="Genre"
                    onChange={(e) => setBook({...book, genreId: e.target.value})}>
                    {
                      genres.map((genre) => <MenuItem key={genre._id} value={genre._id}>{genre.name}</MenuItem>)
                    }
                  </Select>
                </FormControl>


                <FormControl>
                  <FormLabel id="available-label">Availability</FormLabel>
                  <RadioGroup
                    aria-labelledby="available-label"
                    defaultValue={book.isAvailable}
                    name="radio-buttons-group"
                    onChange={(e) => setBook({...book, isAvailable: e.target.value})}
                  >
                    <FormControlLabel value control={<Radio/>} label="Available"/>
                    <FormControlLabel value={false} control={<Radio/>} label="Not available"/>
                  </RadioGroup>
                </FormControl>

                <TextField name="summary" label="Summary" value={book.summary} multiline
                           rows={2}
                           maxRows={4}
                           onChange={(e) => setBook({...book, summary: e.target.value})}
                />
                <br/>
                <Box textAlign="center" paddingBottom={2}>
                  <Button size="large" variant="contained" onClick={isUpdateForm ? handleUpdateBook : handleAddBook}
                          startIcon={<Iconify icon="bi:check-lg"/>} style={{marginRight: "12px"}}>
                    Submit
                  </Button>

                  <Button size="large" color="inherit" variant="contained" onClick={handleCloseModal}
                          startIcon={<Iconify icon="charm:cross"/>} style={{marginLeft: "12px"}}>
                    Cancel
                  </Button>
                </Box>
              </Stack>
          }
        </Container>
      </Box>
    </Modal>
  );
}

BookForm.propTypes = {
  isUpdateForm: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  book: PropTypes.object,
  setBook: PropTypes.func,
  handleAddBook: PropTypes.func,
  handleUpdateBook: PropTypes.func
};

export default BookForm
