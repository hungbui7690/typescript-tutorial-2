interface ImgProps extends React.ComponentPropsWithoutRef<'img'> {
  customProp: string
}

const Img = ({ src, loading, customProp }: ImgProps) => {
  // use the customProp here..
  return <img src={src} loading={loading} />
}
