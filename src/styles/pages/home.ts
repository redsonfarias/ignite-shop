import { styled } from ".."
import { CaretLeft, CaretRight } from "@phosphor-icons/react"

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  height: '100%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    p: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
      marginTop: 8
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})

export const BagContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$green500',
  borderRadius: 6,
  height: 56,
  width: 56,
})

export const LeftIcon = styled(CaretLeft, {
  height: 32,
  width: 32,
  zIndex: 1,
  position: 'absolute',
  left: 24,
  top: '50%',
  transform: 'translate(0, -50%)',
  cursor: 'pointer'
})

export const RightIcon = styled(CaretRight, {
  height: 32,
  width: 32,
  zIndex: 1,
  position: 'absolute',
  right: 24,
  top: '50%',
  transform: 'translate(0, -50%)',
  cursor: 'pointer'
})