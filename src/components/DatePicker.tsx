import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Button, createStyles, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { Event } from '@material-ui/icons'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { Actions } from "../actions"
import { useAuth0 } from "../auth0"
import { listImgUrl } from "../api"
import moment from "moment";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "20px"
    },
    button: {
      background: "default",
      fontSize: "32px",
      margin: "10px"
    },
    text: {
      fontSize: "32px",
    }
  })
);

export function MyDatePicker() {
  const { getTokenSilently } = useAuth0()

  const classes = useStyles();
  const startDate: Date = useSelector((state: any) => state.Reducer.datetime);
  const dispatch = useDispatch();


  const handleReload = async () => {
    const currentDate = new Date()
    const accessToken = await getTokenSilently()
    const prefix = moment(currentDate).format("YYYY/MM/DD/HH")
    const imgList = await listImgUrl(accessToken, prefix)
    dispatch(Actions.updateImages(imgList))
    dispatch(Actions.updateDate(currentDate))
  }

  const handleChange = async (datetime: Date) => {
    const accessToken = await getTokenSilently()
    const prefix = moment(datetime).format("YYYY/MM/DD/HH")
    const imgList = await listImgUrl(accessToken, prefix)
    dispatch(Actions.updateImages(imgList))
    dispatch(Actions.updateDate(datetime))
  }

  const MyCustomInput = ({ value, onClick }: any) => (
    <>
      <Button
        className={classes.button}
        variant="contained"
        onClick={onClick}
        startIcon={<Event />}
      >{value}</Button>
      <IconButton
        className={classes.button}
        onClick={()=>handleReload()}
      >
        <AutorenewIcon />
      </IconButton>
    </>
  );

  return (
    <div className={classes.root}>
      <DatePicker
        selected={startDate}
        onChange={(datetime: Date) => handleChange(datetime)}
        showTimeSelect
        dateFormat="yyyy/MM/dd HH:mm"
        timeCaption="time"
        timeFormat="HH:mm"
        timeIntervals={60}
        monthsShown={1}
        customInput={<MyCustomInput />}
      />
    </div>
  )
}