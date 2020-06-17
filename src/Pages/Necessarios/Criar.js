import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
    }
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    avatar: {
        margin: theme.spacing(2),
        textAlign: 'center',
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

export default function Criar() {
    const classes = useStyles();
    const [nomeGrupo, setNomeGrupo] = useState('');
    const [descricao, setdescricao] = useState('');
    const [integrantes, setintegrantes] = useState('');
    const [imagem, setimagem] = useState('');
    const [setCarregando] = useState(false);

    async function handleNew(e) {
        e.preventDefault();
        const data = {
            nomeGrupo,
            descricao,
            integrantes,
            imagem
        }
        console.log(data);
        try {
            setCarregando(true);
            setCarregando(false);
            alert('Cadastro realizado com sucesso');

        }
        catch (err) {
            alert('Erro ao tentar criar um novo grupo');
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar>
        <FolderIcon />
      </Avatar>
                <Typography component="h1" variant="h5">
                    Novo Grupo
      </Typography>
                <form className={classes.form} noValidate>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                    >
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="stretch"
                        >
                            <TextField
                                value={nomeGrupo}
                                onChange={e => setNomeGrupo(e.target.value)}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Nome do Grupo"
                                autoFocus
                            />
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="stretch"
                        >
                            <TextField
                                value={descricao}
                                onChange={e => setdescricao(e.target.value)}
                                autoComplete="CPF"
                                name="descricao"
                                variant="outlined"
                                required
                                fullWidth
                                id="descricao"
                                label="Descrição"
                                autoFocus
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                    >
                        <TextField
                            value={integrantes}
                            onChange={e => setintegrantes(e.target.value)}
                            variant="outlined"
                            required
                            fullWidth
                            id="integrantes"
                            label="Integrantes"
                            name="integrantes"
                            autoComplete="integrantes"
                        />
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                    >
                        <TextField
                            value={imagem}
                            onChange={e => setimagem(e.target.value)}
                            variant="outlined"
                            required
                            fullWidth
                            id="imagem"
                            label="Imagem"
                            name="imagem"
                            autoComplete="imagem"
                        />
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Criar Grupo
          </Button>

                </form>
            </div>
        </Container>
    );
}