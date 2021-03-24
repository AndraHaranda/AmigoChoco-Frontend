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
  const [Nome, SetNome] = useState('');
  const [Cpf, SetCpf] = useState('');
  const [Email, SetEmail] = useState('');
  const [EstadoCivil, SetEstadoCivil] = useState('');
  const [Hobies, SetHobies] = useState('');
  const [DataNasc, SetNasc] = useState('');
  const [Senha, SetSenha] = useState('');
  const [Imagem, SetImagem] = useState('');
  const [Carregando, SetCarregando] = useState(false);

  //cadastrar usuario no site

  async function handleNew(e) {
    e.preventDefault();
    const data = {
      Nome,
      Cpf,
      Email,
      EstadoCivil,
      DataNasc,
      Hobies,
      Imagem,
      Senha
    }
    console.log(data);
    try {
      SetCarregando(true);
      SetCarregando(false);
      alert('Cadastro realizado com sucesso');
      //caso não consiga carregar vai retornar o erro
    }
    catch (err) {
      alert('Erro ao tentar realizar o cadastro');
    }
  }

  //Fazer a parte de frontend juntando as informações da API
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
                value={Nome}
                onChange={e => SetNome(e.target.value)}
                autoComplete="fname"
                Name="firstName"
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
                value={Cpf}
                onChange={e => SetCpf(e.target.value)}
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
          <Grid item xs={12}>
            <TextField
              value={Email}
              onChange={e => SetEmail(e.target.value)}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={EstadoCivil}
                onChange={e => SetEstadoCivil(e.target.value)}
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
                value={DataNasc}
                onChange={e => SetNasc(e.target.value)}
                autoComplete="DataNasc"
                name="DataNasc"
                variant="outlined"
                required
                fullWidth
                id="DataNasc"
                label="Data de nascimento"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={Hobies}
                onChange={e => SetHobies(e.target.value)}
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
            <Grid item xs={12}>
            <TextField
              value={Imagem}
              onChange={e => SetImagem(e.target.value)}
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
              value={Senha}
              onChange={e => SetSenha(e.target.value)}
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
          <Button onClick={handleNew}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Criar 
          </Button> 
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={('/')}>
                Já tem conta? Entre aqui
              </Link>
            </Grid>
          </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
  }