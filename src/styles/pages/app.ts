import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '1rem 0',
  gap: '2rem'
})

export const Header = styled('header', {
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto'
})