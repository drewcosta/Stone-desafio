import Image from 'next/image'
import styled from 'styled-components'

interface Props{
  imagem?: string
  title: string
  selected?: boolean
  onClick: () => void
}

export const Button = ({ imagem, title, selected, onClick }: Props) => {
  return (
    <ButtonCard onClick={onClick} selected={selected}>
      {imagem && <Image src={imagem} alt={title}/>}
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonCard>
  )
}

const ButtonCard = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  width: 149px;
  border: 1px solid var(--green);
  border-radius: 8px;
  background: ${props => props.selected ? "var(--green)" : "var(--grey-medium)"};
  cursor: pointer;
`

const ButtonTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--bg-white);
`


