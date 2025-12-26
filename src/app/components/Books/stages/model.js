import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useMemo, memo } from 'react';
import Link from 'next/link';



const Model = memo(({ title, stages, books }) => {
    const render = useMemo(() => {
        return (
            <>
                {
                    stages ? stages.map((s, key) =>
                        <Accordion key={key} slotProps={{ transition: { unmountOnExit: true } }}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span" className='!text-2xl'>{s}</Typography>
                            </AccordionSummary>
                            {
                                books[key] && books[key].map(({ title, details, link }, k) =>
                                    <Accordion key={k}>
                                        <AccordionSummary
                                            expandIcon={<ArrowDownwardIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography component="span" className='!text-xl'>{title}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className='flex flex-col !gap-4'>
                                            <Typography className='!text-lg'>
                                                {details}
                                            </Typography>
                                            <a href={link}
                                                target="_blank"
                                                rel="noopener noreferrer" className='text-blue-600 text-xl !py-3'>اضغط للتحميل</a>
                                        </AccordionDetails>
                                    </Accordion>


                                )
                            }
                        </Accordion>
                    ) :
                        books && books.map((book, key) => {
                            return (

                                <Accordion key={key}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDownwardIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography component="span" className='!text-2xl'>{book.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='flex flex-col !gap-4'>
                                        <Typography className='!text-xl'>
                                            {book.details}
                                        </Typography>
                                        <a href={book.link}
                                            target="_blank"
                                            rel="noopener noreferrer" className='text-blue-600 !text-xl'>اضغط للتحميل</a>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })

                }
            </>
        )
    }, [stages, books])
    return (

        <Accordion className='!py-2' slotProps={{ transition: { unmountOnExit: true } }}>
            <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span" className='!text-2xl !font-cairo'>{title}</Typography>
            </AccordionSummary>
            {render}
        </Accordion>
    )
})


export default Model