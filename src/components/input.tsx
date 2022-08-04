import React, { ChangeEvent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        margin: '10px'
    },
    button: {
        backgroundColor: '#ee1515',
        color: 'white',
        margin: '0px 5px',
        textTransform: 'none' as 'none'
    }
};

type Props = {
    onInputSubmit: (value: string) => void;
};
type State = {
    value: string;
};

export default function Input(props: Props) {
    const [value, setValue] = useState('');

    const onInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    const onSubmit = () => {
        if (value.length > 0)
            props.onInputSubmit(value.toLowerCase());
    };

    return (
        <div style={styles.container}>
            <TextField
                // id="outlined-full-width"
                label="Name or Number"
                style={styles.input}
                placeholder="Charmander"
                // helperText="Type a name or entry number"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true
                }}
                onChange={onInput}
                value={value}
                onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        ev.preventDefault();
                        onSubmit();
                    }
                }}
            />
            <Button
                variant="outlined"
                style={styles.button}
                onClick={onSubmit}
            >
        Submit
            </Button>
        </div>
    );
}
