import { styled } from ".."

export const ProductContainer = styled('main', {
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  maxWidth: 1180,

  '@lg': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
  
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 480,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '@sm': {
    height: 576,
  }
})

export const ProductDetails = styled('div', {
  margin: '0 auto',
  maxWidth: 576,

  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$xl',
    color: '$gray300',

    '@sm': {
      fontSize: '$2xl'
    }
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$xl',
    color: '$green300',

    '@sm': {
      fontSize: '$2xl'
    }
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: '3rem',
    backgroundColor: '$green500',
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '@lg': {
      marginTop: 'auto',
    }
  },
})