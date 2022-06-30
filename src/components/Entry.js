import { Card, Typography } from "@mui/material";

const cardStyle = { padding: 6, margin: 6 };

const Entry = (props) => {

    const {entry} = props;

    return (

    <Card style={cardStyle}>
        <Typography variant="h4">{entry.mood}</Typography> 
        {
            entry.open ? (
                <Typography variant="body">{entry.text}</Typography> 
            ) : null
        }
       
    </Card>

        );
};

export default Entry;

