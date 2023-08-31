import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  padding: '0 1rem 1rem 1rem',

  '@sm': {
    gap: '1rem'
  },

  '@lg': {
    padding: '0 0 1rem 0'
  },

  '@xl': {
    gap: '4rem'
  },
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 100,
  maxWidth: 1180,
  margin: '0 auto',

  '@sm': {
    padding: '0 1rem'
  },

  '@lg': {
    padding: 0,
    height: 124,
  },

  '@xl': {
    maxWidth: '80vw',
  }
})