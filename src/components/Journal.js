import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

import { Button, Container, Typography } from "@mui/material";
import Entry from "./Entry";
import AddEntry from './AddEntry';





const Journal = () => {

    const [entries, setEntries] = useState([]);
    const [initialized, setInitialized] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (initialized) return;
        setInitialized(true);

        setLoading(true);
        fetch('http://localhost:5000/entries')
            .then(response => response.json())
            .then(result => {

                setEntries(result.data);
                setLoading(false);
            })
    }, [initialized, setInitialized]);

    const save = useCallback((entry) => {
        setEntries([
            entry, ...entries
        ])
        setLoading(true);
        fetch('http://localhost:5000/entry', {
            method: 'post',
            body: JSON.stringify({ entry, }),
            headers: { 'Content-Type': 'application/json' },
        })
    }, [entries]);

    return (

        <Container>
            <Typography variant="h1">Journal</Typography>
            {
                loading ? (<span>Loading...</span>) : null
            }
            <AddEntry save={save} />
            <div>

                {
                    entries.map((entry) => {
                        return (<Entry key={entry.id} entry={entry} />);
                    }

                    )
                }

            </div>

            <Button onClick={() => setEntries([])}   >Clear Journal</Button>
        </Container >
    );
};

export default Journal;