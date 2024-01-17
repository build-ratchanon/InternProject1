import styles from "@/styles/Topic.module.css"
import { Box } from "@mui/material"

export function Topic(){
    return (
        <Box className={styles.Topic}>
            <div className={styles.Text}>
                Profile management
            </div>
        </Box>
    )
}