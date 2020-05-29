import { createMuiTheme } from '@material-ui/core/styles';

const blush = "#F5C7B8";
const cantalope =  "#FFA177"; 

export default createMuiTheme({
    palette: {
        common: {
            pink: `${blush}`,
            orange: `${cantalope}`
        }
    }, 
    primary: {
        main:  `${blush}`,
    },
    secondary: {
        main: `${cantalope}`
    }
})