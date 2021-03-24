import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: 'url(https://divertidamentedoces.com/wp-content/uploads/2018/03/Background-3.png)',
    padding: theme.spacing(2, 1, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    flexDirection: 'column',
    margin: theme.spacing(2),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  Btns:
  {
    align: 'center',
    margin: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#15489',

  },
  media: {
    height: 140,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Pessoa() {
  const classes = useStyles();
  const [pessoa, setPessoa] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const deleteUser = cpf => {

    api.delete('pessoa?cpf=' + cpf)
      .then(res => {
        console.log(res.data);
        alert("Deletado com sucesso");
        window.location.reload();
      });

    setOpen(false);
  }

  const EditUser = cpf => {
    api.put('pessoa?_id' + cpf)
      .then(res => {
        console.log(res.data);
        alert("Criado com sucesso")
      })
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      api.get('pessoa').then(response => {
        setPessoa(response.data)
      });
    }, 5);

    return () => clearTimeout(timer);

  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Minha conta</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Mensagens</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificações</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Grid>
      <CssBaseline />

      <AppBar position="static">

        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Amigo Chocolate Online
          </Typography>
          <SearchIcon />
          <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid className={classes.heroContent}>
        <Typography variant="h5" align="center" color="textPrimary" paragraph>
          <Box fontWeight="fontWeightBold" m={1}>
            Bem vindos(as) ao nosso site, onde o seu Amigo Chocolate fica muito mais gostoso e divertido!
            </Box>
          <Button className={classes.Btns} variant="contained">
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={('cursos')}>
              Cursos
                </Link>
          </Button>
          <Button variant="contained">
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={('main')}>
              Principal
                </Link>
          </Button>
        </Typography>
        <Typography variant="h5" align="center" color="textPrimary" paragraph>
          <Box fontWeight="fontWeightBold" m={1}>
            Temos uma rede ampla de participantes
            </Box>
        </Typography>
        <Grid container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {pessoa && pessoa.map(pessoa => (

            <Card key={pessoa._id} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <img alt="FotodoCurso" width="350" height="240" src={pessoa.imagem} />
                <Typography gutterBottom variant="h5" component="h2">
                  <Box fontWeight="fontWeightBold" m={1}>
                    {pessoa.nome}
                  </Box>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Box fontStyle="oblique" m={1}>
                    Email: {pessoa.email}
                  </Box>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Box fontStyle="oblique" m={1}>
                    Data de Nascimento: {pessoa.dataNasc}
                  </Box>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Box fontStyle="oblique" m={1}>
                    Hobbies: {pessoa.hobies}
                  </Box>
                </Typography>
              </CardContent>
              <CardActions>
                <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
                  <Button className={classes.Btns} variant="outlined" color="primary">
                    Criar
                    </Button>
                </Link>
                <Link style={{ color: 'inherit', textDecoration: 'none' }} to='/editarCurso' >
                  <Button className={classes.Btns} variant="outlined" color="primary" onClick={() => EditUser(pessoa._id)}>
                    Editar
                    </Button>
                </Link>
                <Button className={classes.Btns} variant="outlined" color="primary" onClick={() => deleteUser(pessoa._id)}>
                  Deletar
                    </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
