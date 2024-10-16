import * as React from 'react';
import {Stack, Box, IconButton, styled} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Fingerprint} from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SendIcon from '@mui/icons-material/Send';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function BasicButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    )
}

function TextButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
        </Stack>
    );
}

function ContainedButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button>
        </Stack>
    );
}

function DisableElevation() {
    return (
        <Button variant="contained" disableElevation>
            Disable elevation
        </Button>
    );
}

function OutlinedButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
                Link
            </Button>
        </Stack>
    );
}

function HandlingClicks() {
    return (
        <Button
            onClick={() => {
                alert('clicked');
            }}
        >
            Click me
        </Button>
    )
}

function ButtonSizes() {
    return (
        <Box sx={{'& button': {m: 1}}}>
            <div>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
            </div>
            <div>
                <Button variant="outlined" size="small">
                    Small
                </Button>
                <Button variant="outlined" size="medium">
                    Medium
                </Button>
                <Button variant="outlined" size="large">
                    Large
                </Button>
            </div>
            <div>
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Large
                </Button>
            </div>
        </Box>
    );
}

function ColorButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
        </Stack>
    );
}

function IconLabelButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon/>}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon/>}>
                Send
            </Button>
        </Stack>
    );
}

function IconButtons() {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete">
                <DeleteIcon/>
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon/>
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon/>
            </IconButton>
        </Stack>
    );
}

function IconButtonSizes() {
    return (
        <Stack direction="row" spacing={1} sx={{alignItems: 'center'}}>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit"/>
            </IconButton>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small"/>
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon/>
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit"/>
            </IconButton>
        </Stack>
    );
}

function IconButtonColors() {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint/>
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint/>
            </IconButton>
        </Stack>
    );
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function InputFileUpload() {
    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon/>}
        >
            Upload files
            <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
            />
        </Button>
    );
}

// const BootstrapButton = styled(Button)({
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 16,
//     padding: '6px 12px',
//     border: '1px solid',
//     lineHeight: 1.5,
//     backgroundColor: '#0063cc',
//     borderColor: '#0063cc',
//     fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//         backgroundColor: '#0069d9',
//         borderColor: '#0062cc',
//         boxShadow: 'none',
//     },
//     '&:active': {
//         boxShadow: 'none',
//         backgroundColor: '#0062cc',
//         borderColor: '#005cbf',
//     },
//     '&:focus': {
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
// });

// const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//         backgroundColor: purple[700],
//     },
// }));
//
// function CustomizedButtons() {
//     return (
//         <Stack spacing={2} direction="row">
//             <ColorButton variant="contained">Custom CSS</ColorButton>
//             <BootstrapButton variant="contained" disableRipple>
//                 Bootstrap
//             </BootstrapButton>
//         </Stack>
//     );
// }


const images = [
    {
        url: 'https://mui.com/static/images/buttons/breakfast.jpg',
        title: 'Breakfast',
        width: '40%',
    },
    {
        url: 'https://mui.com/static/images/buttons/burgers.jpg',
        title: 'Burgers',
        width: '30%',
    },
    {
        url: 'https://mui.com/static/images/buttons/camera.jpg',
        title: 'Camera',
        width: '30%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

function ButtonBaseDemo() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={(theme) => ({
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: `calc(${theme.spacing(1)} + 6px)`,
                            })}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
}

function LoadingButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <LoadingButton loading variant="outlined">
                Submit
            </LoadingButton>
            <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                Fetch data
            </LoadingButton>
            <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
            >
                Save
            </LoadingButton>
        </Stack>
    );
}

function LoadingButtonsTransition() {
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }

    return (
        <div>
            <FormControlLabel
                sx={{ display: 'block' }}
                control={
                    <Switch
                        checked={loading}
                        onChange={() => setLoading(!loading)}
                        name="loading"
                        color="primary"
                    />
                }
                label="Loading"
            />
            <Box sx={{ '& > button': { m: 1 } }}>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    loading={loading}
                    variant="outlined"
                    disabled
                >
                    Disabled
                </LoadingButton>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    loading={loading}
                    loadingIndicator="Loading…"
                    variant="outlined"
                >
                    Fetch data
                </LoadingButton>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Send
                </LoadingButton>
                <LoadingButton
                    size="small"
                    color="secondary"
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                >
                    Save
                </LoadingButton>
            </Box>
            <Box sx={{ '& > button': { m: 1 } }}>
                <LoadingButton
                    onClick={handleClick}
                    loading={loading}
                    variant="outlined"
                    disabled
                >
                    Disabled
                </LoadingButton>
                <LoadingButton
                    onClick={handleClick}
                    loading={loading}
                    loadingIndicator="Loading…"
                    variant="outlined"
                >
                    Fetch data
                </LoadingButton>
                <LoadingButton
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                >
                    Send
                </LoadingButton>
                <LoadingButton
                    color="secondary"
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                >
                    Save
                </LoadingButton>
            </Box>
        </div>
    );
}

export default function Buttons() {
    return (
        <Stack spacing={2} direction="column">
            <BasicButtons/>
            <TextButtons/>
            <ContainedButtons/>
            <DisableElevation/>
            <OutlinedButtons/>
            <HandlingClicks/>
            <ColorButtons/>
            <ButtonSizes/>
            <IconLabelButtons/>
            <IconButtons/>
            <IconButtonSizes/>
            <IconButtonColors/>
            <InputFileUpload/>
            <ButtonBaseDemo/>
            <LoadingButtons/>
            <LoadingButtonsTransition/>
        </Stack>
    );
}