import { Button, Card, MenuItem, Select, TextField, } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { v4 as uuid} from "uuid";

const MOODS = ['😶', '😊', '🙁', '😀', '😟'];

const AddEntry = ({ save }) => {

    const [text, setText] = useState('');
    const [mood, setMood] = useState('😶');

    return (
        <Container>
            <Card>
            <TextField
                style={{maxWidth: 460, width: '100%'}}
                placeholder="Journal Entry"
                value={text}
                onChange={(event) => setText(event.target.value)}
            
            />
            <Select
                label="Mood"
                value = {mood}
                onChange={(event) => setMood(event.target.value)}
                >
                    {
                        MOODS.map((emotionOption) => (
                        <MenuItem key={emotionOption} value={emotionOption}>{emotionOption}</MenuItem>
                            ))
                    }
            </Select>
            <br/>
            <Button
                onClick={() => {
                    save({
                    id: uuid(),
                    text,
                    mood,
                    date: (new Date()).toLocaleDateString("en-US"),
                    open: true,
                });

                setText('');
                setMood('😶');
            }}
            >Save</Button>
            </Card>
        </Container>
    )

};

export default AddEntry;