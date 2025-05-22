import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {FaqAccordionProps} from "@core/Accordions/Accordions.types";


const FaqAccordion : React.FC<FaqAccordionProps> = ({
    id,
    index,
    question,
    answer
}) => {
    return (
        <Accordion
            key={id}
            id={id}
            defaultExpanded={index === 0}
            disableGutters
            elevation={0}
            sx={{
                bgcolor: 'background.cardAlt',
                borderRadius: 4,
                overflow: 'hidden',
                '&:before': {
                    display: 'none',
                },
            }}
        >
            <AccordionSummary
                expandIcon={<AddIcon sx={{ color: 'primary.main' }} />}
                sx={{
                    padding: 3,
                    '& .MuiAccordionSummary-content': {
                        margin: 0
                    }
                }}
            >
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography sx={{ color: 'grey.400' }}>
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default FaqAccordion;