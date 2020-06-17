import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  image: {
    backgroundImage: 'url(https://www.modelosdeconvites.com.br/wp-content/uploads/2015/04/convite-amigo-chocolate-14.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
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

export default function Cadastro() {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [estadoCivil, setestadoCivil] = useState('');
  const [hobies, sethobies] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleNew(e) {
    e.preventDefault();
    const data = {
      nome,
      cpf,
      email,
      estadoCivil,
      hobies,
      senha
    }
    console.log(data);
    try {
      setCarregando(true);
      setCarregando(false);
      alert('Cadastro realizado com sucesso');

    }
    catch (err) {
      alert('Erro ao tentar logar no sistema');
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
          Cadastrar
      </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={nome}
                onChange={e => setNome(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome Completo"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                autoComplete="CPF"
                name="CPF"
                variant="outlined"
                required
                fullWidth
                id="CPF"
                label="CPF"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={email}
              onChange={e => setEmail(e.target.value)}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={estadoCivil}
                onChange={e => setestadoCivil(e.target.value)}
                autoComplete="EstadoCivil"
                name="EstadoCivil"
                variant="outlined"
                required
                fullWidth
                id="EstadoCivil"
                label="Estado Civil"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={hobies}
                onChange={e => sethobies(e.target.value)}
                autoComplete="hobies"
                name="hobies"
                variant="outlined"
                required
                fullWidth
                id="hobies"
                label="Hobbies"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={senha}
              onChange={e => setSenha(e.target.value)}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Criar Conta
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={('Login')}>
                Já tem conta? Entre aqui
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}