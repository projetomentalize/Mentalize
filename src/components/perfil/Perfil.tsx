import {Grid,Typography} from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import User from '../../models/User';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Perfil.css';
import { buscaId } from '../../service/Service';

function Perfil() {
    const token = useSelector<TokenState, TokenState['tokens']>(
        state => state.tokens
    );

    const userId = useSelector<TokenState, TokenState['id']>(state => state.id);

    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto_url: '',
        tipo_usuario: '',
    });

    async function getUserById(id: number) {
        await buscaId(`/usuarios/${id}`, setUser, {
            headers: { Authorization: token },
        });
    }

    useEffect(() => {
        getUserById(+userId);
    }, []);

    return (
        <>
            <div className="back2p">
                <Container>
                    <div className="perfilContainer">
                        <Grid
                            xs={3}
                            alignItems="center"
                            justifyContent="center"
                            className="perfil"
                        >
                            <img src={user.foto_url} alt="" className="imgPerfil" />
                            <Typography variant="h5" align="center">
                                {user.nome} <br />
                                <br />
                                tipo_usuario: {user.tipo_usuario} <br />
                                <br />
                                Contato: {user.usuario}
                            </Typography>
                        </Grid>
                        <Grid xs={9} justifyContent="center" className="perfil2">
                            <Typography variant="h4" align="center">
                                Postagens de {user.nome}
                            </Typography>
                            <Typography align="center">
                                <br />
                                Você tem um total de {user.postagem?.length} postagens
                                publicadas:
                            </Typography>
                            <div className="postUser">
                                {user.postagem?.map(post => (
                                    <div className="postPerfil">
                                        <Typography variant="h6" component="h2">{post.titulo}</Typography>
                                       
                                        <p>{post.texto}</p>
                                        <strong> Tema: {post.tema?.nome}</strong>
                                    </div>
                                ))}
                            </div>
                        </Grid>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Perfil;