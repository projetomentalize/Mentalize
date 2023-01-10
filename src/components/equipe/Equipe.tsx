import { Divider } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import React from "react";
import './Equipe.css'


function Equipe() {
    return (
        <>
            <Divider />
            <Grid container direction='row' justifyContent='center' alignContent='center'>
                <Grid item xs={4}>
                    <Box>
                        <a href="https://github.com/CarlosEduardoSilverio" target="_blank" rel="noopener noreferrer">
                            <img src="https://github.com/projetomentalize/midia/blob/avatar/cadu.png?raw=true" className="img-equipe" alt="" />
                        </a>
                        <a href="https://github.com/gabrielsjobs" target="_blank" rel="noopener noreferrer">
                            <img src="https://github.com/projetomentalize/midia/blob/avatar/Gabriel.png?raw=true" className="img-equipe" alt="" />
                        </a>
                        <a href="https://github.com/tadyello" target="_blank" rel="noopener noreferrer">
                            <img src="https://github.com/projetomentalize/midia/blob/avatar/tadyello.png?raw=true" className="img-equipe" alt="" />
                        </a>
                    </Box>
                </Grid>
                <Grid item xs={3} >
                    <Box mt={30}>
                        <img src="https://github.com/projetomentalize/midia/blob/avatar/brain.png?raw=true" className='brain' alt="" />
                    </Box>
                </Grid>
                <Grid item xs={4} >
                    <Box>
                        <a href="https://github.com/deehrv" target="_blank" rel="noopener noreferrer">
                            <img src="https://github.com/projetomentalize/midia/blob/avatar/pekky.png?raw=true" className="img-equipe" alt="pekky" />
                        </a>
                    </Box>
                    <Box>
                        <a href="https://github.com/jessykacarolina" target="_blank" rel="noopener noreferrer">
                            <img src="https://github.com/projetomentalize/midia/blob/avatar/jessy.png?raw=true" className="img-equipe" alt="" />
                        </a>
                    </Box>
                    <Box>
                        <a href="https://github.com/Renanbarsan" target="_blank" rel="noopener noreferrer">
                            <img src="https://github.com/projetomentalize/midia/blob/avatar/Renanv1.svg?raw=true" className="img-equipe" alt="" />
                        </a>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Equipe;
