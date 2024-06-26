export const Notification = ({ message }) => {
    const notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    
    }
    const errorStyle ={
        color:'red',
        background:'lightgrey',
        fontSize:20,
        borderStyle:'solid',
        borderColor:'red',
        borderRadius:5,
        padding:10,
    
    }

    if(message === null){
        return null
    }
    return(
        <div style={message.includes('Error') ? errorStyle : notificationStyle}>
            {message}
        </div>
    )
} 