import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json'



function titulo(props) {
    const tag = props.tag || h1
    return (
        <div>
            <tag>{props.children}</tag>
            <style jsx>{`
                ${tag} {
                    color:${appConfig.theme.colors.neutrals['000']};
                    font-size:24px;
                    font-weight:600px;
                }
            `}</style>
        </div>
    )
}


//Componente react

// function homepage(){
//JSX
// return(
// <div>
{/* <GlobalStyle/>  */ }
{/* <titulo tag="h2">Boas vindas de volta!</titulo>  */ }
{/* <h2>Discord Alura Matrix</h2>  */ }
{/*  */ }
{/* </div> */ }
// )
// }
// export default homepage


export default function PaginaInicial() {
   // const username = 'ViniciusFavorito';
    const [username,setUsername] = React.useState('ViniciusFavorito');
    const roteamento = useRouter();


    return (
        <>
            
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    {/* Formul�rio */}
                    <Box
                        as="form"
                        onSubmit={function (e){
                            e.preventDefault()
                            console.log("Alguem apertou o botao")
                            roteamento.push('/chat');
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <titulo tag="h2">Boas vindas de volta!</titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        {/* <input 
                            type="text"
                            value={username}
                            onChange={function (event){
                                    console.log("O usuário digitou: ", event.target.value)
                                    // onde está o valor?
                                    const valor = event.target.value;
                                    //trocar valor da variável
                                    setUsername(valor)
                                }
                            }
                            /> */}
                        <TextField
                            value={username}
                            onChange={function (event){
                                    console.log("O usuário digitou: ", event.target.value)
                                    // onde está o valor?
                                    const valor = event.target.value;
                                    //trocar valor da variável
                                    setUsername(valor)
                                }
                            }
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                        
                    </Box>
                    {/* Formul�rio padrão */}

                    <box
                        as="form"
                        onSubmit={function (e){
                            e.preventDefault()
                            console.log("Alguem apertou o botao")
                            roteamento.push('/gr8');
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >

                    <Button
                            type='submit'
                            label='Entrar na aba GR8'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </box>


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}