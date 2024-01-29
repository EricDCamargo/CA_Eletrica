import styled from 'styled-components'

type Props = {
  src: string
  alt?: string
  height?: string
  width?: string
  borderRadius?: string
  onClick?: () => void
}

export const SvgRender = ({ alt, src, height, width, onClick }: Props) => {
  return (
    <Svg
      data-testid="@svg"
      className="svgRender"
      onClick={onClick}
      src={src}
      alt={alt}
      style={{ height: height, width: width, position: 'relative' }}
    />
  )
}

const Svg = styled.img`
  height: 40rem;
  @media (max-width: 425px) {
    height: 100%;
    width: 350px;
  }
  @media (max-width: 375px) {
    height: 100%;
    width: 300px;
  }
`
