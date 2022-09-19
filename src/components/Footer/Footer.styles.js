import { createStyles } from '@mantine/core'

const FOOTER_HEIGHT = 400
const FOOTER_HEIGHT_TABLET = 460
const FOOTER_HEIGHT_MOBILE = 320
const NAVBAR_WIDTH = 260
const NAVBAR_BREAKPOINT = 760
const MDX_PAGE_BREAKPOINT = 1080

export default createStyles((theme) => ({
  spacer: {
    height: FOOTER_HEIGHT,

    '@media (max-width: 800px)': {
      height: FOOTER_HEIGHT_TABLET,
    },

    '@media (max-width: 640px)': {
      height: FOOTER_HEIGHT_MOBILE,
    },
  },

  wrapper: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: FOOTER_HEIGHT,

    '@media (max-width: 800px)': {
      height: FOOTER_HEIGHT_TABLET,
    },

    '@media (max-width: 640px)': {
      height: FOOTER_HEIGHT_MOBILE,
    },
  },

  withNavbar: {
    paddingLeft: NAVBAR_WIDTH + theme.spacing.md * 2,
    paddingRight: theme.spacing.md * 2,

    [`@media (max-width: ${MDX_PAGE_BREAKPOINT}px)`]: {
      paddingLeft: NAVBAR_WIDTH + theme.spacing.md,
      paddingRight: theme.spacing.md,
    },

    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  },

  inner: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 1000px)': {
      flexDirection: 'column',
    },

    '@media (max-width: 640px)': {
      paddingBottom: theme.spacing.md,
    },
  },

  logoSection: {
    maxWidth: 300,

    '@media (max-width: 1000px)': {
      marginBottom: theme.spacing.xl,
    },

    '@media (max-width: 640px)': {
      marginBottom: 0,
    },
  },

  description: {
    marginTop: theme.spacing.xs,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  title: {
    marginBottom: theme.spacing.sm,
    lineHeight: 1,
  },

  afterFooter: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    paddingTop: theme.spacing.md,
  },

  afterFooterNote: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],

    '& a': {
      ...theme.fn.focusStyles(),
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
    },
  },

  groups: {
    display: 'flex',

    '@media (max-width: 640px)': {
      display: 'none',
    },
  },

  social: {
    display: 'flex',

    '@media (max-width: 640px)': {
      display: 'block',
    },
  },

  socialButton: {
    '@media (max-width: 640px)': {
      flex: 1,
      width: '100%',
      marginLeft: 0,
      marginTop: theme.spacing.md,
    },
  },
}))
