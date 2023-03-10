import { Button, Grid, MenuItem, TextareaAutosize, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import NavbarExterna from "../../components/estaticos/navbarexterna/NavbarExterna";
import './Contato.css'


function Contato() {
    return (
        <>
        <NavbarExterna/>
        <Grid container direction='column' justifyContent='center' alignContent='center' className="container-contato">
                <Box text-align='center'>
                     <Typography variant='h5' color='textPrimary' component='h5' align='center' className="titulo-contato">CONTATE-NOS</Typography>
                </Box>
                <Box paddingX={1}  boxShadow={2} className='box-contato'>                    
                    <form  className='form-contato'>
                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' className="campos" size='small' fullWidth />
                        <TextField id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' className="campos" size='small' fullWidth />
                        <TextField id="select" label='Categoria' variant='outlined' name='categoria' margin='normal' className="campos" size='small' fullWidth select>
                            <MenuItem value="duvidas">Dúvidas</MenuItem>
                            <MenuItem value="sugestoes">Sugestões</MenuItem>
                        </TextField>
                        <TextareaAutosize id='mensagem' aria-label='Mensagem' aria-variant='outlined' name='mensagem' aria-margin='normal' className='txt-area' rows="8"/>
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                Enviar
                            </Button>
                        </Box> 
                    </form>
                </Box>
            </Grid>
        </>
    )
}

export default Contato;
