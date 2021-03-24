import React, { useState } from 'react';
import api from '../../services/api'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EditarCurso() {
  const classes = useStyles();
  const [curso, setCurso] = useState('');
  const [nomeCurso, setNomeCurso] = useState('');
  const [descricao, setdescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [nroAula, setNnroAula] = useState('');
  const [nomeAula, setNomeAula] = useState('');
  const [carregando, setCarregando] = useState(false);

 
  const EditUser = _id => {
    api.put('grupo?_id'+_id)
    .then(res => {
      console.log(res.data);
      alert ("Criado com sucesso")
    })
  }

  async function handleNew(e) {
    e.preventDefault();
    const data = {
      nomeCurso,
      descricao,
      imagem,
      aulas : [{
        nroAula : Number,
        nomeAula : String,        
    }],
    }
    console.log(data);
    try {
      setCarregando(true);
      setCarregando(false);
      alert('Curso cadastrado com sucesso');

    }
    catch (err) {
      alert('Erro ao tentar fazer o cadastro de curso');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastrar Curso
      </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={nomeCurso}
                onChange={e => setNomeCurso(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome do Curso"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              value={imagem}
              onChange={e => setImagem(e.target.value)}
              variant="outlined"
              required
              fullWidth
              name="imagem"
              label="Imagem"
              type="Imagem"
              id="Imagem"
              autoComplete="current-imagem" 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={nroAula}
              onChange={e => setNnroAula(e.target.value)}
              variant="outlined"
              required
              fullWidth
              name="int"
              label="Numero de aulas"
              type="int"
              id="int"
              autoComplete="current-int" 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={nomeAula}
              onChange={e => setNomeAula(e.target.value)}
              variant="outlined"
              required
              fullWidth
              name="name"
              label="Nome da aula"
              type="name"
              id="name"
              autoComplete="current-name" 
            />
          </Grid> 
          <Button onClick={EditUser}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Criar 
          </Button> 
          </Grid>
        </form>
      </div>
    </Container>
  );
}