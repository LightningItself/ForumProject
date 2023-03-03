import { extendTheme } from "@chakra-ui/react";

const lightTheme = extendTheme({
    colors: {
        brand: {
            100: 'gray.900'
        }
    },
    styles: {
        global: {
            body: {
                bg: 'gray.200',
            },
            
        }
    }
})

export default lightTheme