import Image from "next/image";
import { styled } from "..";

export const ProductContainer = styled('main', {
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '@lg': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
  
    maxWidth: 1180,
  }
})

export const ImageContainer = styled('div', {
  margin: '0 auto',
  width: '100%',
  maxWidth: 576,
  height: 576,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '@lg': {
    margin: 0
  }
})

export const ProductDetails = styled('div', {
  margin: '0 auto',
  maxWidth: 576,

  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
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