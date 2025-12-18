import PostCardBase from "./PostCardBase";

type Props = {
  imagePosition?: "left" | "right";
} & React.ComponentProps<typeof PostCardBase>;

export default function PostCardHorizontal({
  imagePosition = "left",
  ...props
}: Props) {
  return (
    <PostCardBase
      {...props}
      variant="horizontal"
      imagePosition={imagePosition}
    />
  );
}
