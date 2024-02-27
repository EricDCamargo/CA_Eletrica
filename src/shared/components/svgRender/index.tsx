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
      width={width}
      height={height}
    />
  )
}

const Svg = styled.img<{ height?: string; width?: string }>`
  position: 'relative';
  height: ${props => (props.height ? props.height : 'fit-content')};
  width: ${props => (props.width ? props.width : 'fit-content')};
`
