import React from 'react'
const styles = {
    div:{
        display: 'flex',
        justifyContent: 'center',
        margin: '5rem'
    }
}
export default () => {
    return (
        <div style={styles.div}><div class="lds-dual-ring"></div></div>
    )
}