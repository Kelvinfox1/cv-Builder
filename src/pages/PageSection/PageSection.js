import React from 'react'
import { Container, Text, Box } from '@mantine/core'
import SectionTitle from '../SectionTitle/SectionTitle'
import useStyles from './PageSection.styles'

const PageSection = ({ title, description, children, white, ...others }) => {
  const { classes } = useStyles({ white })

  return (
    <Box className={classes.wrapper} {...others}>
      <Container size={1100}>
        <SectionTitle type={white ? 'white' : 'default'}>{title}</SectionTitle>
        {description && (
          <Text className={classes.description} size='xl'>
            {description}
          </Text>
        )}

        {children}
      </Container>
    </Box>
  )
}

export default PageSection
