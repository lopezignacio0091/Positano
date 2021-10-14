import { Grid } from '@material-ui/core';
import React from 'react'; 
import {useSelector,useDispatch} from 'react-redux';
import {getByDate,setLoading} from '../../../actions/CostosAction';
import { KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
const HeaderDate = () => {
    const dispatch = useDispatch();
    const { date } = useSelector(state => state.CostoReducer);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container >
            <Grid item xs={12} md={12} lg={12} >
                <KeyboardDatePicker
                    disableToolbar
                    variant="outlined"
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    label="Date Ocurrency"
                    value={date}
                    onChange={(date) => { dispatch(setLoading);dispatch(getByDate(date))}}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </Grid>
        </MuiPickersUtilsProvider>
    )
}

export default HeaderDate;