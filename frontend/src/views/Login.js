import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {
    Box,
    Button,
    Card,
    FormControl,
    FormLabel,
    TextField,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";

function LoginView() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('email', user.email);
            formData.append('password', user.password);

            const response = await axios({
                url: 'http://localhost:10000/loginProc',
                method: 'POST',
                // headers: {
                //   'Content-Type': 'application/json'
                // },
                data: formData,
                withCredentials: true,
            });
            if (response.status === 200) {
                alert('로그인 성공! ');
                console.log('유저 이메일: ' + response.data.email);
                console.log('권한: ' + response.data.authorities);
                navigate('/home', {state: {userData: response.data}});
            }
        } catch (error) {
            console.log('로그인 에러: ', error);
        }
    };

    return (

        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid size={3} offset={{md: 3}} style={{backgroundColor: '#FFFFF3'}} alignItems="center">
                    Contents for this web
                </Grid>
                <Grid size={3}>
                    <Box>
                        <Typography
                            component="h1"
                            variant="h4"
                            sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
                        >
                            Sign in
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: 2}}
                        >
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <TextField
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    onChange={handleChange}
                                    value={user.email}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <TextField
                                    name="password"
                                    placeholder="••••••"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    onChange={handleChange}
                                    value={user.password}
                                />
                            </FormControl>
                            <Button type="submit" fullWidth variant="contained">
                                Sign in
                            </Button>
                            <Typography sx={{textAlign: 'center'}}>
                                Don&apos;t have an account?{' '}
                                <span>
                                        <Link
                                            variant="body2"
                                            sx={{alignSelf: 'center'}}
                                            to={"/join"}>
                                          Sign up
                                        </Link>
                                    </span>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    );
}

export default LoginView;