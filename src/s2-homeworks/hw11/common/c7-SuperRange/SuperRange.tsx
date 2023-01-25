import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                margin: '10px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    borderRadius: '50%',
                    color: 'white',
                    borderColor: 'white',
                    border: '1px solid #00CC22',
                },
                '& .MuiSlider-thumb::after': {
                    display: 'block',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#00CC22'
                },
                '& .MuiSlider-rail': {
                    color: '#000',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
